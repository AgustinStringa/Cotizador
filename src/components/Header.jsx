import React from "react";
import styled from "@emotion/styled";
const ContenedorHeader = styled.header`
  background-color: #26c6da;
  padding: 10px;
  font-weight: bold;
  color: #ffffff;
`;

const H1Header = styled.h1`
  color: #ffffff;
  font-weight: bold;
  font-size: 2.5rem;
  font-family: "Slabo 27px", serif;
`;
const Header = ({ titulo }) => {
  return (
    <ContenedorHeader>
      <H1Header>{titulo}</H1Header>
    </ContenedorHeader>
  );
};

export default Header;
