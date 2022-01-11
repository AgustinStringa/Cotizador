import React from "react";
import styled from "@emotion/styled";

const ContenedorMessage = styled.div`
  background-color: #26c6da;
  padding: 25px;
  font-weight: bold;

  margin: 1rem 0 1rem 0;
  color: #333333;
`;
const Message = ({ text }) => {
  return <ContenedorMessage>{text}</ContenedorMessage>;
};

export default Message;
