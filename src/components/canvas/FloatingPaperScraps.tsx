import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface FloatingPaperScrapsProps {
  count?: number;
}

export const FloatingPaperScraps: React.FC<FloatingPaperScrapsProps> = ({ count = 35 }) => {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  // Generate initial paper scrap positions, colors, speeds, and rotation speeds
  const scraps = useMemo(() => {
    const data = [];
    const colors = ['#fdfaf3', '#f4a2b9', '#ffe4e8', '#ffd166', '#e0d0bf', '#f7f1e5', '#f8d7da'];

    for (let i = 0; i < count; i++) {
      data.push({
        x: (Math.random() - 0.5) * 16,
        y: (Math.random() - 0.5) * 16 + 2,
        z: (Math.random() - 0.5) * 6,
        rotX: Math.random() * Math.PI * 2,
        rotY: Math.random() * Math.PI * 2,
        rotZ: Math.random() * Math.PI * 2,
        speedY: 0.005 + Math.random() * 0.012,
        speedRotX: 0.005 + Math.random() * 0.015,
        speedRotY: 0.005 + Math.random() * 0.015,
        scaleX: 0.12 + Math.random() * 0.18,
        scaleY: 0.12 + Math.random() * 0.18,
        scaleZ: 0.01,
        swayFreq: 0.4 + Math.random() * 1.2,
        color: new THREE.Color(colors[i % colors.length]),
      });
    }
    return data;
  }, [count]);

  // Create paper rectangle geometry and paper-like material
  const { paperGeometry, paperMaterial } = useMemo(() => {
    const geom = new THREE.BoxGeometry(1, 1, 0.02);
    const mat = new THREE.MeshStandardMaterial({
      roughness: 0.8,
      metalness: 0.05,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.85,
    });
    return { paperGeometry: geom, paperMaterial: mat };
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (!meshRef.current) return;

    scraps.forEach((p, i) => {
      // Gently fall down and sway like paper in the wind
      p.y -= p.speedY;
      p.x += Math.sin(t * p.swayFreq + i) * 0.005;
      p.rotX += p.speedRotX;
      p.rotY += p.speedRotY;

      // Reset when falling out of view
      if (p.y < -8) {
        p.y = 8;
        p.x = (Math.random() - 0.5) * 16;
      }

      dummy.position.set(p.x, p.y, p.z);
      dummy.rotation.set(p.rotX, p.rotY, p.rotZ);
      dummy.scale.set(p.scaleX, p.scaleY, p.scaleZ);
      dummy.updateMatrix();

      meshRef.current?.setMatrixAt(i, dummy.matrix);
      meshRef.current?.setColorAt(i, p.color);
    });

    meshRef.current.instanceMatrix.needsUpdate = true;
    if (meshRef.current.instanceColor) {
      meshRef.current.instanceColor.needsUpdate = true;
    }
  });

  return (
    <instancedMesh
      ref={meshRef}
      args={[paperGeometry, paperMaterial, count]}
    />
  );
};
