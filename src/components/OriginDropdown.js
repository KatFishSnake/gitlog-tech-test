import React, { useState } from "react";
import clsx from "clsx";

const ArrowSvg = ({ className, fill = "#BEC1C3" }) => (
  <svg
    className={className}
    width="12"
    height="12"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g>
      <path
        stroke="null"
        d="M9.092 6.207l-5.457 5.457V.75l5.457 5.457z"
        fillOpacity="null"
        strokeOpacity="null"
        strokeWidth="1.5"
        fill={fill}
      />
    </g>
  </svg>
);

const OriginDropdown = ({ label, children, defaultActive = true }) => {
  const [isActive, setActive] = useState(defaultActive);
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
      <div className={clsx("pt-1 pl-4 block", isActive ? "block" : "hidden")}>
        {children}
      </div>
    </>
  );
};

export default OriginDropdown;
