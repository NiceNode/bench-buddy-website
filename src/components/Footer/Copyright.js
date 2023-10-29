import React from "react";
import niceNode from "../../images/nicenode.png";

const CopyRight = () => {
  return (
    <div className="mt-10 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-3xl mx-auto">
      <p className="text-2xl font-satoshi">
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={niceNode} alt="Github" className="w-8 h-8 mr-4" />
          ©CopyRight 2023 by
          <button
            onClick={() => window.open("https://www.nicenode.xyz")}
            className="ml-2 text-gray-700 text-2xl underline cursor-pointer"
          >
            NiceNode
          </button>
        </div>
      </p>
    </div>
  );
};

export default CopyRight;
