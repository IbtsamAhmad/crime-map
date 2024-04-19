import { useState, useEffect } from "react";
import { FaSignInAlt, FaSignOutAlt, FaUser, FaFile } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState("")
  const navigate = useNavigate();


  useEffect(() => {
    const token = localStorage.getItem("token");  
   const crimeMapUser = localStorage.getItem("crimeMapUser");
    if (token) {
      setIsLoggedIn(true);
      setUser(crimeMapUser)
    }
  }, []);





  const onLogout = () => {
  localStorage.removeItem("token");  
   localStorage.removeItem("crimeMapUser");
    navigate("/");
    window.location.reload()
  };


  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Crime Map</Link>
      </div>
      <ul>
        {isLoggedIn ? (
          <>
       
            <li>
              <Link to="/dashboard">
                <FaFile /> Crime Map
              </Link>
            </li>
            <li>
              <Link to="/reports">
                <FaFile /> Reports
              </Link>
            </li>

            <li>
              <Link to="/report">
                <FaFile /> Report a crime
              </Link>
            </li>
            <li>
       
              <button className="btn" onClick={onLogout}>
              <FaSignOutAlt /> ({user}) Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">
                <FaSignInAlt /> Login
              </Link>
            </li>
            <li>
              <Link to="/register">
                <FaUser /> Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </header>
  );
}

export default Header;
