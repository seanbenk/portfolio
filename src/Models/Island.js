/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useThree } from '@react-three/fiber'

export default function Model(props) {
  const {camera} = useThree()
  const group = useRef()
  const { nodes, materials } = useGLTF('/island.glb')
  materials.islandMat.roughness = 1
  materials.waterMat.transparent = true
  materials.waterMat.opacity = 0.7

  return (
    <group ref={group} {...props} dispose={null} shadows>
      <group position={[-0.04, 6.13, 0.64]}>
        <group position={[0, 0, -0.64]} rotation={[0, 0, 0]}>
          <group position={[0, 1.39, 0]} rotation={[0, 0, 0.01]}>
            <group position={[0, 1.81, 0]} rotation={[0, 0, -0.01]}>
              <group position={[0, 2.14, 0]} rotation={[0, 0, 0]}>
                <group position={[1.11, -0.4, -0.01]} rotation={[0, 0.05, -1.62]}>
                  <group position={[0, 1.96, 0]} rotation={[0.25, 0.01, 0.06]} scale={[1, 1, 1]} />
                </group>
                <group position={[-1.06, -0.4, -0.01]} rotation={[0, -0.05, 1.62]}>
                  <group position={[0, 1.96, 0]} rotation={[0.25, -0.01, -0.06]} scale={[1, 1, 1]} />
                </group>
              </group>
            </group>
          </group>
          <group position={[0.92, 0.09, -0.09]} rotation={[-0.04, 0.04, -3.11]}>
            <group position={[0, 2.85, 0]} rotation={[-0.08, 0, -0.03]} />
          </group>
          <group position={[-0.92, 0.09, -0.09]} rotation={[-0.04, -0.04, 3.11]} scale={[1, 1, 1]}>
            <group position={[0, 2.85, 0]} rotation={[-0.08, 0, 0.03]} scale={[1, 1, 1]} />
          </group>
        </group>
      </group>
      <mesh geometry={nodes.Island.geometry} material={materials.islandMat} receiveShadow/>
      <mesh
        geometry={nodes.Water.geometry}
        material={materials.waterMat}
        position={[0, 0.56, -0.01]}
        scale={[2.22, 2.22, 2.22]}
        receiveShadow
      />
      <mesh
        geometry={nodes.tree1.geometry}
        material={nodes.tree1.material}
        position={[0.98, 1.15, 0.78]}
        scale={[0.05, 0.05, 0.05]}
        castShadow
      />
      <mesh
        geometry={nodes.tree2.geometry}
        material={nodes.tree2.material}
        position={[0.92, 1.19, -0.12]}
        rotation={[-Math.PI, 0.77, -Math.PI]}
        scale={[0.06, 0.06, 0.06]}castShadow
      />
      <mesh
        geometry={nodes.tree3.geometry}
        material={nodes.tree3.material}
        position={[0.79, 1.01, -1.59]}
        rotation={[Math.PI, -1.02, Math.PI]}
        scale={[0.04, 0.04, 0.04]}castShadow
      />
      <mesh
        geometry={nodes.Car.geometry}
        material={materials.carMat}
        position={[0.63, 0.71, -1.45]}
        rotation={[-0.75, 0.86, 2.23]}
        scale={[0.08, 0.08, 0.08]}castShadow
      />
      <mesh
        geometry={nodes.Character001.geometry}
        material={materials.characterMat}
        position={[0.89, 0.91, 0.16]}
        rotation={[0, 1.44, 0]}
        scale={[0.01, 0.01, 0.01]}castShadow
      />
      <mesh
        geometry={nodes.WizardHat.geometry}
        material={materials.wizardHatMat}
        position={[1.32, 0.82, -0.1]}
        rotation={[-0.03, -0.06, -0.1]}
        scale={[0.03, 0.04, 0.03]}castShadow
      />
      <mesh
        geometry={nodes.rock.geometry}
        material={materials.rockMat}
        position={[1.39, 0.85, 0.04]}
        scale={[0.29, 0.29, 0.29]}castShadow
      />
      <group position={[1.37, 0.76, -0.11]} rotation={[-1.62, 0.13, -0.46]} scale={[0, -0.04, 0]}>
        <mesh geometry={nodes.Cylinder.geometry} material={materials.wandWhiteMat}castShadow />
        <mesh geometry={nodes.Cylinder_1.geometry} material={materials.wandBlackMat}castShadow />
      </group>
      <group position={[1.11, 0.79, 0.66]} rotation={[0.75, 0.16, 1.68]} scale={[0.01, 0.01, 0.01]}>
        <mesh geometry={nodes.Plane010.geometry} material={materials.crossMat} />
        <mesh geometry={nodes.Plane010_1.geometry} material={materials.naughtMat} />
        <mesh geometry={nodes.Plane010_2.geometry} material={materials.tictactoeMat} castShadow/>
      </group>
      <mesh
        geometry={nodes.Cloud1.geometry}
        material={nodes.Cloud1.material}
        position={[0.4, 2.12, -1.74]}
        scale={[0.45, 0.36, 0.6]}castShadow
      />
      <mesh
        geometry={nodes.Cloud2.geometry}
        material={nodes.Cloud2.material}
        position={[1.05, 2, 1.95]}
        scale={[0.44, 0.35, 0.59]}castShadow
      />
      <mesh
        geometry={nodes.Cloud3.geometry}
        material={nodes.Cloud3.material}
        position={[0.06, 2.52, 1.15]}
        scale={[0.47, 0.37, 0.63]}castShadow
      />
      <mesh
        geometry={nodes.Cloud4.geometry}
        material={nodes.Cloud4.material}
        position={[-1.15, 2.65, -0.73]}
        scale={[0.65, 0.51, 0.87]}castShadow
      />
      <mesh
        geometry={nodes.Fish1.geometry}
        material={materials.fishRedMat}
        position={[0.15, 0.64, -0.47]}
        rotation={[0.27, 0.07, 0.45]}
        scale={[0.14, 0.14, 0.14]}castShadow
      />
      <mesh
        geometry={nodes.Fish2.geometry}
        material={materials.fishBlueMat}
        position={[0.46, 0.72, -0.43]}
        rotation={[-0.14, 0.2, -0.03]}
        scale={[0.14, 0.14, 0.14]}castShadow
      />
      <mesh
        geometry={nodes.Fish3.geometry}
        material={materials.fishYellowMat}
        position={[0.68, 0.63, -0.72]}
        rotation={[0.43, 0.16, -0.42]}
        scale={[0.14, 0.14, 0.14]}castShadow
      />
    </group>
  )
}

useGLTF.preload('/island.glb')
