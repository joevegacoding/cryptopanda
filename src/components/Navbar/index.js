import React, { useState, useEffect } from "react";
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
import Container from "@mui/material/Container";

import NavDropdown from "react-bootstrap/NavDropdown";

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Nav >
        <NavLink to="/">
          <div className="logo-container">
            <Avatar src={icon} size="large" />
            <h1 className="logo">
              <Link className="logo-name" to="/">
                Crypto Panda
              </Link>
            </h1>
          </div>
        </NavLink>

        <NavMenu className="nav-menu">
          <NavLink activeStyle to="/">
            Home
          </NavLink>
          <NavLink activeStyle to="/cryptocurrencies">
            Cryptocurrencies
          </NavLink>

          <NavLink activeStyle to="/news">
            News
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
