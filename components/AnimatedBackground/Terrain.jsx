import { useLoader, useFrame } from "@react-three/fiber"
import { TextureLoader } from "three"
import React from "react"

export default function Terrain() {
    const terrainDisplacement = useLoader(TextureLoader, "height.png")
    const terrainTexture = useLoader(TextureLoader, "texture.jpg")
    const myMesh = React.useRef()

    useFrame(({ clock }) => {
  myMesh.current.rotation.z = clock.getElapsedTime()/16})


  return (
    <mesh rotation-x={5.2} ref={myMesh}>
          <planeBufferGeometry args={[40, 40, 32, 32]}/>
          <meshStandardMaterial
          attach="material"
          color="gray"
          displacementMap={terrainDisplacement}
          map={terrainTexture}
          displacementScale={5}/>
        </mesh>
  )
}

