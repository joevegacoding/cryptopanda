import React, { useState } from "react";
import { Select, Typography, Row, Col, Avatar, Card } from "antd";
import moment from "moment";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";
import { useGetCryptosQuery } from "../services/cryptoApi";
import "../App.css"
const { Text, Title } = Typography;
const { Option } = Select;
const demoImageUrl =
  "https://images.pexels.com/photos/1036633/pexels-photo-1036633.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";

const News = ({ simplified }) => {
  const [newsCategory, setNewsCategory] = useState("Cryptocurrency");
  const { data: cryptoNews } = useGetCryptoNewsQuery({
    newsCategory,
    count: simplified ? 6 : 10,
  });
  const { data } = useGetCryptosQuery(100);
  console.log(cryptoNews);

  if (!cryptoNews?.value) return "Loading...";
  return (
    <Row gutter={[24, 24]}>
      {!simplified && (
        <Col  span={24}>
          <Select
         
            showSearch
            className="select-news"
            placeholder="Select A Crypto"
            optionFilterProp="children"
            onChange={(value) => setNewsCategory(value)}
            filterOptions={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option 

            value="Cryptocurrency">Cryptocurrency</Option>
            {data?.data?.coins.map((coin) => (
              <Option value={coin.name}>{coin.name}</Option>
            ))}
          </Select>
        </Col>
      )}
      {cryptoNews.value.map((news, i) => (
        <Col xw={24} sm={12} lg={8} key={i}>
          <Card  style={{background: "#000",border: "1px solid rgba(255, 255, 255, 0.4)"}}  hoverable className="news-card">
            <a href={news.url} target="blank" rel="noreferrer">
              <div  className="news-image-container">
                <Title style={{color: "white"}} className="news-title" level={4}>
                  {news.name}
                </Title>
                <img
                  style={{
                    maxWidth: "100px",
                    maxHeight: "100px",
                    backgroundSize: "cover",
                  }}
                  src={news?.image?.thumbnail?.contentUrl || demoImageUrl}
                />
              </div>
              <p style={{color: "white"}}>
                {news.description > 100
                  ? `${news.description.substring(0, 100)}... `
                  : news.description}
              </p>
              <div className="provider-container">
                <Avatar
                  src={
                    news.provider[0]?.image?.thumbnail?.contentUrl ||
                    demoImageUrl
                  }
                />
                <Text style={{color: "white", fontWeight: "bold"}} className="provider-name">{news.provider[0]?.name}</Text>
                <Text style={{color: "white"}}>
                  {moment(news.datePublished).startOf("ss").fromNow()}
                </Text>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default News;
