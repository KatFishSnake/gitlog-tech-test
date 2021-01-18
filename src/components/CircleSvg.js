import PropTypes from "prop-types";

const CircleSvg = ({ className, fill }) => (
  <svg
    className={className}
    width="12"
    height="12"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill={fill || "#BEC1C3"}
      d="M.162 6.015h0A5.853 5.853 0 016.015.162h0a5.853 5.853 0 015.853 5.853h0a5.853 5.853 0 01-5.853 5.853h0A5.853 5.853 0 01.162 6.015zm2.926 0h0a2.926 2.926 0 102.927-2.927h0a2.926 2.926 0 00-2.927 2.927z"
      fillOpacity="null"
      strokeOpacity="null"
      strokeWidth="1.5"
      stroke="null"
    />
  </svg>
);

CircleSvg.propTypes = {
  className: PropTypes.string,
  fill: PropTypes.any,
};

export default CircleSvg;
