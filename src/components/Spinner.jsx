import React from "react";
import "./Spinner.css";
import styled from "@emotion/styled";
const SpinnerStyle = styled.div`
  margin: 3rem 0;
`;
const Spinner = () => {
  return (
    <SpinnerStyle>
      <div className="sk-chase">
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
      </div>
    </SpinnerStyle>
  );
};

export default Spinner;
