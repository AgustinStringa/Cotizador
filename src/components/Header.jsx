import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
const ContenedorHeader = styled.header`
  background-color: var(--primary-color);
  padding: 0.5rem;
  font-weight: bold;
  color: #ffffff;
`;

const H1Header = styled.h1`
  color: #ffffff;
  font-weight: bold;
  font-size: 1.5rem;
`;
const Header = ({ titulo }) => {
  return (
    <ContenedorHeader>
      <H1Header>{titulo}</H1Header>
    </ContenedorHeader>
  );
};
Header.propTypes = {
  titulo: PropTypes.string.isRequired,
};
export default Header;
