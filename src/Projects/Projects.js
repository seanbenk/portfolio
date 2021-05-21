import './Projects.scss'
import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, softShadows, PerspectiveCamera, ContactShadows, Sky } from '@react-three/drei/core'
import { motion } from 'framer-motion'
import Island from '../Models/Island-1'


export default function Projects(props) {

  return (
    <motion.div className="scene" 
      animate={props.showProjects? {y: '-100vh'}:{y: 0}} 
      transition={{duration: 0.05, type: 'tween'}}>
        {/* <button onClick={()=>{
              console.log(orbitRef.current.object.position)
              console.log(lightRef.current.position)
              console.log(Canvas)
              forceUpdate()
          }}>Click</button> */}
      <Canvas 
        style={{height:'100vh'}} id="projects" shadows>
          <PerspectiveCamera
            makeDefault
            {...{ fov: 75, near: 0.1, far: 1000, position: [4, 2, 0] }}
          >
            <directionalLight
              castShadow
              intensity={2}
              color={0xffffff}
              // shadow-mapSize-width={1024}
              // shadow-mapSize-height={1024}
              // shadow-camera-far={10}
              // shadow-camera-left={-10}
              // shadow-camera-right={10}
              // shadow-camera-top={100}
              // shadow-camera-bottom={-10}
            />
          </PerspectiveCamera>
          {/* <Sky
            distance={45} // Camera distance (default=450000)
            inclination={0.5} // Sun elevation angle from 0 to 1 (default=0)
            azimuth={0.1} // Sun rotation around the Y axis from 0 to 1 (default=0.25)
            turbidity={0.9}
            rayleigh={3.5}
            mieCoefficient={0.1}
            {...props} // All three-stdlib/objects/Sky props are valid
          /> */}
          {/* <ambientLight intensity={0.1}></ambientLight> */}
        <OrbitControls minDistance={1} maxDistance={10}/>
        {/* <ContactShadows/> */}
        <Suspense fallback={'Loading 3d Models...'}>
          <Island/>
        </Suspense>
      </Canvas>
    </motion.div>
    
  )
}