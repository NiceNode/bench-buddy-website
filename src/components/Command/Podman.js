import React from "react";
import Command from "./Command";
import SubHeading from "../SubHeading";

const Podman = () => {
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

  return (
    <>
      <SubHeading name="Run" />
      <Command
        title="Start all performance tests"
        text="podman run ghcr.io/nicenode/benchbuddy"
        exampleOutput={"startTest"}
      />

      <Command
        title="Receive the output as JSON"
        text=""
        exampleOutput={""}
      />

      <Command
        title="Limit the set of tests"
        text=""
        exampleOutput={""}
      />

      <Command
        title="Test the speed of a mounted disk or ssd"
        text=""
        exampleOutput={""}
      />

      <Command
        title="CLI Help"
        text=""
        exampleOutput={""}
      />
      <div className="p-10"></div>
      <SubHeading name="BenchMark" />
      <Command
        title="Evaluates the system against predefined requirements. Requirements can be defined in the benchmark templates folder."
        text=""
        exampleOutput={""}
      />
    </>
  );
};

export default Podman;
