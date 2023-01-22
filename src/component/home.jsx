import React from "react";
import { useProvider } from "../clothcontext";
import Hero from "./hero";
const Home = () => {
  const { lightmode } = useProvider();
  return (
    <div
      className={`${!lightmode && "bg-main"} ${
        !lightmode && "text-white"
      } relative`}
    >
      <Hero />
    </div>
  );
};

export default Home;
