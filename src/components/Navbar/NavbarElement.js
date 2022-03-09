import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export const Nav = styled.nav`
    background: #000,
    height: 120px;
    display: flex;
    justify-content: space-between;
    padding: 1.6rem calc((100vw - 1000px) / 2);
    z-index: 999;
    background-color: #000;
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);

    @media screen and (max-width: 768px) {
      display: flex;
      flex-direction: column;
    }

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
    color: #000;
  }

  @media screen and (max-width: 768px) {
    color: #15cdfc;
    font-weight: bold;
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
    display: flex;
    flex-direction: row;
    height: auto;
    justify-content: center;
    margin-top: 20px;
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
