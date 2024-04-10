import React from 'react'

import AuthNavbar from "../../components/Navbar/AuthNavbar";
import Footer from "../../components/Footer";
import CoverSteps from "../../components/CoverSteps";
import { Form, Button, Row, Col, Tabs, Tab } from "react-bootstrap";
const CoverLetter = () => {
  return (
    <>
      <AuthNavbar />
      <div className="cover-letter-container">
        <div className="cover-heading-container">
          <div className="cover-heading-content">
            <h1>Write my cover letter for me</h1>
            <h2>
              Unleash the power of our awe-inspiring AI writer and watch as it
              crafts a masterfully tailored cover letter or email, effortlessly
              weaving together your personal introduction and the job
              description of your desired role to create the ultimate pitch for
              your dream job!
            </h2>
          </div>
        </div>
        <CoverSteps />
      </div>
      <Footer />
    </>
  );
}

export default CoverLetter