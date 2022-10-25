import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html, body {
    position: relative;
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
    width: 100%;
    height: 100vh;
    overflow-x: hidden;
    overscroll-behavior-y: none;
  }
  *, *::after, *::before {
      box-sizing: border-box;
  }
`;

export const StyledBurger = styled.button`
  position: relative;             //// ABSOLUTE MAYBE??
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 1.1rem;
  background: transparent;               
  opacity: 0.8;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 2;
  overscroll-behavior-x: none;

  &:hover {
    opacity: 1;
    transition: 400ms ease-in-out;
  }

  &:focus {
    outline: none;
  }

  div {
    position: relative;
    background: #FBC23E;                  //// WAS whitesmoke
    border-radius: 50px;
    transition: all 0.3s linear;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(50deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-50deg)" : "rotate(0)")};
    }
  }

  @media screen and (max-width: 1280px) and (orientation: portrait) {
    position: absolute;               //// WAS fixed
    // top: 2rem;
    right: 1.5rem;
    
    div {
      width: 1.5rem;
      height: 0.15rem;
    }
  }

  @media screen and (max-width: 1280px) and (orientation: landscape) {
    position: absolute;
    // top: 2.5rem;
    right: 1.5rem;

    div {
      width: 1.5rem;
      height: 0.15rem;
    }
  }
`;

export const StyledMenu = styled.nav`  
  display: flex;
  flex-direction: column;
  background: transparent;
  right: 0;
  transition: transform 0.6s ease-in-out;
  z-index: 1;

  a {
    // letter-spacing: 0.5rem;
    // margin-right: 15rem;
    // color: white;
    // opacity: 0.8;

    text-transform: uppercase;
    text-decoration: none;
    transition: color 0.3s linear;
    :nth-child(1) {
      color: #479082;
    }
    :nth-child(2) {
      color: #D16654;
    }
    :nth-child(3) {
      color: #F3A2BB;
    }
  }
  
  @media screen and (max-width: 1280px) and (orientation: portrait) {
    position: fixed;
    background: black;
    opacity: 0.95;
    border-radius: 0px 0px 0px 100px;         //// EXPERIMENT
    height: 60%;                              //// WAS 100%
    width: 80%;                              //// WAS 100%
    // padding-top: 1.5rem;
    top: 0;
    padding-top: 35%;                        //// WAS 50%
    padding-left: 10%;                       //// WAS 20%
    transform: ${({ open }) => (open ? "translateX(0%)" : "translateX(100%)")};

    a {
      font-size: 15px;                       //// WAS 1rem
      letter-spacing: 0.01rem;               //// EXPERIMENT
      // padding: 1.3rem;
    }
  }

  @media screen and (max-width: 1280px) and (orientation: landscape) {
    position: fixed;
    background: black;
    opacity: 0.95;
    border-radius: 0px 0px 0px 100px;         //// EXPERIMENT
    height: 75%;                              //// WAS 100%
    width: 65%;                              //// WAS 100%
    // padding-top: 1.5rem;
    top: 0;
    padding-top: 7.5%;                        //// WAS 50%
    padding-left: 17%;                       //// WAS 20%

    // top: 5rem;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};

    a {
      font-size: 16.5px;                       //// WAS 1rem
      letter-spacing: 0.05rem;               //// EXPERIMENT
      // padding: 1.3rem;
    }
  }
`;
