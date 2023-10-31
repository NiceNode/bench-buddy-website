import React, { useState } from "react";
import SubHeading from "../SubHeading";
import PropTypes from "prop-types";

const PreRequisite = ({ onComponentChange }) => {
  const [selectedButton, setSelectedButton] = useState("Docker");

  const handleButtonClick = (button) => {
    setSelectedButton(button);
    onComponentChange(button);
  };

  return (
    <>
      <div className="p-10"></div>
      <SubHeading name="Pre-Requisite" />
      <div className="mt-5 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-3xl mx-auto">
      <p className="text-2xl font-satoshi">
          A container engine like <span className="underline">Podman</span> or{" "}
          <span className="underline">Docker</span> is required to be installed
          before you can run the BenchBuddy commands.
        </p>
      </div>
      <div className="mt-5 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-3xl mx-auto">
        <p className="text-2xl font-satoshi">
          Show documentation below for{" "}
          <span className="inline-flex items-center">
            <button
              className={`${
                selectedButton === "Docker"
                  ? "bg-black text-2xl border border-2 border-black text-base-color font-bold rounded-2xl p-1 pl-3 pr-3 mx-2"
                  : "bg-transparent border border-2 border-gray-400 text-gray-400 font-bold rounded-2xl p-1 pl-3 pr-3 mx-2"
              }`}
              onClick={() => handleButtonClick("Docker")}
            >
              Docker
            </button>
          </span>
          {" "}or{" "}
          <span className="inline-flex items-center">
            <button
              className={`${
                selectedButton === "Podman"
                  ? "bg-black text-2xl border border-2 border-black text-base-color font-bold rounded-2xl p-1 pl-3 pr-3 mx-2"
                  : "bg-transparent border border-2 border-gray-400 text-gray-400 font-bold rounded-2xl p-1 pl-3 pr-3 mx-2"
              }`}
              onClick={() => handleButtonClick("Podman")}
            >
              Podman
            </button>
          </span>
        </p>
      </div>
      <div className="p-10"></div>
    </>
  );
};

PreRequisite.propTypes = {
  onComponentChange: PropTypes.func.isRequired,
};

export default PreRequisite;
