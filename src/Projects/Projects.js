import './Projects.scss'
import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Sky, Stars } from '@react-three/drei/core'
import { motion } from 'framer-motion'
import Island from '../Models/Island'

export default function Projects(props) {

  return (
    <motion.div className="scene"
      animate={props.showProjects? {y: '-100vh'}:{y: 0}} 
      transition={{duration: 0.05, type: 'tween'}} >
      <Canvas style={{height:'100vh'}} shadows>
        <Suspense fallback={"loading 3d Models"}>
          <PerspectiveCamera makeDefault 
            {...{ fov: 75, near: 0.1, far: 1000, position:[4,2,0]}}>
          </PerspectiveCamera>
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
          <OrbitControls minDistance={1} maxDistance={10}/>
          <Sky
            azimuth={180}
            elevation={0}
            exposure={0.5}
            rayleigh={0.035}
          />
          <Stars
            radius={100} // Radius of the inner sphere (default=100)
            depth={50} // Depth of area where stars should fit (default=50)
            count={5000} // Amount of stars (default=5000)
            factor={4} // Size factor (default=4)
            saturation={0} // Saturation 0-1 (default=0)
             // Faded dots (default=false)
          />
          <Island/>
        </Suspense>
      </Canvas>
    </motion.div>
    
  )
}