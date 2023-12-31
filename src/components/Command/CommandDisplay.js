import React, { useState } from "react";
import PropTypes from "prop-types";

const CommandDisplay = ({ title, text, exampleOutput }) => {
  const [copied, setCopied] = useState(false);
  const [showExampleOutput, setShowExampleOutput] = useState(false);

  const handleCopyClick = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const toggleExampleOutput = () => {
    setShowExampleOutput(!showExampleOutput);
  };

  return (
    <>
      <div className="mt-[24px] w-full max-w-xs sm:max-w-sm md:max-w-[840px] lg:max-w-[840px] mx-auto">
        <p className="text-2xl font-satoshi text-custom">{title}</p>
      </div>
      <div className="mt-[24px] w-full max-w-xs sm:max-w-sm md:max-w-[840px] lg:max-w-[840px] mx-auto bg-terminal rounded-xl p-2 relative">
        <div className="text-white font-robotoMono font-medium">
          <div className="flex sm:pl-4 justify-between items-center">
            <span className="font-robotoMono mr-1">{text}</span>
            <button
              className={`bg-white w-[64px] h-[40px] text-black font-robotoMono rounded-lg py-2 px-1 ${
                copied ? "cursor-not-allowed" : ""
              }`}
              onClick={handleCopyClick}
              disabled={copied}
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>
      </div>
      <div
        className={`mt-[8px] bg-terminal rounded-xl ${
          showExampleOutput ? "block" : "hidden"
        } w-full max-w-xs sm:max-w-sm md:max-w-[840px] lg:max-w-[840px] mx-auto`}
      >
        <div className="pt-4 pb-4 relative whitespace-pre overflow-x-auto">
          <p className="text-white font-robotoMono">{exampleOutput}</p>
        </div>
      </div>
      <div className="mt-1 w-full max-w-xs sm:max-w-sm md:max-w-[840px] lg:max-w-[840px] mx-auto">
        <button
          onClick={toggleExampleOutput}
          className="text-[rgba(0,0,2,0.70)] text-sm underline cursor-pointer transition-colors duration-300 hover:text-[rgba(0,0,2,0.85)]"
        >
          {showExampleOutput ? "Hide Example Output" : "Show Example Output"}
        </button>
      </div>
    </>
  );
};

CommandDisplay.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  exampleOutput: PropTypes.string.isRequired,
};

export default CommandDisplay;
