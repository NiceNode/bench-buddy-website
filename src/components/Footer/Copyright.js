import React from "react";
import niceNode from "../../images/nicenode.png";

const CopyRight = () => {
  return (
    <div className="mt-10 mb-24 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-[840px] mx-auto text-custom">
      <p className="text-2xl font-satoshi">
        <div className="flex items-center">
          <img src={niceNode} alt="NiceNode" className="w-8 h-8 mr-4" />
          <div className="flex-row lg:flex items-center">
            <p>©Copyright 2023 by</p>
            <button
              onClick={() => window.open("https://www.nicenode.xyz")}
              className="ml-2 text-gray-700 text-2xl underline cursor-pointer"
            >
              NiceNode
            </button>
          </div>
        </div>
      </p>
    </div>
  );
};

export default CopyRight;
