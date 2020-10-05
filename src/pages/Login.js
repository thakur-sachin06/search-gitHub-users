import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import loginImg from "../images/login-img.svg";

const Login = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Wrapper>
      <div className="container">
        <img src={loginImg} alt="login" />
        <h1>Github User</h1>
        <button className="login-btn" onClick={loginWithRedirect}>
          <span className="login-btn_visible-text">Login / sign up</span>
          <span className="login-btn_invisible-text">Welcome</span>
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  .container {
    width: 90vw;
    max-width: 600px;
    text-align: center;
  }
  img {
    margin-bottom: 2rem;
  }
  h1 {
    margin-bottom: 1.5rem;
  }
  .login-btn {
    position: relative;
    overflow: hidden;
    letter-spacing: var(--spacing);
    text-transform: uppercase;
    font-weight: 400;
    border: 2px solid transparent;
    transition: all 0.2s;
    cursor: pointer;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    border-radius: var(--radius);
    outline: none;
    font-size: 16px;
    color: white;
    background-image: linear-gradient(
      to right,
      var(--clr-primary-1),
      var(--clr-primary-2)
    );

    &_visible-text {
      display: inline-block;
      width: 100%;
      height: 100%;
      padding: 0.5rem 2rem;
      transition: all 0.2s;
    }

    &_invisible-text {
      position: absolute;
      left: 0;
      top: -100%;
      height: 100%;
      width: 100%;
      padding: 0.4rem;
      transition: all 0.2s;
    }

    &:hover {
      background-image: linear-gradient(
        to left,
        var(--clr-primary-1),
        var(--clr-primary-2)
      );
    }

    &:hover .login-btn_invisible-text {
      top: 0;
    }

    &:hover .login-btn_visible-text {
      transform: translateY(100%);
    }

    &:active {
      transform: scale(0.9);
    }
  }
`;
export default Login;
