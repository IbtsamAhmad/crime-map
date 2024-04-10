import { Card, Row, Col, Progress } from "antd";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const Reports = () => {
  const twoColors = {
    "0%": "#1F3D53EE",
    "100%": "#ADEFD1FF",
  };

  const data = {
    labels: ["Area 51", "DownTown", "Street 5", "Block D"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2],
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
    labels: ["Theft", "Arson", "Drugs", "Robbery"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2],
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
      <h1>User Registration</h1>
      <Row gutter={[32, 32]}>
        <Col lg={8}>
          <Card title="In last 24 Hours" hoverable>
            <Progress
              type="circle"
              percent={90}
              strokeColor={twoColors}
              format={(percent) => `${percent} Users`}
            />
          </Card>
        </Col>
        <Col lg={8}>
          <Card title="In last Week" hoverable>
            <Progress
              type="circle"
              percent={50}
              strokeColor={twoColors}
              format={(percent) => `${percent} Users`}
            />
          </Card>
        </Col>
        <Col lg={8}>
          <Card title="All Time" hoverable>
            <Progress
              type="circle"
              percent={20}
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
    </div>
  );
};

export default Reports;
