import React, { useState, useEffect } from "react";
import { Row, Col, Button, Select, Spin, message } from "antd";
import MyMapComponent from "../Components/MapComponent/Map";
import { ReactComponent as Police } from "../assets/Police.svg";
import { ReactComponent as User } from "../assets/User.svg";
import { Link } from "react-router-dom";

import axios from "axios";
import { baseUrl } from "../constants/contants";
const { Option } = Select;
const Dashboard = () => {
  const [loading, setLoading] = useState(false);
  const [allCrimes, setAllCrimes] = useState([]);
  const [filteredCrimes, setFilteredCrimes] = useState([]);
  const [selectedCrime, setSelectedCrime] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem("token"); // Retrieve token from localStorage
        const allUserUrl = baseUrl + "crime/get/all";

        const allCrimesResponse = await axios.get(allUserUrl, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (allCrimesResponse.data.statusCode) {
          const allCrimesData = allCrimesResponse.data.data.map((crime) => {
            return {
              ...crime,
              lat: parseFloat(crime.lat),
              lng: parseFloat(crime.lng),
            };
          });
          // console.log("allCrimesData", allCrimesData);
          setAllCrimes(allCrimesData);
          setFilteredCrimes(allCrimesData);
        } else {
          message.error(allCrimesResponse.data.message);
        }
      } catch (error) {
        console.log("error", error);
        message.error(error.response.data.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const handleCrimeClick = (crime) => {
    setSelectedCrime(crime);
  };

  const onChangeCrimeType = (value) => {
    const allCrimesData = [...allCrimes];
    const filteredCrimes = allCrimesData.filter(
      (crime) => crime.type === value
    );
    setFilteredCrimes(filteredCrimes);
  };

  return (
    <div className="dashboard-container">
      <Spin spinning={loading}>
        <Row gutter={[32, 32]}>
          <Col lg={16}>
            <MyMapComponent
              filteredCrimes={filteredCrimes}
              selectedCrime={selectedCrime}
              handleCrimeClick={handleCrimeClick}
              setSelectedCrime={setSelectedCrime}
            />
            <div className="symbols">
              <div className="symbol">
                <User />
                <p>User's Location</p>
              </div>
              <div className="symbol">
                <Police />
                <p>Police Stations</p>
              </div>
            </div>
          </Col>
          <Col lg={8}>
            <div className="dashboard-colTwo">
              <Link to="/report">
                <Button className="dashboard-btn">Report a Crime</Button>
              </Link>
              <Link to="/dashboard">
                <Button className="dashboard-btn">Reports</Button>
              </Link>
              <div>
                <Select
                  size="large"
                  placeholder="Select Crime Type"
                  style={{ width: "100%", textAlign: "left" }}
                  onChange={onChangeCrimeType}
                >
                  <Option value="ARSON">
                  <img src="/arson.jpg" alt="" style={{width:"30px", height:"20px", marginRight:"5px"}}/>
                  Arson</Option>
                  <Option value="BURGLARY">
                  <img src="/burglary.png" alt="" style={{width:"30px", height:"20px", marginRight:"5px"}}/>
                  Burglary</Option>
                  <Option value="DRUG_ALCOHAL"> <img src="/drugsalcohol.jpg" alt="" style={{width:"30px", height:"20px", marginRight:"5px"}}/>Drugs Alcohol</Option>
                  <Option value="ROBBERY">  <img src="/robbery.png" alt="" style={{width:"30px", height:"20px", marginRight:"5px"}}/>Robbery</Option>
                  <Option value="ASSAULT">  <img src="/assaullt.png" alt="" style={{width:"30px", height:"20px", marginRight:"5px"}}/>Assault</Option>
                  <Option value="DISTRIBUTING_THE_PEACE">
                  <img src="/disturbingpeace.jpg" alt="" style={{width:"30px", height:"20px", marginRight:"5px"}}/> Disturbing the Peace
                  </Option>
                  <Option value="VOILATIONS_THEFT"> <img src="/theft.png" alt="" style={{width:"30px", height:"20px", marginRight:"5px"}}/> Violations Theft</Option>
                  <Option value="SEX_CRIME">  <img src="/sexcrime.png" alt="" style={{width:"30px", height:"20px", marginRight:"5px"}}/>Sex Crime</Option>
                </Select>
                <Select
                  size="large"
                  placeholder="Closest Police Station"
                  style={{
                    width: "100%",
                    textAlign: "left",
                    margin: "30px 0px",
                  }}
                >
                  <Option value="1">1</Option>
                </Select>
              </div>
            </div>
          </Col>
        </Row>
      </Spin>
    </div>
  );
};

export default Dashboard;
