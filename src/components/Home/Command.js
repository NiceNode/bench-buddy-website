import React, { useState } from "react";

const Command = () => {
  const [copied, setCopied] = useState(false);
  const [showExampleOutput, setShowExampleOutput] = useState(false);

  const handleCopyClick = async () => {
    await navigator.clipboard.writeText({});
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
      <div className="mt-10 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-3xl mx-auto bg-black rounded-xl p-4 relative">
        <div className="text-white font-medium">
          This is the text you want to copy.
        </div>
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
          <div className="text-white font-medium">
            This is example output
          </div>
        </div>
      )}
      <div className="mt-3 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-3xl mx-auto">
        <button
          onClick={toggleExampleOutput}
          className="text-gray-700 underline cursor-pointer "
        >
          {showExampleOutput ? "Hide Example Output" : "Show Example Output"}
        </button>
      </div>
    </>
  );
};

export default Command;
