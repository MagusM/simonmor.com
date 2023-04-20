import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Mac({ isMobile }: { isMobile: boolean }) {
  const group: any = useRef()
  const { nodes, materials } = useGLTF('./mac/mac-draco.glb') as any
  return (
    <group ref={group} dispose={null}>
      <group position={[0, 2.96, -0.13]} rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          material={materials.aluminium}
          geometry={nodes['Cube008'].geometry}
        />
        <mesh
          material={materials['matte.001']}
          geometry={nodes['Cube008_1'].geometry}
        />
        <mesh
          material={materials['screen.001']}
          geometry={nodes['Cube008_2'].geometry}
        />
      </group>
    </group>
  )
}
