import { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

const Login = () => {
   const queryParameters = new URLSearchParams(window.location.search);
    const type = queryParameters.get("type");
  const [loginDetail, setLoginDetail] = useState({
    username: "",
    password: "",
  });
  const [signupDetail, setSignupDetail] = useState({
    username: "",
    password: "",
  });
  const [resetDetail, setResetDetail] = useState({
    username: "",
  });
  const [loginChecked, setLoginChecked] = useState(true);
  const [signupChecked, setSignupChecked] = useState(true);
  const [signupForm, setSignupForm] = useState(type === "login" ? false : true);
  const [resetForm, setResetForm] = useState(false);
  const [resetBtnDisable,setResetBtnDisable] = useState(true)

  const onChangeReset = (e) => {
          const emailRegex =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const emailTest = emailRegex.test(e.target.value);

    if (emailTest) {
        setResetBtnDisable(false)
      setResetDetail({ ...resetDetail, [e.target.name]: e.target.value });
    }

  };

  const onSubmitReset = (event) => {
    event.preventDefault();
    console.log("resetDetail", resetDetail);
  };

  const onSubmitLogin = (event) => {
    event.preventDefault();
    console.log("loginDetail", loginDetail);
  };
  const onSubmitSignUp = (event) => {
    event.preventDefault();
    console.log("signupDetail", signupDetail);
  };

  const onChangeLogin = (e) => {
    setLoginDetail({ ...loginDetail, [e.target.name]: e.target.value });
  };

  const onChangeSignup = (e) => {
    setSignupDetail({ ...signupDetail, [e.target.name]: e.target.value });
  };

  const onChangeCheck = () => {
    setLoginChecked(!loginChecked);
  };
  const onChangeSignCheck = () => {
    setSignupChecked(!signupChecked);
  };

  return (
    <div className="login-container">
      <Row>
        <Col sm={12} lg={6} md={12}>
          <div className="loginColOne-content">
            <a href="/">
              <img src="/assets/Logo.png" alt="logo" className="logo" />
            </a>
            {signupForm ? (
              <Form
                className="login-form"
                validate="true"
                onSubmit={onSubmitSignUp}
              >
                <h1>Sign up</h1>
                <Button variant="primary" className="gmail-btn">
                  Sign up with Gmail
                </Button>
                <div className="or-container">
                  <div className="line" />
                  <p>or</p>
                </div>
                <Form.Group className="" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    value={signupDetail.username}
                    required
                    onChange={onChangeSignup}
                    name="username"
                  />
                </Form.Group>
                <Form.Group
                  className="login-label-two"
                  controlId="formBasicPassword"
                >
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    value={signupDetail.password}
                    minLength="8"
                    maxLength="12"
                    required
                    name="password"
                    onChange={onChangeSignup}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3 forgot-row"
                  controlId="formBasicCheckbox"
                >
                  <Form.Check
                    onChange={onChangeSignCheck}
                    checked={signupChecked}
                    type="checkbox"
                    label={
                      <span>
                        I agree to the{" "}
                        <span className="terms">Terms of Service </span>
                        and
                        <span className="terms"> Privacy Policy</span>
                      </span>
                    }
                  />
                </Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  className="login-in-btn"
                  // style={{marginTop:"7px"}}
                >
                  Create Account
                </Button>
                <div className="login-footer">
                  <span>Have an account? </span>
                  <span
                    onClick={() => setSignupForm(false)}
                    className="signup-two"
                  >
                    Log In
                  </span>
                </div>
              </Form>
            ) : resetForm ? (
              <Form
                className="login-form"
                validate="true"
                onSubmit={onSubmitReset}
              >
                <h1>Reset password</h1>
                <h2>
                  Enter the email address associated with your account, and
                  we'll email you a link to reset your password.
                </h2>
                <Form.Group className="" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    value={resetDetail.username}
                    required
                    onChange={onChangeReset}
                    name="username"
                  />
                </Form.Group>
                <div className="reset-footer">
                  <Button
                    type="submit"
                    className="reset-cancel-btn"
                    onClick={() => {
                      setResetForm(false);
                      setSignupForm(true);
                    }}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    className={
                      resetBtnDisable ? "reset-cancel-btn" : "reset-btn"
                    }
                    disabled={resetBtnDisable}
                  >
                    Reset Password
                  </Button>
                </div>
              </Form>
            ) : (
              <Form
                className="login-form"
                validate="true"
                onSubmit={onSubmitLogin}
              >
                <h1>Log in</h1>
                <Button variant="primary" className="gmail-btn">
                  Log in with Gmail
                </Button>
                <div className="or-container">
                  <div className="line" />
                  <p>or</p>
                </div>
                <Form.Group className="" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    value={loginDetail.username}
                    required
                    onChange={onChangeLogin}
                    name="username"
                  />
                </Form.Group>
                <Form.Group
                  className="login-label-two"
                  controlId="formBasicPassword"
                >
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    value={loginDetail.password}
                    minLength="8"
                    maxLength="12"
                    required
                    name="password"
                    onChange={onChangeLogin}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3 forgot-row"
                  controlId="formBasicCheckbox"
                >
                  <Form.Check
                    onChange={onChangeCheck}
                    checked={loginChecked}
                    type="checkbox"
                    label="Remember me"
                  />
                  <Button
                    className="forgot"
                    onClick={() => {
                      console.log("ghererre");
                      setSignupForm(false);
                      setResetForm(true);
                    }}
                  >
                    Forgot password?
                  </Button>
                </Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  className="login-in-btn"
                >
                  Log in
                </Button>
                <div className="login-footer">
                  <span>Don't have an account? </span>
                  <span
                    onClick={() => setSignupForm(true)}
                    className="signup-two"
                  >
                    Sign Up
                  </span>
                </div>
              </Form>
            )}
          </div>
        </Col>
        <Col
          sm={12}
          lg={6}
          md={6}
          className="login-colTwo d-lg-flex d-md-none d-sm-none"
        >
          <div className="loginColTwo-content">
            <h2>Crafting cover letters that get you noticed</h2>
            <p>
              Unlock the power of AI to write customized email cover letters
              tailored to your specific job application. Let our algorithm craft
              the perfect letter to help you stand out and land your dream job.
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
