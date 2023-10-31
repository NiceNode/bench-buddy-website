import React, { useState } from "react";
import github from "../../images/github.svg";
import githubWhite from "../../images/github_white.svg";

const GithubButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  const openGitHubPage = () => {
    window.open("https://github.com/NiceNode/speedometer", "_blank");
  };

  return (
    <div>
      <button
        className="bg-transparent border border-2 border-black font-bold rounded-3xl flex items-center p-2 mt-10 mb-10 transition-all duration-300 hover:bg-black hover:text-white"
        onClick={openGitHubPage}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={isHovered ? githubWhite : github}
          alt="Github"
          className="mr-2"
        />
        View on Github
      </button>
    </div>
  );
};

export default GithubButton;

