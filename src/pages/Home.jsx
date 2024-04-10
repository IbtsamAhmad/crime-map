import React from "react";
import { Row, Col, Button } from "antd";
import { Link } from "react-router-dom";
import Contact from "./Contact";
const Home = () => {
  const handleClick = () =>{
    document.getElementById('contact-container').scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
  return (
    <div className="home-container">
      <Row gutter={[32, 32]} align="middle">
        <Col lg={12}>
          <h1>Crime Map</h1>
          <p>Motto</p>

          <div className="home-buttons">
            <Button className="home-btn" href="/register" shape="round">
              Sign Up
            </Button>
            <Button className="home-btn" href="/login" shape="round">
              Log In
            </Button>
          </div>
        </Col>
        <Col lg={12}>
          <img src="/png-transparent-world-map.png" alt="" />
        </Col>
      </Row>
      <div className="home-footer"onClick={handleClick} style={{cursor:"pointer", marginTop:"4rem"}} >
        <img src="/polygon.png" alt="" />
      </div>
      <Contact />
    </div>
  );
};

export default Home;
