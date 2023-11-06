import React from "react";
import title from "../../images/title.png";

const Heading = () => {
  return (
    <div>
      <img
        src={title}
        alt="Title"
        className="mt-[24px] max-w-lg md:max-w-md lg:max-w-[840px] lg:h-[110px] mx-auto"
      />
    </div>
  );
};

export default Heading;
