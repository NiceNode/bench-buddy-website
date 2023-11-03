import React from "react";
import CommandDisplay from "./CommandDisplay";
import SubHeading from "../SubHeading";
import PropTypes from "prop-types";

const Command = ({ selectedComponent }) => {
  const startTest = `    ------ CPU ------
    Number of cpu cores: 8 cores
    Maximum number of cpu threads: 94789 threads
    Test using threads: 1 threads, created cpu events: 9763 events
    Test using threads: 4 threads, created cpu events: 41941 events
    Test using threads: 8 threads, created cpu events: 72586 events
    Test using threads: 32 threads, created cpu events: 70431 events
    
    ------ Memory ------
    Total memory: 12 GB
    Memory read test using blockSize: 32MB, result speed: 34031 MiB/sec
    Memory read test using blockSize: 1G, result speed: 36706 MiB/sec
    Memory write test using blockSize: 32MB, result speed: 26597 MiB/sec
    Memory write test using blockSize: 1G, result speed: 27020 MiB/sec
    
    ------ Storage ------
    running about ~30 second file input and output speed test...
    (mount a volume to directory /test-volume to test the mount speed.)
    Read: 20571 IOPS, 12086 min IOPS
    Write: 6893 IOPS, 4216 min IOPS
    
    ------ Internet ------
    running a 30 second www.speedtest.net internet speed test
    Ping: average 6.154ms, max 8.063ms
    Download: average 378Mbps, latency: iqm 9.436ms and max 15.735ms
    Upload: average 171Mbps, latency: iqm 85.166ms and max 264.849ms`;

  const benchMark = `    ------ CPU ------
    Number of cpu cores: 16 cores
    Satisfies recommended 4 cores
    
    ------ Memory ------
    Total memory: 20GB
    Satisfies recommended 16GB total memory
    Available memory: 19 GB
    Satisfies recommended 18GB available memory
    
    ------ Storage ------
    running about ~30 second file input and output speed test...
    (mount a volume to directory /test-volume to test the mount speed.)
    Read: 54427 IOPS, 26600 min IOPS
    Satisfies recommended 10000IOPS read
    Write: 18189 IOPS, 9008 min IOPS
    Satisfies recommended 6000IOPS write
    Total storage: 1082GB
    Available storage: 647GB
    ***Requires a minimum of 1000GB available storage
    Total storage exceeds the minimum. Consider freeing up storage
    
    ------ Internet ------
    running a 30 second www.speedtest.net internet speed test
    Ping: average 9.692ms, max 11.892m
    Download: average 149Mbps, latency: iqm 17.744ms and max 237.529ms
    Satisfies recommended 25Mbps download
    Upload: average 174Mbps, latency: iqm 123.917ms and max 487.69ms
    Satisfies recommended 25Mbps upload
    Speedtest link: https://www.speedtest.net/result/c/09877245-862-4c2c-8b97-acf0f84c7465
    BenchBuddy cannot test your data cap.
    Requires a data cap minimum of 2TB, but recommended 6TB or more.
    
    ------ Time ------
    Time accuracy: local time off by 0 seconds
    Local time: 2/8/2023, 11:12:42 PM, Server time 2/8/2023, 11:12:42 PM
    Local time: 1675897962 seconds UTC, Server time 1675897962 seconds UTC
    Satisfies recommended 0 seconds error`;

  const dockerText = `docker run ghcr.io/nicenode/benchbuddy`;
  const podmanText = `podman run ghcr.io/nicenode/benchbuddy`;

  return (
    <>
      <SubHeading name="Run" />
      <CommandDisplay
        title="Start all performance tests"
        text={selectedComponent === "Docker" ? dockerText : podmanText}
        exampleOutput={startTest}
      />

      <CommandDisplay
        title="Receive the output as JSON"
        text={selectedComponent === "Docker" ? `${dockerText} -f json` : `${podmanText} -f json`}
        exampleOutput={""}
      />

      <CommandDisplay
        title="Limit the set of tests"
        text={selectedComponent === "Docker" ? `${dockerText} -t cpu memory` : `${podmanText} -t cpu memory`}
        exampleOutput={""}
      />

      <CommandDisplay
        title="Test the speed of a mounted disk or ssd"
        text={selectedComponent === "Docker" ? `${dockerText} -v /path/to/host/disk:/test-volume` : `${podmanText} -v /path/to/host/disk:/test-volume`}
        exampleOutput={""}
      />

      <CommandDisplay
        title="CLI Help"
        text={selectedComponent === "Docker" ? `${dockerText} --help` : `${podmanText} --help`}
        exampleOutput={""}
      />
      <SubHeading name="BenchMark" />
      <CommandDisplay
        title="Evaluates the system against predefined requirements. Requirements can be defined in the benchmark templates folder."
        text={selectedComponent === "Docker" ? `${dockerText} -r eth-node` : `${podmanText} -r eth-node`}
        exampleOutput={benchMark}
      />
    </>
  );
};

Command.propTypes = {
  selectedComponent: PropTypes.string.isRequired,

};

export default Command;
