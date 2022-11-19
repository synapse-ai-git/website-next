import { Canvas, extend } from "@react-three/fiber";
import css from "./AnimatedBackground.module.css";
import Terrain from "./Terrain";
import Prism from "./Prism";
import { Suspense } from "react";

import { UnrealBloomPass } from "three-stdlib";
import { BakeShadows, Effects } from "@react-three/drei";
extend({ UnrealBloomPass });
export default function AnimatedBackground() {
  return (
    <div className={css.scene}>
      <Canvas
        shadows
        gl={{ antialias: false }}
        className={css.canvas}
        camera={{
          position: [0, 0, 12],
        }}
      >
        <Prism />
        <Suspense fallback={null}>
          <Terrain />
          <Effects disableGamma>
            <unrealBloomPass strength={1.0} radius={0.4} />
          </Effects>
          <BakeShadows />
        </Suspense>
      </Canvas>
    </div>
  );
}
