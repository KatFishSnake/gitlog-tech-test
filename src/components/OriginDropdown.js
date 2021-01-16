import React, { useState } from "react";
import clsx from "clsx";

const ArrowSvg = ({ className, fill = "#BEC1C3", rotation = "-45" }) => (
  <svg
    className={className}
    width="6"
    height="11"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill={fill}
      stroke="none"
      d="M5.618 5.556L.995 10.24.75.75l4.868 4.806z"
      // transform={`rotate(${rotation})`}
      fillOpacity="null"
      strokeOpacity="null"
      strokeWidth="1.5"
    />
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
        <ArrowSvg className="inline mr-2" /> {label}
      </span>
      <div className={clsx("pt-1 pl-4 block", isActive ? "block" : "hidden")}>
        {children}
      </div>
    </>
  );
};

export default OriginDropdown;
