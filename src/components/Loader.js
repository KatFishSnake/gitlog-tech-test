import styled from "styled-components";
import tw from "twin.macro";
import PropTypes from "prop-types";

const Loader = ({ className }) => <span className={className}>Loading...</span>;

Loader.propTypes = {
  className: PropTypes.string,
};

export const CenteredLoader = styled(Loader)`
  ${tw`mt-3 text-center w-full`}
`;

export default Loader;
