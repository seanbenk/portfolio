import './Projects.scss'
import React, { Suspense, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, softShadows, PerspectiveCamera } from '@react-three/drei/core'
// import BackDrop from '../Models/Backdrop'
import { motion } from 'framer-motion'
import Island from '../Models/Island'

// softShadows({
//   frustum: 3.75, // Frustum width (default: 3.75) must be a float
//   size: 0.005, // World size (default: 0.005) must be a float
//   near: 9.5, // Near plane (default: 9.5) must be a float
//   samples: 17, // Samples (default: 17) must be a int
//   rings: 11, // Rings (default: 11) must be a int
// })

export default function Projects(props) {

    // const [, updateState] = React.useState();
    // const forceUpdate = React.useCallback(() => updateState({}), []);

    const orbitRef = useRef({object:{position:{x:1,y:1,z:1}}})
    const lightRef = useRef()

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
            {...{ fov: 75, near: 0.1, far: 1000, position: [4, 2, 0] }} // All THREE.PerspectiveCamera props are valid
          >
            <pointLight
            castShadow
            intensity={1}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-far={50}
            shadow-camera-left={-10}
            shadow-camera-right={10}
            shadow-camera-top={10}
            shadow-camera-bottom={-10}
          />
            <mesh />
          </PerspectiveCamera>
          {/* <ambientLight intensity={0.2}></ambientLight> */}
        <OrbitControls minDistance={1} maxDistance={10} ref={orbitRef}/>
        
        {/* <Backdrop/> */}
        <Suspense fallback={'Loading 3d Models...'}>
          <Island/>
        </Suspense>
      </Canvas>
    </motion.div>
    
  )
}