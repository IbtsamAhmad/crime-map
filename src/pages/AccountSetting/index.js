import React, { useState } from "react";
import AuthNavbar from "../../components/Navbar/AuthNavbar";
import Footer from "../../components/Footer";
import ImageUpload from "../../components/ImageUpload";
import { Form,Button, Row, Col, Tabs, Tab } from "react-bootstrap";



const AccountSettings = () => {
  const queryParameters = new URLSearchParams(window.location.search);
  const tabKey = queryParameters.get("tab");
  console.log("tabKey", tabKey);
  const [key, setKey] = useState(tabKey);
  return (
    <>
      <AuthNavbar />
      <div className="account-setting-container">
        <div className="account-heading-container">
          <h1 className="account-heading">Account Settings</h1>
        </div>

        <div className="tabs-container">
          <Tabs
            defaultActiveKey="Account"
            id="uncontrolled-tab-example"
            className="mb-3"
            activeKey={key}
            onSelect={(k) => {
              setKey(k);
            }}
          >
            <Tab
              eventKey="profile"
              title={
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-user"
                    color="rgba(156, 163, 175, 1)"
                    pointer-events="none"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                  Profile
                </span>
              }
            >
              <div className="profile-content">
                <h1>Profile</h1>
                <p className="description">Update your information below</p>

                <Form className="profile-form">
                  <img
                    src="/assets/Avatar.png"
                    alt=""
                    className="profile-img"
                  />
                  {/* <ImageUpload /> */}
                  <Form.Group
                    className="profileName"
                    controlId="formBasicEmail"
                  >
                    <Form.Label>First name</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Enter first name"
                      defaultValue="John"
                      //   className="profile-input"
                    />
                  </Form.Group>
                  <Form.Group
                    className="profileName"
                    controlId="formBasicEmail"
                  >
                    <Form.Label>Last name</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Enter last name"
                      defaultValue="Doe"
                      className="profile-input"
                    />
                  </Form.Group>
                  <Form.Group className="profileBtn" controlId="formBasicEmail">
                    <Button
                      variant="primary"
                      type="submit"
                      className="profileSubmit"
                    >
                      Save Changes
                    </Button>
                  </Form.Group>
                </Form>
              </div>
            </Tab>
            <Tab
              eventKey="Account"
              title={
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-key"
                    color="rgba(156, 163, 175, 1)"
                    pointer-events="none"
                  >
                    <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path>
                  </svg>
                  Account{" "}
                </span>
              }
            >
              <div className="account-content">
                <h1>Account</h1>
                <p className="description">Manage your account details below</p>

                <Form className="account-form">
                  <Form.Group
                    as={Row}
                    className="email-group"
                    controlId="formPlaintextEmail"
                  >
                    <Form.Label column sm="2">
                      Email
                    </Form.Label>
                    <Col sm="10">
                      <Form.Control
                        plaintext
                        readOnly
                        defaultValue="email@example.com"
                      />
                    </Col>
                  </Form.Group>
                  <Form.Group
                    as={Row}
                    className="password-group"
                    controlId="formPlaintextPassword"
                  >
                    <Form.Label column sm="2">
                      Password
                    </Form.Label>
                    <Col sm="10">
                      <Form.Control
                        plaintext
                        readOnly
                        type="password"
                        placeholder="Password"
                        defaultValue="12345678910"
                      />
                    </Col>
                  </Form.Group>
                </Form>
              </div>
            </Tab>
            <div />
          </Tabs>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AccountSettings;
