/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 TQ3281SW_PM_PM25.gltf
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/TQ3281SW_PM_PM25.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Text003.geometry} material={materials.Text} position={[25.31, -0.3, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} />
      <mesh geometry={nodes.Text004.geometry} material={materials.Text} position={[25.29, 0, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[1.27, 1, 1.27]} />
      <mesh geometry={nodes.Text001.geometry} material={materials.Text} position={[-25.31, -0.3, 0]} rotation={[Math.PI / 2, 0, Math.PI / 2]} />
      <mesh geometry={nodes.Text002.geometry} material={materials.Text} position={[-25.29, 0, 0]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={[1.27, 1, 1.27]} />
      <mesh geometry={nodes.Text006.geometry} material={materials.Text} position={[-25.29, 0, 0]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={[1.27, 1, 1.27]} />
      <mesh geometry={nodes.Cube002.geometry} material={materials['Material.005']} position={[-0.3, -0.82, 0]} rotation={[0, -Math.PI / 2, 0]} scale={[16.55, 0.3, 0.3]} />
      <mesh geometry={nodes.Cube020.geometry} material={materials.AAA} position={[0, 9.53, 0]} scale={[1.92, 8.38, 1.92]} />
      <mesh geometry={nodes.Text007.geometry} material={materials.Text} position={[25.29, 0, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[1.27, 1, 1.27]} />
    </group>
  )
}

useGLTF.preload('/TQ3281SW_PM_PM25.gltf')
