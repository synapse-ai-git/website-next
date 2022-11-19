import React from "react";

import Image from "next/image";

import styled from "styled-components";
import Link from "next/link";

export const NavBarElements = styled.nav`
  position: fixed;
  height: 100vh;
  width: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  z-index: 2;
  @media screen and (max-width: 1024px) {
    /* justify-content: start; */
  }
`;

export const NavBarLogo = styled(Link)`
  padding: 10px;
`;

export const NavBarMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column-reverse;
`;

export const NavBarLink = styled(Link)`
  text-decoration: none;
  margin: 30px 0 30px 0;
  transform: rotate(-90deg);
  transition: color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  box-shadow: inset 0 0 0 0 #43ee7d;
  color: #fff;
  padding: 0 0.25rem;

  :hover {
    box-shadow: inset 100px 0 0 0 #43ee7d;
    color: #000;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  img {
    color: gray;
    margin-top: 20px;
    margin-bottom: 20px;
    height: 25px;
  }
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

// export const Register = styled.button`
//   border-radius: 8px;
//   border-style: none;
//   background-color: #70369c;
//   box-sizing: border-box;
//   color: #fff;
//   cursor: pointer;
//   display: inline-block;
//   font-size: 14px;
//   font-weight: 500;
//   height: 40px;
//   line-height: 20px;
//   list-style: none;
//   outline: none;
//   padding: 10px 16px;
//   position: relative;
//   text-align: center;
//   text-decoration: none;
//   transition: color 100ms;
//   vertical-align: baseline;
//   user-select: none;
//   -webkit-user-select: none;
//   touch-action: manipulation;

//   &:hover,
//   &:focus {
//     border: none;
//     background-color: #22062c;
//   }
// `;

const NavBar = () => {
  return (
    <>
      <NavBarElements>
        <NavBarLogo href="/">
          <Image
            src={"/logo-mini.svg"}
            alt="synapse-ai"
            width="60"
            height="60"
          />
        </NavBarLogo>
        <NavBarMenu>
          <NavBarLink href="/">Home</NavBarLink>
          <NavBarLink href="/about">About</NavBarLink>
          <NavBarLink href="contact">Contact</NavBarLink>
        </NavBarMenu>

        <SocialLinks>
          {/* <Register>Register</Register> */}
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
            <Image
              src={"/linkedin_icon.svg"}
              alt="linkedin"
              width="100"
              height="100"
            />
          </a>
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
            <Image
              src={"/instagram_icon.svg"}
              alt="instagram"
              width="100"
              height="100"
            />
          </a>
          <a href="https://github.com/synapse-ai-git">
            <Image
              src={"/github_icon.svg"}
              alt="github"
              width="100"
              height="100"
            />
          </a>
        </SocialLinks>
      </NavBarElements>
    </>
  );
};

export default NavBar;
