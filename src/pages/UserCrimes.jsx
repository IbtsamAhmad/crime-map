import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col, Button, Select, Spin, message, Collapse, Card } from "antd";

import { baseUrl } from "../constants/contants";
import { getIconUrl, removeUnderscore } from "../utils";

const { Panel } = Collapse;

const UserCrimes = () => {
    const [loading, setLoading] = useState(false);
    const [allCrimes, setAllCrimes] = useState([]);

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
               console.log("allCrimesData", allCrimesData);
              setAllCrimes(allCrimesData);
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

      const crimesByUser = {};

      allCrimes.forEach(crime => {
        if (!crimesByUser[crime.createdBy]) {
          crimesByUser[crime.createdBy] = [];
        }
        crimesByUser[crime.createdBy].push(crime);
      });

      const renderCrimesByUser = () => {
        return Object.entries(crimesByUser).map(([userId, userCrimes]) => (
          <Panel header={`User ID: ${userId}`} key={userId}>
            <Row gutter={[32,32]}>
              {userCrimes.map((crime, index) => (
                <Col key={index} lg={6}>
                <Card >
                <img src={getIconUrl(crime.type)} alt=""  style={{width:"30px", height:"30px"}}/>
                  <h2 className="station-info"> {removeUnderscore(crime.type)}</h2>
                  <p className="station-info">{crime.description}</p>
                  <p className="station-info">
                    {crime.date.split("T")[0]}
                  </p>
                </Card>
                </Col>
            
      
              ))}
            </Row>
          </Panel>
        ));
      };

  return (
    <div className="userCrimes-container">
    <Spin spinning={loading}>
    <Collapse accordion>
      {renderCrimesByUser()}
    </Collapse>
    </Spin>
  </div>
  )
}

export default UserCrimes