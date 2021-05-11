import './Scene.css'
import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, softShadows, CubeCamera } from '@react-three/drei/core'
// import BackDrop from '../Models/Backdrop'
import { motion } from 'framer-motion'
import World3test from '../Models/World3test'

softShadows();

export default function Scene(props) {

    const [, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);

    const orbitRef = useRef({object:{position:{x:1,y:1,z:1}}})
    const lightRef = useRef()

  return (
    <motion.div className="scene" 
      animate={props.showProjects? {y: '-100vh'}:{y: 0}} 
      transition={{duration: 0.05, type: 'tween'}}>
        <button onClick={()=>{
              console.log(orbitRef.current.object.position)
              console.log(lightRef.current.position)
              console.log(Canvas)
              forceUpdate()
          }}>Click</button>
      <Canvas 
        camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 1.5] }} 
        style={{height:'100vh'}} id="projects" shadows>
          
          <pointLight 
            intensity={0.3}     
            castShadow
            motion
            ref={lightRef}
            position={[orbitRef.current.object.position.x, orbitRef.current.object.position.y, orbitRef.current.object.position.z]}
          />
        <OrbitControls minDistance={1} maxDistance={3} ref={orbitRef}/>
        
        {/* <Backdrop/> */}
        <ambientLight intensity={0.1}></ambientLight>
        <World3test/>
      </Canvas>
    </motion.div>
    
  )
}