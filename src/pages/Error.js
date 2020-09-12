import React from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import PageNotFound from "../images/404.png";

const Error = () => {
  return (
    <StyledPageNotFound>
      <NotFoundImg src={PageNotFound} alt="Page Not Found" />
      <Page404Number>404</Page404Number>
      <Page404Text>Page Not Found</Page404Text>
      <StyledLink to="/" className="btn">
        Back Home
      </StyledLink>
    </StyledPageNotFound>
  );
};

const moveInLeft = keyframes`
   0% {
    opacity: 0;
    transform: translate(-300px);
  }

  80% {
    opacity: 0.8;
    transform: translate(20px);
  }

  100% {
    opacity: 1;
    transform: translate(0);
  }
`;

const moveInRight = keyframes`
   0% {
    opacity: 0;
    transform: translate(300px);
  }

  80% {
    opacity: 0.8;
    transform: translate(-20px);
  }

  100% {
    opacity: 1;
    transform: translate(0);
  }
`;

const moveInBottom = keyframes`
   0% {
    opacity: 0;
    transform: translateY(50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Page404Number = styled.div`
  font-size: 120px;
  animation: ${moveInLeft} 3s;
`;
const Page404Text = styled.div`
  font-size: 40px;
  animation: ${moveInRight} 3s;
`;

const StyledLink = styled(Link)`
  animation: ${moveInBottom} 3s;
  margin: 30px 0px;
`;

const StyledPageNotFound = styled.div`
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: white;
  text-align: center;
`;

const NotFoundImg = styled.img`
  display: block;
  margin: auto;
  height: 400px;
  width: 30%;
  animation: ${moveInLeft} 3s;
`;

export default Error;
