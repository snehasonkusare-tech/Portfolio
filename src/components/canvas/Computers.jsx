import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({ isMobile, rotation, scale, onHover }) => {
  const { scene } = useGLTF("./desktop_pc/scene.gltf", true);

  // Check if the model is loaded
  if (!scene) {
    console.error("Failed to load the GLTF model");
    return null; // Return null or a fallback UI if the model fails to load
  }

  return (
    <mesh
      rotation={rotation}
      scale={scale}
      onPointerOver={() => onHover(true)}
      onPointerOut={() => onHover(false)}
    >
      <hemisphereLight intensity={0.10} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.50, -1.5]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [rotation, setRotation] = useState([0, 0, 0]);
  const [scale, setScale] = useState(0.1); // Start with a small scale

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  useEffect(() => {
    // Animate scale from 0.1 to 1 over 1 second
    const duration = 1000; // 1 second
    const startTime = performance.now();

    const animateScale = (time) => {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1); // Clamp progress to 1
      setScale(0.1 + progress * (1 - 0.1)); // Interpolate scale

      if (progress < 1) {
        requestAnimationFrame(animateScale);
      }
    };

    requestAnimationFrame(animateScale);
  }, []);

  const handlePointerMove = (event) => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    // Check if the mouse is at the center of the canvas
    const isAtCenter = Math.abs(event.clientX - centerX) < 10 && Math.abs(event.clientY - centerY) < 10;

    if (isAtCenter) {
      // Rotate clockwise
      setRotation((prevRotation) => [prevRotation[0], prevRotation[1] + 0.01, prevRotation[2]]);
    } else {
      // Reset to original rotation
      setRotation([0, 0, 0]);
    }
  };

  const handleClick = () => {
    setRotation([0, 0, 0]); // Reset rotation to original on click
  };

  const handleHover = (isHovering) => {
    // This function can be used for additional hover logic if needed
  };

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      onPointerMove={handlePointerMove}
      onClick={handleClick}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers 
          isMobile={isMobile} 
          rotation={rotation} 
          scale={scale} 
          onHover={handleHover} 
        />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;