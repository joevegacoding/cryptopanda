import logo from "./logo.svg";
import { Switch, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import { Homepage, Cryptocurrencies, News, CryptoDetails } from "./components";
import Navbar from "./components/Navbar/index";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const date = new Date().getFullYear();
  console.log(date);
  return (
    <Router>
      <Navbar />

      <Layout>
        <div className="routes">
          <Switch>
            <Route exact path="/home">
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
          <Link to="/home"> Cryptoverse Inc.</Link> <br />
          All Rights Reserved.
        </Typography.Title>
        <Space>
          <Link to="/home">
            <h2
              style={{
                color: "#fff",
                fontWeight: "bold",
                textDecoration: "underline",
              }}
            >
              Home
            </h2>
          </Link>

          <Link to="/news">
            <h2
              style={{
                color: "#fff",
                fontWeight: "bold",
                textDecoration: "underline",
              }}
            >
              News
            </h2>
          </Link>
        </Space>
      </div>
    </Router>

    // <div className="app">
    //   <div className="navbar">
    //     <Navbar />
    //   </div>

    // </div>
  );
}

export default App;
