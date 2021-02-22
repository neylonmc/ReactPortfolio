import React from "react";
import Typewriter from "typewriter-effect";

function Animation() {
  return (
    <Typewriter
      options={{
        strings: ["Hi, I'm Meaghan Neylon."],
        autoStart: true,
        loop: true,
        pauseFor: 6000000,
      }}
      r
    />
  );
}

export default Animation;
