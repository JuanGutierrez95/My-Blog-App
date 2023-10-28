import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="px-2 py-4 border-b border-white flex justify-between">
      <div className="text-4xl px-2 py-4">JG</div>
      <button className="text-white bg-black px-4 py-2">Sign In</button>
    </div>
  );
};

export default Header;
