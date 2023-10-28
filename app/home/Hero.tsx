import React from "react";
import Image from "next/image";

type Props = {};

const Hero = (props: Props) => {
  return <section>
    <Image src="/user.png" alt="user" width={300} height={300} />
  </section>;
};
