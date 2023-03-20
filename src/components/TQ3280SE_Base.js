/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 TQ3280SE_Base.gltf
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/TQ3280SE_Base.gltf')
  return (
    <group {...props} dispose={null}>
      <group position={[0, 4.04, 0]} scale={0.001}>
        <mesh geometry={nodes.Mesh015.geometry} material={materials['M_Buildings.003']} />
        <mesh geometry={nodes.Mesh015_1.geometry} material={materials['M_Bridges.003']} />
        <mesh geometry={nodes.Mesh015_2.geometry} material={materials['M_Roads.003']} />
        <mesh geometry={nodes.Mesh015_3.geometry} material={materials['M_Terrain.003']} />
        <mesh geometry={nodes.Mesh015_4.geometry} material={materials['M_Rails.001']} />
        <mesh geometry={nodes.Mesh015_5.geometry} material={materials['M_Greenspace.003']} />
        <mesh geometry={nodes.Mesh015_6.geometry} material={materials['M_Construction.002']} />
        <mesh geometry={nodes.Mesh015_7.geometry} material={materials['M_Water.001']} />
        <mesh geometry={nodes.Mesh015_8.geometry} material={materials['M_TreeBark.002']} />
        <mesh geometry={nodes.Mesh015_9.geometry} material={materials['M_TreeLeaves.002']} />
      </group>
      <mesh geometry={nodes.Base.geometry} material={materials['Material.003']} scale={[25.24, 1.01, 25.24]} />
    </group>
  )
}

useGLTF.preload('/TQ3280SE_Base.gltf')