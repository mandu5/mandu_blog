"use client";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Loader, Header } from "../components";
import SpaceAme from "../models/SpaceAme";

export default function Home() {
  return (
    <>
      <Header />
      <section className="w-full h-screen relative overflow-hidden">
        <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
          <h1 className="sm:text-xl sm:leading-snug text-center py-4 px-8 text-white mx-5">
            Hi, Im
            <span className="font-semibold mx-2 text-white">Mandu</span>
            <br />A Frontend Developer from South Korea 🇰🇷
          </h1>
        </div>
        <Canvas className="w-full h-screen bg-transparent" camera={{ near: 0.1, far: 1000 }}>
          <Suspense fallback={<Loader />}>
            <directionalLight position={[1, 1, 1]} intensity={2} />
            <ambientLight intensity={0.5} />
            <hemisphereLight groundColor="#000000" />
            <OrbitControls reverseOrbit minDistance={3} maxDistance={20} />
            <SpaceAme />
          </Suspense>
        </Canvas>
      </section>
    </>
  );
}
