import { useFrame } from "@react-three/fiber"
import React from 'react'

export default function Prism() {
 const myMesh = React.useRef()

 useFrame(({ clock }) => {
  myMesh.current.position.y = 3 + Math.sin(0.75 * clock.getElapsedTime() + 10);
})

  return (
    <mesh position-y={6} rotation-z={-0.8} ref={myMesh}>
      <pointLight position-y={1} intensity={4} color="#aa6bba" />
      <tetrahedronBufferGeometry args={[0.8, 0]} />
      <meshNormalMaterial/>
    </mesh>
  )
}
