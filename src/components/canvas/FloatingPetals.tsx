import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface FloatingPetalsProps {
  count?: number;
}

export const FloatingPetals: React.FC<FloatingPetalsProps> = ({ count = 35 }) => {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  // Generate initial particle positions and random drift attributes
  const particles = useMemo(() => {
    const data = [];
    for (let i = 0; i < count; i++) {
      data.push({
        x: (Math.random() - 0.5) * 16,
        y: (Math.random() - 0.5) * 16 + 2,
        z: (Math.random() - 0.5) * 8,
        rotX: Math.random() * Math.PI * 2,
        rotY: Math.random() * Math.PI * 2,
        rotZ: Math.random() * Math.PI * 2,
        speedY: 0.008 + Math.random() * 0.015,
        speedRot: 0.005 + Math.random() * 0.02,
        scale: 0.08 + Math.random() * 0.09,
        swayFreq: 0.5 + Math.random() * 1.5,
      });
    }
    return data;
  }, [count]);

  // Petal geometry & material
  const { petalGeometry, petalMaterial } = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(0, 0);
    shape.bezierCurveTo(0.2, 0.3, 0.3, 0.8, 0, 1.2);
    shape.bezierCurveTo(-0.3, 0.8, -0.2, 0.3, 0, 0);

    const geom = new THREE.ShapeGeometry(shape);
    const pos = geom.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const y = pos.getY(i);
      pos.setZ(i, -Math.pow(y, 1.2) * 0.08);
    }
    geom.computeVertexNormals();

    const mat = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#f4a2b9'),
      emissive: new THREE.Color('#38121c'),
      roughness: 0.4,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.85,
    });

    return { petalGeometry: geom, petalMaterial: mat };
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (!meshRef.current) return;

    particles.forEach((p, i) => {
      // Fall down
      p.y -= p.speedY;
      p.x += Math.sin(t * p.swayFreq + i) * 0.006;
      p.rotX += p.speedRot;
      p.rotY += p.speedRot * 0.7;

      // Wrap around bounds
      if (p.y < -8) {
        p.y = 8;
        p.x = (Math.random() - 0.5) * 16;
      }

      dummy.position.set(p.x, p.y, p.z);
      dummy.rotation.set(p.rotX, p.rotY, p.rotZ);
      dummy.scale.set(p.scale, p.scale, p.scale);
      dummy.updateMatrix();

      meshRef.current?.setMatrixAt(i, dummy.matrix);
    });

    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh
      ref={meshRef}
      args={[petalGeometry, petalMaterial, count]}
    />
  );
};
