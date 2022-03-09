import React from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../services/cryptoApi";
import { Cryptocurrencies, News } from "../components";

const { Title } = Typography;

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);

  const globalStats = data?.data?.stats;

  if (isFetching) return "Loading...";
  return (
    <>
      <Title style={{color: "#fff" }} level={2} className="heading">
        Crypto Stats
      </Title>
      <Row>
        <Col   span={12}>
          <Statistic  title={<h4 style={{color: "rgba(255, 255, 255, 0.7)", marginTop: "15px"}}>Total Cryptocurrencies</h4>}  value={globalStats.total} />
        </Col>
        <Col span={12}>
          <Statistic
         title={<h4 style={{color: "rgba(255, 255, 255, 0.7)", marginTop: "15px"}}>Total Exchanges</h4>} 

            value={millify(globalStats.totalExchanges)}
          />
        </Col>
        <Col span={12}>
          <Statistic

              title={<h4 style={{color: "rgba(255, 255, 255, 0.7)", marginTop: "15px"}}>Total Market Cap</h4>} 

            value={millify(globalStats.totalMarketCap)}
          />
        </Col>
        <Col span={12}>
          <Statistic
          
          title={<h4 style={{color: "rgba(255, 255, 255, 0.7)", marginTop: "15px"}}>Total Volume 24h</h4>} 
            value={millify(globalStats.total24hVolume)}
          />
        </Col>
        <Col span={12}>
          <Statistic
             

            title="Total Markets"
            value={millify(globalStats.totalMarkets)}
          />
        </Col>
      </Row>
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Top 10 Cryptocurrencies in the world
        </Title>
        <Title level={3} className="show-more">
          <Link to="/cryptocurrencies">Show More</Link>
        </Title>
      </div>
      <Cryptocurrencies simplified />
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Latest Crypto News
        </Title>
        <Title level={3} className="show-more">
          <Link to="/news">Show More</Link>
        </Title>
      </div>
      <News simplified />
    </>
  );
};

export default Homepage;
