import React from "react";
import Image from "next/image";

type Props = {};

const Hero = (props: Props) => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-12">
      <div className="col-span-7 place-self-center text-center sm:text-left justifity-self-start">
        <h1 className="text-2xl sm:text-4xl md:text-6xl md:leading-normal">
          Last News
        </h1>
        <button className="text-white bg-indigo-500 px-4 py-2 border-2 rounded shadow-[0.25rem]">Browser articles</button>
      </div>
      <div className="col-span-5 place-self-center">
        <Image src="/user.png" alt="user" width={300} height={300} />
      </div>
    </section>
  );
};

export default Hero;
