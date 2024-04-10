import React, { useState, useEffect } from "react";
import { Row, Col, Button , Select} from "antd";
import MyMapComponent from "../Components/MapComponent/Map";
import { ReactComponent as Police } from "../assets/Police.svg";
import { ReactComponent as User } from "../assets/User.svg";
import { Link } from "react-router-dom";
const {Option} = Select
const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Row gutter={[32, 32]}>
        <Col lg={16}>
          <MyMapComponent />
          <div className="symbols">
          <div className="symbol">
          <User/>
          <p>User's Location</p>
          </div>
          <div className="symbol">
          <Police/>
          <p>Police Stations</p>
          </div>

          </div>
        </Col>
        <Col lg={8}>
          <div className="dashboard-colTwo">
            <Link to="/report">
              <Button  className="dashboard-btn">
                Report a Crime
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button  className="dashboard-btn">
                Reports
              </Button>
            </Link>
            <div>
              <Select size="large" placeholder="Filters" style={{width:"100%", textAlign:"left"}}>
                <Option value="1">1</Option>
              </Select>
              <Select size="large" placeholder="Closest Police Station" style={{width:"100%", textAlign:"left", margin:"30px 0px"}}>
                <Option value="1">1</Option>
              </Select>
              <Select size="large" placeholder="Reports" style={{width:"100%", textAlign:"left"}}>
                <Option value="1">1</Option>
              </Select>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
