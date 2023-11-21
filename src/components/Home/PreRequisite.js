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
      <SubHeading name="Pre-Requisite" />
      <div className="mt-[16px] w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-[840px] mx-auto text-custom">
        <p className="text-[24px] leading-[30px] font-satoshi">
          A container engine like{" "}
          <a
            href="https://podman.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Podman
          </a>{" "}
          or{" "}
          <a
            href="https://www.docker.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Docker
          </a>{" "}
          is required to be installed before you can run the BenchBuddy
          commands.
        </p>
      </div>
      <div className="mt-[16px] w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-[840px] mx-auto text-custom">
        <p className="text-2xl font-satoshi">
          Show documentation below for{" "}
          <span className="inline-flex items-center">
            <button
              className={`${
                selectedButton === "Docker"
                  ? "bg-black text-[24px] border border-2 border-black text-base-color font-medium rounded-2xl p-1 pl-3 pr-3 mx-2 transition-all duration-300"
                  : "bg-transparent text-[24px] border border-2 border-[rgba(0,0,2,0.32)] text-[rgba(0,0,2,0.5)] hover:border-[rgba(0,0,2,0.7)] hover:text-[rgba(0,0,2,0.85)] font-medium rounded-2xl p-1 pl-3 pr-3 mx-2 transition-all duration-300"
              }`}
              onClick={() => handleButtonClick("Docker")}
            >
              Docker
            </button>
            {"or"}
            <button
              className={`${
                selectedButton === "Podman"
                  ? "bg-black text-[24px] border border-2 border-black text-base-color font-medium rounded-2xl p-1 pl-3 pr-3 mx-2 transition-all duration-300"
                  : "bg-transparent text-[24px] border border-2 border-[rgba(0,0,2,0.32)] text-[rgba(0,0,2,0.5)] hover:border-[rgba(0,0,2,0.7)] hover:text-[rgba(0,0,2,0.85)] font-medium rounded-2xl p-1 pl-3 pr-3 mx-2 transition-all duration-300"
              }`}
              onClick={() => handleButtonClick("Podman")}
            >
              Podman
            </button>
          </span>
        </p>
      </div>
    </>
  );
};

PreRequisite.propTypes = {
  onComponentChange: PropTypes.func.isRequired,
};

export default PreRequisite;
