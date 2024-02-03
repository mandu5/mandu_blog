"use client";
import { Html } from "@react-three/drei";

const Loader = () => {
  const comp = [...Array(19).keys()].map((i) => <span key={i} style={{ "--i": i }}></span>);
  return (
    <Html center>
      <div className="loading">{comp}</div>
    </Html>
  );
};

export default Loader;
