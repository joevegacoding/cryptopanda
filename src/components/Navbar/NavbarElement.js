import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

// export const Nav = styled.nav`
//   background: #000;
//   height: 80px;

//   display: flex;
//   justify-content: center;
//   align-items: center;
//   position: sticky;
//   font-size: 1rem:
//   top: 0;
//   z-index: 10;

//   @media screen and (max-width: 768px) {

//     transition: 0.8s all ease;

//   }

// `;

// export const NavbarContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   height: 80px;
//   z-index: 1;
//   width: 100%;
//   padding: 0 24px;
//   max-width: 1100px;
// `;

// export const NavLogo = styled(Link)`
//   color: #fff;
//   justify-self: flex-start;
//   cursor: pointer;
//   font-size: 1.5rem;
//   display: flex;
//   align-items: center;
//   margin-left: 24px;
//   font-weight: bold;
//   text-decoration: none;
// `;

// export const MobileIcon = styled.div`
//   display: none;

//   @media screen and (max-width: 768px) {
//     display: block;
//     position: absolute;
//     top: 0;
//     right: 0;
//     transform: translate(-100%, 60%);
//     font-size: 1.8rem;
//     cursor: pointer;
//   }
// `;

// export const NavMenu = styled.ul`
//   display: flex;
//   align-items: center;
//   list-style: none;
//   text-align: center;
//   margin-right: -22px;

//   @media screen and (max-width: 768px) {
//     display: none;
//   }
// `;

// export const NavItem = styled.li`
//   height: 80px;
// `;

// export const NavLinks = styled(Link)`
//   color: #fff;
//   display: flex;
//   align-items: center;
//   text-decoration: none;
//   padding: 0 1rem;
//   height: 100%;
//   cursor: pointer;

//   @.active {

//     border-bottom: 1px solid #
//   }
// `;

export const Nav = styled.nav`
    background: #000,
    height: 120px;
    display: flex;
    justify-content: space-between;
    padding: 1.6rem calc((100vw - 1000px) / 2);
    z-index: 999;
    background-color: #2b2d42;

`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    color: #15cdfc;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;

    align-items: center;
    position: absolute;

    top: 0;
    right: 0;
    transform: translate(-100%, 113%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;

  @media screen and (max-width: 768px) {
    display: none;
    flex-direction: column;
    height: auto;
    justify-content: center;
    margin-top: 100px;

    display: ${({ isClicked }) => (isClicked ? "none" : "flex")};
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #256ce1;
  padding: 10px 22px;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
