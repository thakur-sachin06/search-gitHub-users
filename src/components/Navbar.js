import React from "react";
import styled, { keyframes } from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

  const isUserLoggedIn = isAuthenticated && user;
  return (
    <Wrapper>
      {isUserLoggedIn && user.picture && (
        <img src={user.picture} alt={user.name} />
      )}
      {isUserLoggedIn && user.name && (
        <h4>
          Welcome, <strong>{user.name.toUpperCase()}</strong>
        </h4>
      )}

      {isUserLoggedIn && (
        <button
          onClick={() => {
            logout({ returnTo: window.location.origin });
          }}
        >
          Logout
        </button>
      )}
      {!isUserLoggedIn && <button onClick={loginWithRedirect}>Login</button>}
    </Wrapper>
  );
};

const pulsate = keyframes`
  0% {
    transform: scale(1);
    color: var(--clr-red-dark);
  }

  50% {
    transform: scale(1.05);
    color: var(--clr-grey-6);

  }

  100% {
    transform: scale(1);
    color: var(--clr-red-dark);
  }
`;

const Wrapper = styled.nav`
  padding: 1.5rem;
  margin-bottom: 4rem;
  background: var(--clr-white);
  text-align: center;
  display: grid;
  grid-template-columns: auto auto 100px;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  h4 {
    margin-bottom: 0;
    font-weight: 400;
  }
  img {
    width: 35px !important;
    height: 35px;
    border-radius: 50%;
    object-fit: cover;
  }
  button {
    background: transparent;
    border: transparent;
    font-size: 1.2rem;
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      color: var(--clr-primary-2);
      font-size: 1.6rem;
      font-weight: 600;
      animation: ${pulsate} 1s infinite;
    }
  }
`;

export default Navbar;
