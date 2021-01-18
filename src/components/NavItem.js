import PropTypes from "prop-types";
import CircleSvg from "./CircleSvg";

const NavItem = ({ label, active, onClick }) => (
  <p className="cursor-pointer mb-2" onClick={onClick}>
    <CircleSvg
      className="inline mr-1 align-text-top"
      fill={active && "#5DAAE9"}
    />{" "}
    {label}
  </p>
);

NavItem.propTypes = {
  label: PropTypes.string.isRequired,
  active: PropTypes.bool,
  onClick: PropTypes.func,
};

export default NavItem;
