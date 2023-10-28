import React from "react";
import github from "../../images/github.svg";

const GithubButton = () => {
  const openGitHubPage = () => {
    window.open("https://github.com/NiceNode/speedometer", "_blank");
  };

  return (
    <div>
      <button
        className="bg-transparent border border-2 border-black font-bold rounded-3xl flex items-center p-2 mt-10"
        onClick={openGitHubPage}
      >
        <img src={github} alt="Github" className="mr-2" />
        View on Github
      </button>
    </div>
  );
};

export default GithubButton;

