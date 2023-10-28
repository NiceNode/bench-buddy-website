import React from "react";
import logo from "../images/logo.png";

const Logo = () => {
  return (
    <div className="flex flex-col items-center justify-start pt-10 pb-20">
      <img
        src={logo}
        className="max-w-xs mx-auto"
        alt="logo"
      />
    </div>
  );
};

export default Logo;
