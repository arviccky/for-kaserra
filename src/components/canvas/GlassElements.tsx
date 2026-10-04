import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export const GlassElements: React.FC = () => {
  const heartRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const starGroupRef = useRef<THREE.Group>(null);

  // Custom glass material
  const glassMaterial = new THREE.MeshPhysicalMaterial({
    roughness: 0.1,
    transmission: 0.9,
    thickness: 0.5,
    ior: 1.5,
    color: new THREE.Color('#f4a2b9'),
    emissive: new THREE.Color('#2d1b36'),
    emissiveIntensity: 0.2,
    transparent: true,
    opacity: 0.85,
  });

  // Heart shape geometry
  const heartGeometry = React.useMemo(() => {
    const shape = new THREE.Shape();
    const x = 0, y = 0;
    shape.moveTo(x + 0.25, y + 0.25);
    shape.bezierCurveTo(x + 0.25, y + 0.25, x + 0.2, y, x, y);
    shape.bezierCurveTo(x - 0.3, y, x - 0.3, y + 0.35, x - 0.3, y + 0.35);
    shape.bezierCurveTo(x - 0.3, y + 0.55, x - 0.1, y + 0.77, x + 0.25, y + 0.95);
    shape.bezierCurveTo(x + 0.6, y + 0.77, x + 0.8, y + 0.55, x + 0.8, y + 0.35);
    shape.bezierCurveTo(x + 0.8, y + 0.35, x + 0.8, y, x + 0.5, y);
    shape.bezierCurveTo(x + 0.35, y, x + 0.25, y + 0.25, x + 0.25, y + 0.25);

    const extrudeSettings = {
      depth: 0.2,
      bevelEnabled: true,
      bevelSegments: 5,
      steps: 2,
      bevelSize: 0.08,
      bevelThickness: 0.08,
    };

    const geom = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    geom.center();
    return geom;
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    if (heartRef.current) {
      heartRef.current.rotation.y = t * 0.5;
      heartRef.current.rotation.x = Math.sin(t * 0.3) * 0.2;
      heartRef.current.position.y = 1.8 + Math.sin(t * 1.2) * 0.15;
    }

    if (ringRef.current) {
      ringRef.current.rotation.x = t * 0.2;
      ringRef.current.rotation.y = t * 0.3;
      ringRef.current.position.y = -1.5 + Math.cos(t * 0.8) * 0.1;
    }

    if (starGroupRef.current) {
      starGroupRef.current.rotation.z = -t * 0.1;
    }
  });

  return (
    <group>
      {/* Floating Glass Heart */}
      <mesh
        ref={heartRef}
        geometry={heartGeometry}
        material={glassMaterial}
        position={[-3.2, 1.8, -2]}
        scale={[0.7, 0.7, 0.7]}
      />

      {/* Floating Glass Ring */}
      <mesh
        ref={ringRef}
        material={glassMaterial}
        position={[3.5, -1.5, -2.5]}
      >
        <torusGeometry args={[0.9, 0.04, 16, 100]} />
      </mesh>

      {/* Ambient Crystal Stars */}
      <group ref={starGroupRef} position={[0, 0, -3]}>
        {[
          [-4, 2.5, 0],
          [4, 3, 0],
          [-3.8, -2.5, 0],
          [3.2, -3, 0],
        ].map((pos, idx) => (
          <mesh
            key={idx}
            position={pos as [number, number, number]}
            material={glassMaterial}
            scale={[0.25, 0.25, 0.25]}
          >
            <octahedronGeometry args={[1, 0]} />
          </mesh>
        ))}
      </group>
    </group>
  );
};
