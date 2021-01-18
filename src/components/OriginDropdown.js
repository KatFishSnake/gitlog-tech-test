import React, { useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import ArrowSvg from "./ArrowSvg";

const OriginDropdown = ({ label, children, initialActive = true }) => {
  const [isActive, setActive] = useState(initialActive);
  return (
    <>
      <span
        onClick={() => {
          setActive(!isActive);
        }}
      >
        <ArrowSvg
          className={clsx(
            isActive && "rotate-90",
            "inline mr-1 transform transition-transform"
          )}
        />{" "}
        {label}
      </span>
      <div className={clsx("pt-2 pl-4 block", isActive ? "block" : "hidden")}>
        {children}
      </div>
    </>
  );
};

OriginDropdown.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.array,
  initialActive: PropTypes.bool,
};

export default OriginDropdown;
