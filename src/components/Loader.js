import PropTypes from "prop-types";

const Loader = ({ className }) => <span className={className}>Loading...</span>;

Loader.propTypes = {
  className: PropTypes.string,
};

export default Loader;
