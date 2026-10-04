import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface FlowerProps {
  position?: [number, number, number];
  scale?: number;
  bloomProgress?: number; // 0 to 1
  isBloomed?: boolean;
  mousePos?: { x: number; y: number };
}

interface PetalLayerItem {
  id: string;
  angle: number;
  layerIdx: number;
  radius: number;
  angleOffset: number;
  baseScale: number;
}

export const FlowerBouquet3D: React.FC<FlowerProps> = ({
  position = [0, -2.8, -1],
  scale = 0.85,
  bloomProgress = 0.5,
  isBloomed = false,
  mousePos = { x: 0, y: 0 },
}) => {
  const groupRef = useRef<THREE.Group>(null);
  const petalsGroupRef = useRef<THREE.Group>(null);
  const secondaryFlowerRef = useRef<THREE.Group>(null);

  // Generate Petal Geometries & Materials
  const { petalGeometry, stemMaterial, petalMaterial, centerMaterial, leafMaterial } = useMemo(() => {
    // Custom curved petal geometry using Shape & Extrude / Plane
    const shape = new THREE.Shape();
    shape.moveTo(0, 0);
    shape.bezierCurveTo(0.3, 0.4, 0.4, 1.2, 0, 1.8);
    shape.bezierCurveTo(-0.4, 1.2, -0.3, 0.4, 0, 0);

    const geom = new THREE.ShapeGeometry(shape);
    // Give curve depth
    const pos = geom.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const y = pos.getY(i);
      const x = pos.getX(i);
      pos.setZ(i, -Math.pow(y, 1.5) * 0.1 + (0.05 - Math.abs(x) * 0.1));
    }
    geom.computeVertexNormals();

    const petalMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#f4a2b9'),
      emissive: new THREE.Color('#591c2b'),
      roughness: 0.3,
      metalness: 0.1,
      side: THREE.DoubleSide,
    });

    const stemMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#2d5a3f'),
      roughness: 0.6,
    });

    const centerMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#ffb703'),
      roughness: 0.2,
      emissive: new THREE.Color('#e07a5f'),
      emissiveIntensity: 0.4,
    });

    const leafMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#3a6346'),
      roughness: 0.5,
      side: THREE.DoubleSide,
    });

    return {
      petalGeometry: geom,
      petalMaterial: petalMat,
      stemMaterial: stemMat,
      centerMaterial: centerMat,
      leafMaterial: leafMat,
    };
  }, []);

  // Build layers of petals for main bloom
  const petalLayers = useMemo(() => {
    const layers: PetalLayerItem[] = [];
    const layerConfigs = [
      { count: 5, radius: 0.15, angleOffset: 0.4, scale: 0.6 },
      { count: 7, radius: 0.25, angleOffset: 0.6, scale: 0.85 },
      { count: 9, radius: 0.38, angleOffset: 0.9, scale: 1.1 },
      { count: 11, radius: 0.52, angleOffset: 1.2, scale: 1.3 },
    ];

    layerConfigs.forEach((layer, layerIdx) => {
      for (let i = 0; i < layer.count; i++) {
        const angle = (i / layer.count) * Math.PI * 2 + (layerIdx * 0.3);
        layers.push({
          id: `${layerIdx}-${i}`,
          angle,
          layerIdx,
          radius: layer.radius,
          angleOffset: layer.angleOffset,
          baseScale: layer.scale,
        });
      }
    });
    return layers;
  }, []);

  // Frame animation loop (Wind sway & bloom interpolation)
  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    if (groupRef.current) {
      // Gentle floating sway & mouse parallax
      const targetRotationX = Math.sin(t * 0.8) * 0.08 + mousePos.y * 0.15;
      const targetRotationY = Math.cos(t * 0.6) * 0.12 + mousePos.x * 0.2;

      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotationX, 0.05);
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotationY, 0.05);
      groupRef.current.position.y = position[1] + Math.sin(t * 1.5) * 0.08;
    }

    if (petalsGroupRef.current) {
      const currentBloom = isBloomed ? 1.4 : 0.6 + bloomProgress * 0.6;
      petalsGroupRef.current.children.forEach((child, idx) => {
        const layer = petalLayers[idx];
        if (layer) {
          const targetAngle = layer.angleOffset * currentBloom;
          child.rotation.x = THREE.MathUtils.lerp(child.rotation.x, targetAngle, 0.05);
        }
      });
    }

    if (secondaryFlowerRef.current) {
      secondaryFlowerRef.current.rotation.z = Math.sin(t * 0.5) * 0.1;
    }
  });

  return (
    <group ref={groupRef} position={position} scale={[scale, scale, scale]}>
      {/* Main Center Stem */}
      <mesh material={stemMaterial} position={[0, -1.2, 0]}>
        <cylinderGeometry args={[0.04, 0.06, 2.4, 16]} />
      </mesh>

      {/* Decorative Leaves */}
      <group position={[0, -0.6, 0]}>
        <mesh material={leafMaterial} rotation={[0.4, 0.5, -0.6]} scale={[0.6, 0.6, 0.6]}>
          <primitive object={petalGeometry} />
        </mesh>
        <mesh material={leafMaterial} rotation={[0.3, -1.8, 0.8]} scale={[0.7, 0.7, 0.7]}>
          <primitive object={petalGeometry} />
        </mesh>
      </group>

      {/* Flower Center Pistil */}
      <mesh material={centerMaterial} position={[0, 0.05, 0]}>
        <sphereGeometry args={[0.22, 32, 32]} />
      </mesh>

      {/* Golden Pistil Sparkles */}
      <mesh position={[0, 0.12, 0]}>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshStandardMaterial color="#fff3b0" emissive="#ffd166" emissiveIntensity={0.8} />
      </mesh>

      {/* Petals Group */}
      <group ref={petalsGroupRef} position={[0, 0, 0]}>
        {petalLayers.map((layer) => (
          <group
            key={layer.id}
            rotation={[0, layer.angle, 0]}
            position={[0, 0, 0]}
          >
            <mesh
              geometry={petalGeometry}
              material={petalMaterial}
              scale={[layer.baseScale, layer.baseScale, layer.baseScale]}
              position={[0, 0, 0.05]}
              rotation={[layer.angleOffset, 0, 0]}
            />
          </group>
        ))}
      </group>

      {/* Secondary Accent Flower Buds (Bouquet Feel) */}
      <group ref={secondaryFlowerRef} position={[0.7, -0.3, -0.3]} scale={[0.55, 0.55, 0.55]}>
        <mesh material={stemMaterial} position={[0, -0.8, 0]}>
          <cylinderGeometry args={[0.03, 0.04, 1.6, 12]} />
        </mesh>
        <mesh material={centerMaterial}>
          <sphereGeometry args={[0.18, 16, 16]} />
        </mesh>
        {[0, 1.2, 2.4, 3.6, 4.8].map((rot, i) => (
          <group key={i} rotation={[0, rot, 0]}>
            <mesh
              geometry={petalGeometry}
              material={new THREE.MeshStandardMaterial({ color: '#ffcad4', roughness: 0.4 })}
              scale={[0.7, 0.7, 0.7]}
              rotation={[0.6, 0, 0]}
            />
          </group>
        ))}
      </group>

      {/* Small Daisy Accent Flower */}
      <group position={[-0.6, -0.4, 0.2]} scale={[0.45, 0.45, 0.45]}>
        <mesh material={stemMaterial} position={[0, -0.7, 0]}>
          <cylinderGeometry args={[0.03, 0.04, 1.4, 12]} />
        </mesh>
        <mesh material={centerMaterial}>
          <sphereGeometry args={[0.16, 16, 16]} />
        </mesh>
        {[0, 0.8, 1.6, 2.4, 3.2, 4.0, 4.8, 5.6].map((rot, i) => (
          <group key={i} rotation={[0, rot, 0]}>
            <mesh
              geometry={petalGeometry}
              material={new THREE.MeshStandardMaterial({ color: '#ffffff', roughness: 0.2 })}
              scale={[0.5, 0.5, 0.5]}
              rotation={[0.5, 0, 0]}
            />
          </group>
        ))}
      </group>
    </group>
  );
};
