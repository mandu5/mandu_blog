"use client";
import { Loader } from "../components";
import { Canvas } from "@react-three/fiber";

const loading = () => {
  return (
    <div className="flex h-screen">
      <Canvas className="m-auto">
        <Loader />
      </Canvas>
    </div>
  );
};

export default loading;
