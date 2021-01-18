import PropTypes from "prop-types";

const ArrowSvg = ({ className, fill }) => (
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
        fill={fill || "#BEC1C3"}
      />
    </g>
  </svg>
);

ArrowSvg.propTypes = {
  className: PropTypes.string,
  fill: PropTypes.any,
};

export default ArrowSvg;
