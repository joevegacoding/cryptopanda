import React from "react";
// import { NavLink } from "react-router-dom";
import { Avatar, Typography } from "antd";
import { Link } from "react-router-dom";
import {
  Nav,
  NavLink,
  NavMenu,
  NavBtn,
  NavBtnLink,
  Bars,
} from "./NavbarElement";
import icon from "../../images/logo.png";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/home">
          <div className="logo-container">
            <Avatar src={icon} size="large" />
            <h1 className="logo">
              <Link className="logo-name" to="/home">
                Crypto Panda
              </Link>
              {/* <Button className="menu-control-container">

          </Button> */}
            </h1>
          </div>
        </NavLink>
        <Bars />
        <NavMenu className="nav-menu">
          <NavLink activeStyle to="/home">
            Home
          </NavLink>
          <NavLink activeStyle to="/cryptocurrencies">
            Cryptocurrencies
          </NavLink>

          <NavLink activeStyle to="/news">
            News
          </NavLink>
        </NavMenu>
        {/* <NavBtn>
          <NavBtnLink to="/signin">Sign Up</NavBtnLink>
        </NavBtn> */}
      </Nav>
    </>
  );
};

export default Navbar;
