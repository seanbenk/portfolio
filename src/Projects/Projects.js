import './Projects.scss'
import ProjectsList from './ProjectsList'
import ProjectsInstructions from './ProjectsInstructions'
import { ProjectInfo } from './ProjectInfo'
import React, { Suspense, useState, useRef } from 'react'
import ToggleSwitch from './ToggleSwitch'
import { useSpring, animated } from 'react-spring'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Sky, Stars } from '@react-three/drei/core'
import { motion } from 'framer-motion'
import Island from '../Models/Island'

export default function Projects({ showProjects, showProjectsInstructions, setShowProjectsInstructions }) {

  const [currentProject, setCurrentProject] = useState(-1)

  const [showSky, setShowSky] = useState(false)

  const orbitControlsRef = useRef()

  const cameraSpring = useSpring({
    pos:[2,1,0.6],
    from:{pos:[4,4,0]},
    config:{duration: 2500}
  })

  function closeProjectsInstructions(){
    setShowProjectsInstructions(false)
    cameraSpring.pos.reset()
  }

  function openProjectsInstructions(){
    setShowProjectsInstructions(true)
  }

  function closeProjectInfo(){
    setCurrentProject(-1)
  }

  function toggleShowSky(){
    setShowSky(prev => !prev)
  }

  const AnimatedPerspectiveCamera = animated(PerspectiveCamera)

  return (
    <motion.div className="scene"
      animate={showProjects? {y: '-100vh'}:{y: 0}} 
      transition={{duration: 0.05, type: 'tween'}} >
        <div className="show-sky-switch">
          <div>
            <ToggleSwitch state={showSky} setState={toggleShowSky}/>
            <span className={showSky?"dark-mode":null}>Sky</span>
          </div>
          {showProjectsInstructions? null:<span className={showSky?"material-icons info-btn dark-mode":"material-icons info-btn"} onClick={openProjectsInstructions}>help_outline</span>}
        </div>
          <Canvas style={{height:'100vh'}}>
            <Suspense fallback={"loading 3d Models"}>
              <AnimatedPerspectiveCamera makeDefault 
                {...{ fov: 75, near: 0.1, far: 1000}} position={cameraSpring.pos}>
              </AnimatedPerspectiveCamera>
              <directionalLight
                position={[10,8,0]}
                castShadow
                intensity={0.8}
                color={0xffffff}
                // shadow-mapSize-width={256}
                // shadow-mapSize-height={256}
                // shadow-camera-far={50}
                // shadow-camera-left={-50}
                // shadow-camera-right={50}
                // shadow-camera-top={50}
                // shadow-camera-bottom={-50}
              />
              <ambientLight intensity={0.6}/>
              <OrbitControls minDistance={1} maxDistance={10} ref={orbitControlsRef} target={[0.89, 0.91, 0.16]}/>
              {showSky?
              <> 
              <Sky
                rayleigh={20}
              />
              <Stars radius={100} // Radius of the inner sphere (default=100)
                depth={50} // Depth of area where stars should fit (default=50)
                count={5000} // Amount of stars (default=5000)
                factor={4} // Size factor (default=4)
                saturation={0} // Saturation 0-1 (default=0)
                // Faded dots (default=false)
              />
              </>
              :null}
              
                <Island setCurrentProject={setCurrentProject}/>
            </Suspense>
          </Canvas>
          <ProjectsList setCurrentProject={setCurrentProject} showSky={showSky}/>
        {showProjectsInstructions? <ProjectsInstructions closeProjectsInstructions={closeProjectsInstructions}/>:null}
        {currentProject >= 0 ?<ProjectInfo projectNumber={currentProject} closeProjectInfo={closeProjectInfo}/>:null}
    </motion.div>
    
  )
}