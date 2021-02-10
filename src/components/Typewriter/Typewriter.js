import React from "react";
import Typewriter from "typewriter-effect";

function Animation() {
  return (
    <Typewriter
      options={{
        strings: ["Hi, I'm Meaghan Neylon.", "Have a look around!", "Enjoy!"],
        autoStart: true,
        loop: true,
      }}
      r
    />
  );
}

export default Animation;
