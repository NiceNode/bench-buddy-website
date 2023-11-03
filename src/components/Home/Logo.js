import React from "react";
import logo from "../../images/logo.png";

const Logo = () => {
  return (
    <div className="mt-[120px] mr-10">
      <img
        src={logo}
        className="max-w-xs mx-auto w-full md:max-w-md lg:max-w-sm"
        alt="logo"
      />
    </div>
  );
};

export default Logo;
