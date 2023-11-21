import React from "react";
import SubHeading from "../SubHeading";

const About = () => {
  return (
    <>
      <SubHeading name="About" />
      <div className="mt-[16px] w-full max-w-xs sm:max-w-sm md:max-w-[840px] lg:max-w-[840px] mx-auto">
        <p className="text-[24px] leading-[30px] font-satoshi">
          BenchBuddy is an open-source library developed and used by NiceNode to
          determine whether a computer meets the system requirements to run a
          healthy blockchain node. Feel free to contribute or add benchmark
          schemes with other requirements to the database.
        </p>
      </div>
    </>
  );
};

export default About;
