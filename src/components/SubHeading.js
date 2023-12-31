import React from "react";
import PropTypes from "prop-types";

const SubHeading = ({ name }) => {
  return (
    <p className="text-[48px] mt-[80px] font-medium leading-[58px] w-full max-w-xs sm:max-w-sm md:max-w-[840px] lg:max-w-[840px] text-custom mx-auto">
      {name}
    </p>
  );
};

SubHeading.propTypes = {
  name: PropTypes.string.isRequired,
};
export default SubHeading;
