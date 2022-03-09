import logo from "./logo.svg";
import { Switch, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import { Homepage, Cryptocurrencies, News, CryptoDetails } from "./components";
import Navbar from "./components/Navbar";
import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const date = new Date().getFullYear();
  console.log(date);
  return (
    <Router>
      <Navbar isOpen={isOpen} toggle={toggle} />

      <Layout>
        <div className="routes">
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>

            <Route exact path="/cryptocurrencies">
              <Cryptocurrencies />
            </Route>
            <Route exact path="/crypto/:coinId">
              <CryptoDetails />
            </Route>
            <Route exact path="/news">
              <News />
            </Route>
          </Switch>
        </div>
      </Layout>
      <div className="footer">
        <Typography.Title
          level={5}
          style={{ color: "white", textAlign: "center" }}
        >
          Copyright ©{date}
          <Link to="/"> Crypto Panda</Link> <br />
          All Rights Reserved.
        </Typography.Title>
        <Space>
          <Link to="/">
            <h2
              style={{
                color: "#fff",
                fontWeight: "bold",
                textDecoration: "none",
              }}
            >
              Home
            </h2>
          </Link>
          <Link to="/cryptocurrencies">
            <h2
              style={{
                color: "#fff",
                fontWeight: "bold",
                textDecoration: "none",
              }}
            >
              Cryptocurrencies
            </h2>
          </Link>

          <Link to="/news">
            <h2
              style={{
                color: "#fff",
                fontWeight: "bold",
                textDecoration: "none",
              }}
            >
              News
            </h2>
          </Link>
        </Space>
      </div>
    </Router>
  );
}

export default App;
