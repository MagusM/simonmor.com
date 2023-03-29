import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { MeshDistortMaterial, OrbitControls, Preload, Sphere, Stage, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';
const Mac = React.lazy(() => import('./Mac'));

interface CompoterCanvasProps {
  isMobile: boolean;
}

const CompoterCanvas = ({ isMobile }: CompoterCanvasProps) => {
  return (
    <>
      <Canvas>
        <Suspense fallback={null}>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={1} />
          <directionalLight position={[3, 2, 1]} />
          <Sphere 
            args={[1, 100, 200]} 
            scale={isMobile ? 1.5 : 2.2}
            position={isMobile ? [0, -1, -0.13] : [0, -1.3, -0.13]}
          >
            <MeshDistortMaterial
              color="#3d1c56"
              attach="material"
              distort={0.5}
              speed={2}
            />
          </Sphere>
        </Suspense>
      </Canvas>
      <img
        src="./images/moon.png"
        className="w-[250px] h-[600px] object-contain absolute top-[25%] bottom-0 left-0 right-0 mx-auto my-auto md:w-[500px] md:h-[500px] md:top-[35%] animate"
      />
    </>
  );
}

export default CompoterCanvas;
