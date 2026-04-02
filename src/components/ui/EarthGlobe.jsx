import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';

const EarthGlobe = () => {
  const sphereRef = useRef();

  useFrame(({ clock }) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y = clock.getElapsedTime() * 0.08;
      sphereRef.current.rotation.x = clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <group>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} color="#00D9FF" />
      <directionalLight position={[-10, -10, -5]} intensity={1} color="#7C3AED" />
      <Sphere ref={sphereRef} args={[2.2, 32, 32]} position={[0, 0, 0]}>
        <MeshDistortMaterial
          color="#060913"
          attach="material"
          distort={0.4}
          speed={1}
          roughness={0.2}
          wireframe={true}
          transparent={true}
          opacity={0.8}
          depthWrite={false}
        />
      </Sphere>
    </group>
  );
};

export default EarthGlobe;
