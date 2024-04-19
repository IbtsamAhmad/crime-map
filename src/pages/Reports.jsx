import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Row, Col, Progress , Spin} from "antd";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { baseUrl } from "../constants/contants";


ChartJS.register(ArcElement, Tooltip, Legend);

const Reports = () => {
  const [loading, setLoading] = useState(false);
  const [totalUsers,setTotalUser] = useState(0)
  const [dayUsers,setDayUsers] = useState(0)
  const [weekUsers,setWeekUsers] = useState(0)
  const [crimeTypes, setCrimeTypes] = useState({
    labels: ["Theft", "Arson", "Drugs", "Robbery"],
    data: []
  })
  const [usersData, setUsersData] = useState({
    labels: ["userOne", "userTwo"],
    data: []
  })


  useEffect(() => {
      (async () => {
        try {
          setLoading(true);
          const token = localStorage.getItem('token'); // Retrieve token from localStorage
          const allUserUrl = baseUrl + 'users/get/all';
          const dayUserUrl = baseUrl + 'users/get/twenty_four_hour';
          const weekUserUrl = baseUrl + 'users/get/last_week';
          const crimeTypesUrl = baseUrl + 'crime/type/count';
          const userEngagementUrl = baseUrl + 'crime/user/engagement';


          const allResponse = await axios.get(allUserUrl, {
            headers: {
              Authorization: `Bearer ${token}` 
            }
          });

          const dayResponse = await axios.get(dayUserUrl, {
            headers: {
              Authorization: `Bearer ${token}` 
            }
          });

          const weekResponse = await axios.get(weekUserUrl, {
            headers: {
              Authorization: `Bearer ${token}` 
            }
          });

          const crimeTypeResponse = await axios.get(crimeTypesUrl, {
            headers: {
              Authorization: `Bearer ${token}` 
            }
          });

          const userEngagementResponse = await axios.get(userEngagementUrl, {
            headers: {
              Authorization: `Bearer ${token}` 
            }
          });

          if (userEngagementResponse) {
            console.log("userEngagementResponse", userEngagementResponse)
            const userData = userEngagementResponse.data.data;
            const userLabels = userData.map((user,i) => `User ${i+1}` );
            const userCountData = userData.map((user) =>user.count );
            setUsersData({
              labels: userLabels,
              data: userCountData
            })
          }


          if (crimeTypeResponse) {
            const crimeData = crimeTypeResponse.data.data;
            const labels = Object.keys(crimeData);
            const data = Object.values(crimeData);
            setCrimeTypes({
              labels: labels,
              data: data
            })
          }

          if (allResponse) {
            setTotalUser(allResponse?.data?.data?.length)
          }
          if (dayResponse) {
            setDayUsers(dayResponse?.data?.data?.length)
          }
          if (weekResponse) {
            setWeekUsers(weekResponse?.data?.data?.length)
          }
        } catch (error) {
          console.log("error", error);
        } finally {
          setLoading(false);
        }
      })();
    
  }, []);




  const twoColors = {
    "0%": "#1F3D53EE",
    "100%": "#ADEFD1FF",
  };

  const data = {
    labels: usersData.labels,
    datasets: [
      {
        label: "# of crimes",
        data: usersData.data,
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const dataTwo = {
    labels: crimeTypes.labels,
    datasets: [
      {
        label: "# of crimes",
        data: crimeTypes.data,
        backgroundColor: ["#336699", "#CC9933", "purple", "red"],
        borderColor: ["#336699", "#CC9933", "purple", "red"],
        borderWidth: 1,
      },
    ],
  };

  const pieOptions = {
    responsive: true,
    maintainAspectRatio: false,
    aspectRatio: 1,
    plugins: {
      legend: {
        display: true,
        position: "top", // Change legend position if needed
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <div className="reports-container">
    <Spin spinning={loading}>
    <h1>User Registration</h1>
    <Row gutter={[32, 32]}>
        <Col lg={8}>
          <Card title="In last 24 Hours" hoverable>
            <Progress
              type="circle"
              percent={dayUsers}
              strokeColor={twoColors}
              format={(percent) => `${percent} Users`}
            />
          </Card>
        </Col>
        <Col lg={8}>
          <Card title="In last Week" hoverable>
            <Progress
              type="circle"
              percent={weekUsers}
              strokeColor={twoColors}
              format={(percent) => `${percent} Users`}
            />
          </Card>
        </Col>
        <Col lg={8}>
          <Card title="All Time" hoverable>
            <Progress
              type="circle"
              percent={totalUsers}
              strokeColor={twoColors}
              format={(percent) => `${percent} Users`}
            />
          </Card>
        </Col>
      </Row>
      <h1 style={{ marginTop: "3rem" }}>Areas with most criminal activities</h1>

      <Row gutter={[32, 32]}>
        <Col lg={12}>
          <Card title="User Engagement" hoverable>
            <Pie data={data} width={300} height={300} options={pieOptions} />
          </Card>
        </Col>
        <Col lg={12}>
          <Card title="Crime Type Distribution" hoverable>
            <Pie data={dataTwo} width={300} height={300} options={pieOptions} />
          </Card>
        </Col>
      </Row>
    </Spin>

  
    </div>
  );
};

export default Reports;
