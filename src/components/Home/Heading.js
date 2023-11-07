import React from "react";
import title from "../../images/title.png";

const Heading = () => {
  return (
    <div>
      <img
        src={title}
        alt="Title"
        className="mt-[24px] w-full max-w-[3333px] h-[60px] md:max-w-md lg:max-w-[840px] lg:h-[110px] mx-auto"
      />
    </div>
  );
};

export default Heading;
