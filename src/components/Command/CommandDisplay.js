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
      <div className="mt-[24px] w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-[840px] mx-auto">
        <p className="text-2xl font-satoshi text-custom">{title}</p>
      </div>
      <div className="mt-[24px] w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-[840px] mx-auto bg-terminal rounded-xl p-2 relative">
        <div className="text-white font-medium">
          <div className="flex justify-between items-center">
            <span>{text}</span>
            <button
              className={`bg-white w-[64px] h-[40px] text-black rounded-xl py-2 px-1 ${
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
      {showExampleOutput && (
        <div className="mt-[8px] w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-[840px] mx-auto bg-terminal rounded-xl p-4 relative ">
          <p className="text-white font-medium whitespace-pre">
            {exampleOutput}
          </p>
        </div>
      )}
      <div className="mt-1 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-[840px] mx-auto">
        <button
          onClick={toggleExampleOutput}
          className="text-gray-700 text-sm underline cursor-pointer "
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
