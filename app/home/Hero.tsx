import React from "react";
import Image from "next/image";

type Props = {};

const Hero = (props: Props) => {
  return (
    <section className="grid grid-cols-1">
      <h1 className="text-4xl sm:text-4xl">last News</h1>
      <button>Browser articles</button>
      <Image src="/user.png" alt="user" width={300} height={300} />
    </section>
  );
};

export default Hero;
