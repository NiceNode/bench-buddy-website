import React from "react";
import logo from "../../images/logo.svg";

const Logo = () => {
  return (
    <div className="mt-[120px] mr-10">
      <img
        src={logo}
        className="max-w-[214px] h-[197px] mx-auto md:max-w-[840px] lg:max-w-[214px] lg:h-[197px]"
        alt="logo"
      />
    </div>
  );
};

export default Logo;
