import React, { lazy, MouseEvent, Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';
// import Computer from './Computer';

const Computer = React.lazy(() => import('./Computer'));

const CompoterCanvas = ({isMobile}: any) => {


  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{
        position: [20, 3, 5],
        fov: 25
      }}
      gl={{
        preserveDrawingBuffer: true
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <Computer isMobile={isMobile} />
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Suspense>
      <Preload all />
    </Canvas>
  );
}

export default CompoterCanvas;
