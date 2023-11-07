import React, { useState } from "react";
import github from "../../images/github.svg";
import githubWhite from "../../images/github_white.svg";

const GithubButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  const openGitHubPage = () => {
    window.open("https://github.com/NiceNode/bench-buddy", "_blank");
  };

  return (
    <div>
      <button
        className="w-[247px] h-[56px] text-[24px] leading-[30px] font-medium bg-transparent border border-2 border-black font-bold rounded-3xl flex items-center justify-center p-2 mt-[40px] transition-all duration-300 hover:bg-black hover:text-white"
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
