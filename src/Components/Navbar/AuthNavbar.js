import React, { useState, useRef } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Overlay from "react-bootstrap/Overlay";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import menuItems from "./MenuItems";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const AuthNavbar = () => {
  const ref = useRef(null);
  const navigate = useNavigate();
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);

  const handlePop = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  return (
    <>
      <div className="authNavbar-container">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/">
            <img src="/assets/Logo.png" alt="navLogo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav
              className="me-auto"
              // activeKey={active}
              // onSelect={(selectedKey) => setActive(selectedKey)}
            >
              <Nav.Link href="/" eventKey="home">
                Home
              </Nav.Link>
              <Nav.Link href="/how" eventKey="how">
                How It Works
              </Nav.Link>
              <Nav.Link href="/pricing" eventKey="pricing">
                Pricing
              </Nav.Link>
              <Nav.Link href="/about" eventKey="about">
                About Us
              </Nav.Link>
              <Nav.Link href="/history" eventKey="history">
                History
              </Nav.Link>
              <div className="nav-buttons">
                <Button
                  className="nav-creditsBtn"
                  onClick={() => navigate("/pricing")}
                >
                  5 Credits Remaining
                </Button>
                <Button
                  className="nav-letterBtn"
                  onClick={() => navigate("/createmycoverletter")}
                >
                  Create Letter
                </Button>
              </div>
            </Nav>
          </Navbar.Collapse>
          <div ref={ref} className="overlay-container">
            <img
              src="/assets/Avatar.png"
              alt="profile"
              onClick={handlePop}
              id="pop1"
              className="nav-profile"
            />
            <Overlay
              show={show}
              target={target}
              placement="bottom"
              container={ref}
              containerPadding={20}
              rootClose={true}
              rootCloseEvent="mousedown"
              trigger="click"
            >
              <Popover id="popover-contained" target="pop1">
                <Popover.Body>
                  <div className="pop-div">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      color="rgba(107, 114, 128, 1)"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                    </svg>
                    <p>Admin</p>
                  </div>
                  <div className="pop-div">
                    <a href="/account?tab=profile">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        color="rgba(107, 114, 128, 1)"
                      >
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                      <p> My account</p>
                    </a>
                  </div>
                  <div className="pop-div">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      color="rgba(107, 114, 128, 1)"
                    >
                      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                      <polyline points="16 17 21 12 16 7"></polyline>
                      <line x1="21" y1="12" x2="9" y2="12"></line>
                    </svg>
                    <p>Logout</p>
                  </div>
                </Popover.Body>
              </Popover>
            </Overlay>
          </div>
        </Navbar>
      </div>
    </>
  );
};

export default AuthNavbar;
