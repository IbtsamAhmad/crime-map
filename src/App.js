import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./Components/Header/Header.jsx";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./app.scss";
import { ConfigProvider } from "antd";
import Report from "./pages/Report.jsx";
import Home from "./pages/Home.jsx";
import Reports from "./pages/Reports.jsx";

function App() {
  return (
    <>
      <Router>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#2D5B7C",
              borderRadius: 4,
            },
            components: {
              Radio: {
                buttonSolidCheckedColor: "#2D5B7C",
                buttonCheckedBg: "#2D5B7C",
              },
              Button: {
                colorTextLightSolid: "#fff",
              },
              Tag: {
                defaultColor: "#2D5B7C",
                defaultBg: "#2D5B7C",
              },
            },
          }}
        >
          <div className="container">
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/report" element={<Report />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </div>
        </ConfigProvider>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;


{/* <LoadScript googleMapsApiKey="AIzaSyCTEWtP6KeqpC0-FWrdcfqd0r5_fY02oUY"></LoadScript> */}
