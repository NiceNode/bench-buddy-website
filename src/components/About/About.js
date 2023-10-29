import React from "react";
import SubHeading from "../SubHeading";

const About = () => {
  return (
    <>
      <div className="p-10"></div>
      <SubHeading name="About" />
      <div className="mt-5 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-3xl mx-auto">
        <p className="text-2xl font-satoshi">
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
