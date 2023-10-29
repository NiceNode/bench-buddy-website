import React from "react";
import PropTypes from "prop-types";

const SubHeading = ({ name }) => {
  return (
    <p className="text-4xl w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-3xl mx-auto">
      {name}
    </p>
  );
};

SubHeading.propTypes = {
  name: PropTypes.string.isRequired,
};
export default SubHeading;
