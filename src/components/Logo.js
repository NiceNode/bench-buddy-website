import React from "react";
import logo from "../images/logo.png";

const Logo = () => {
  return (
    <div className="pt-10 pb-10 mr-10">
      <img
        src={logo}
        className="max-w-xs mx-auto w-full md:max-w-md lg:max-w-sm"
        alt="logo"
      />
    </div>
  );
};

export default Logo;
