"use client";
import React, { useEffect, useRef } from "react";
import spaceAme from "../../public/3d/space_ame.glb";
import { useAnimations, useGLTF } from "@react-three/drei";
import { a } from "@react-spring/three";

const SpaceAme = () => {
  const group = useRef();
  const ame = useGLTF(spaceAme);
  const { animations } = useGLTF(spaceAme);
  const { ref, names, actions } = useAnimations(animations, group);

  useEffect(() => {
    actions[names[0]]?.reset().fadeIn(0.5).play();
  }, []);

  const adjustAmePosition = () => {
    let screenScale = null;
    let screenPosition = [0, -0.3, 0];
    let rotation = [0.1, -0.5, 0];
    if (window.innerWidth < 768) {
      screenScale = [1.3, 1.3, 1.3];
    } else {
      screenScale = [2.4, 2.4, 2.4];
    }
    return [screenScale, screenPosition, rotation];
  };

  const [ameScale, amePosition, ameRotation] = adjustAmePosition();

  return (
    <a.group>
      <primitive
        ref={ref}
        object={ame.scene}
        position={amePosition}
        scale={ameScale}
        rotation={ameRotation}
      />
    </a.group>
  );
};

export default SpaceAme;
