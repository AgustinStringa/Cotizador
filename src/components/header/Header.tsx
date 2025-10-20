import styled from "@emotion/styled";
import PropTypes from "prop-types";

const ContenedorHeader = styled.header`
  background-color: #26c6da;
  padding: 1rem;
  font-weight: bold;
  color: #ffffff;
`;

const H1Header = styled.h1`
  color: #ffffff;
  font-weight: bold;
  font-size: 2.5rem;
`;
const HeaderComponent = ({ titulo }: { titulo: string }) => {
  return (
    <ContenedorHeader>
      <H1Header >{titulo}</H1Header>
    </ContenedorHeader>
  );
};
HeaderComponent.propTypes = {
  titulo: PropTypes.string.isRequired,
};
export default HeaderComponent;
