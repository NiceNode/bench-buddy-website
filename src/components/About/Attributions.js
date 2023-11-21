import React from "react";
import SubHeading from "../SubHeading";

const Attributions = () => {
  return (
    <>
      <SubHeading name="Attributions" />
      <div className="mt-5 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-[840px] mx-auto text-custom">
        <p className="text-2xl font-satoshi">
          Notices of third-party code or software that may be contained in parts
          of BenchBuddy.
        </p>
        <p className="mt-2 text-lg font-satoshi">
          <span className="font-bold">Stakehouse</span> eth-wizard code snippet
        </p>
        <div className="mt-2 whitespace-normal overflow-x-auto text-left">
          <button
            onClick={() =>
              window.open(
                "https://github.com/stake-house/eth-wizard/blob/main/ethwizard/platforms/ubuntu/install.py#L51"
              )
            }
            className="text-[rgba(0,0,2,0.70)] text-sm underline cursor-pointer transition-colors duration-300 hover:text-[rgba(0,0,2,0.85)]"
          >
            <span className="hidden lg:inline">
              github.com/stake-house/eth-wizard/blob/main/ethwizard/platforms/ubuntu/install.py#L51
            </span>
            <span className="lg:hidden">
              github.com/stake-house/eth-wizard...
            </span>
          </button>
        </div>
        <p className="mt-2 text-lg font-satoshi">
          <span className="font-bold">Speedtest</span> as a third-party service
        </p>
        <button
          onClick={() => window.open("https://www.speedtest.net/apps/cli")}
          className="text-[rgba(0,0,2,0.70)] text-sm underline cursor-pointer transition-colors duration-300 hover:text-[rgba(0,0,2,0.85)]"
        >
          speedtest.net/apps/cli
        </button>
        <p className="mt-2 text-lg font-satoshi">
          <span className="font-bold">WorldTimeAPI</span> as a third-party
          service
        </p>
        <button
          onClick={() => window.open("http://worldtimeapi.org")}
          className="text-[rgba(0,0,2,0.70)] text-sm underline cursor-pointer transition-colors duration-300 hover:text-[rgba(0,0,2,0.85)]"
        >
          worldtimeapi.org
        </button>
      </div>
    </>
  );
};

export default Attributions;
