import React from "react";
import title from "../images/title.png";

const Heading = () => {
  return (
    <div>
      <img
        src={title}
        alt="Title"
        className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto "
      />
    </div>
  );
};

export default Heading;
