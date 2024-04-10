import { FaSignInAlt, FaSignOutAlt, FaUser, FaFile } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const onLogout = () => {
    navigate("/");
  };
  const user = null;

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Crime Map 4</Link>
      </div>
      <ul>
        {user ? (
          <li>
            <button className="btn" onClick={onLogout}>
              <FaSignOutAlt /> Logout
            </button>
          </li>
        ) : (
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
