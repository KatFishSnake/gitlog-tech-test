import CircleSvg from "./CircleSvg";

const NavBranch = ({ label, active, onClick }) => (
  <p className="cursor-pointer hover:font-medium mb-1" onClick={onClick}>
    <CircleSvg className="inline mr-1" fill={active && "#5DAAE9"} /> {label}
  </p>
);

export default NavBranch;
