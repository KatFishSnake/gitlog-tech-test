const CircleSvg = ({ className, fill }) => (
  <svg
    className={className}
    width="15"
    height="15"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill={fill || "#BEC1C3"}
      d="M.75 7.25a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zm3.25 0A3.25 3.25 0 107.25 4 3.25 3.25 0 004 7.25z"
      fillOpacity="null"
      strokeOpacity="null"
      strokeWidth="1.5"
      stroke="null"
    />
  </svg>
);

export default CircleSvg;
