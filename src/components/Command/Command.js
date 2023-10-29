import React, { useState } from "react";
import PropTypes from "prop-types";

const Command = ({ title,text, exampleOutput }) => {
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
      <div className="mt-10 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-3xl mx-auto">
        <p className="text-xl font-satoshi">{title}</p>
      </div>
      <div className="mt-3 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-3xl mx-auto bg-black rounded-xl p-4 relative">
        <div className="text-white font-medium">{text}</div>
        <button
          className={`bg-white rounded-xl py-2 px-4 absolute top-2 right-2 ${
            copied ? " cursor-not-allowed" : ""
          }`}
          onClick={handleCopyClick}
          disabled={copied}
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      {showExampleOutput && (
        <div className="mt-2 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-3xl mx-auto bg-black rounded-xl p-4 relative">
          <p className="text-white font-medium whitespace-pre">{exampleOutput}</p>
        </div>
      )}
      <div className="mt-1 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-3xl mx-auto">
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

Command.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  exampleOutput: PropTypes.string.isRequired,
};

export default Command;
