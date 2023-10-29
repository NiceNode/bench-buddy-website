import React from "react";
import SubHeading from "../SubHeading";

const Attributions = () => {
  return (
    <>
      <div className="p-10"></div>
      <SubHeading name="Attributions" />
      <div className="mt-5 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-3xl mx-auto">
        <p className="text-2xl font-satoshi">
          Notices of third party code or software that may be contained in parts
          of BenchBuddy.
        </p>
        <p className="mt-2 text-lg font-satoshi">
          <span className="font-bold">Stakehouse</span> eth-wizard code snippet
        </p>
        <button
          onClick={() =>
            window.open(
              "https://github.com/stake-house/eth-wizard/blob/main/ethwizard/platforms/ubuntu/install.py#L51"
            )
          }
          className="text-gray-700 text-sm underline cursor-pointer"
        >
          github.com/stake-house/eth-wizard/blob/main/ethwizard/platforms/ubuntu/install.py#L51
        </button>
        <p className="mt-2 text-lg font-satoshi">
          <span className="font-bold">Speedtest</span> as third-party service
        </p>
        <button
          onClick={() => window.open("https://www.speedtest.net/apps/cli")}
          className="text-gray-700 text-sm underline cursor-pointer"
        >
          speedtest.net/apps/cli
        </button>
        <p className="mt-2 text-lg font-satoshi">
          <span className="font-bold">WorldTimeAPI</span> as a third-party
          service
        </p>
        <button
          onClick={() => window.open("http://worldtimeapi.org")}
          className="text-gray-700 text-sm underline cursor-pointer"
        >
          worldtimeapi.org
        </button>
      </div>
    </>
  );
};

export default Attributions;
