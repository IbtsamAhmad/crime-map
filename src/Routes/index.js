import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import AccountSettings from "../pages/AccountSetting";
import CoverLetter from "../pages/CoverLetter";
import Pricing from "../pages/Pricing";

import NoMatch from "../pages/NoMatch";
import How from "../pages/How";
import About from "../pages/About";
import History from "../pages/History.scss";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/how" element={<How />} />
          <Route path="/history" element={<History />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/createmycoverletter" element={<CoverLetter />} />
          <Route path="/account" element={<AccountSettings />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
