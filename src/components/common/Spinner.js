import React from "react";
import { CircularProgress } from "@rmwc/circular-progress";
import styled from "styled-components";
import "@rmwc/circular-progress/circular-progress.css";

function Spinner() {
  return (
    <SpinnerDiv>
      <StyledSpinner size="50" />
    </SpinnerDiv>
  );
}

const StyledSpinner = styled(CircularProgress)`
  margin-top: 20% !important;
  left: 45% !important;
`;

const SpinnerDiv = styled(CircularProgress)`
  height: 10%;
  width: 10%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  color: var(--clr-primary-5);
`;

export default Spinner;
