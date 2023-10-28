import React from "react";
import Image from "next/image";

type Props = {};

const Hero = (props: Props) => {
  return (
    <section>
      <h2>last News</h2>
      <button>Browser articles</button>
      <Image src="/user.png" alt="user" width={300} height={300} />
    </section>
  );
};

export default Hero;
