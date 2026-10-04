import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { FloatingPaperScraps } from './FloatingPaperScraps';
import { CosmicParticles } from './CosmicParticles';

interface SceneProps {
  isBloomed?: boolean;
}

export const Scene: React.FC<SceneProps> = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-50">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.9} />
          <pointLight position={[-4, 4, 2]} intensity={1.0} color="#f4a2b9" />
          <pointLight position={[4, -4, 2]} intensity={0.8} color="#ffd166" />
          
          <FloatingPaperScraps count={35} />
          <CosmicParticles count={80} />
        </Suspense>
      </Canvas>
    </div>
  );
};
