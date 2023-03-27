import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei';
import CanvasLoader from '@/components/Loader';

type BallProps = {
  imgUrl: string
}
const Ball = (props: BallProps) => {
  const initialDecalPostion = [0, 0, 1];
  const [decal] = useTexture([props.imgUrl]);
  const [decalPostion, setDecalPostion] = useState(initialDecalPostion);

  useEffect(() => {
    const interval = setInterval(() => {
      setDecalPostion(initialDecalPostion);
    }, 10000);
  
    return () => {
      clearInterval(interval);
    }
  }, [])
  

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2} >
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 10]} />
        <meshStandardMaterial 
          color='#fff8eb'
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal 
          position={decalPostion as any}
          map={decal}
          rotation={[ 2 * Math.PI, 0, 6.25 ]}
          flatShading
        />
      </mesh>
    </Float>
  )
}

const BallCanvas = ({ icon }: { icon: string }) => {
  return (
    <Canvas
      frameloop='demand'
      gl={{
        preserveDrawingBuffer: true
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
}

export default BallCanvas;