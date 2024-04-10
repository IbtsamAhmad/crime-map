import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar";
const How = () => {
  return (
    <>
      <Navbar />
      <div className="howPage-container">
        <div className="page-header">
          <h1>This is what we'll create for you</h1>
          <h2>How It Works</h2>
          <a href="/login?type=signup">Try pufferfish.ai</a>
        </div>
        <div className="magic-block-down" />

        {/* <div className="div-block"></div> */}
        <div className="example-container">
          <div className="example-content-container">
            <Row>
              <Col lg={6} md={6} sm={12} className="example-Col">
                <h1>An example of what we'll craft for you</h1>
                <div className="example-list">
                  <p>
                    <span>1</span>
                    We'll need some information and the more the better
                  </p>
                  <p>
                    <span>2</span>
                    About you
                  </p>
                  <p>
                    <span>3</span>
                    The job description
                  </p>
                </div>
                <a href="/">Try pufferfish.ai</a>
              </Col>

              <Col lg={6} md={6} sm={12} className="example-quote">
                <h1>
                  <span>Example</span>Cover Letter
                </h1>
                <blockquote>
                  Dear Melissa,
                  <br />
                  <br />I am excited to apply for the position of Full Stack,
                  Front End Lead Software Developer at S&P Global. I have been
                  working in full-stack development since 2001 and have
                  extensive line management and Agile experience. My experience
                  with React, Laravel, Node.js, NestJS, MySQL, Angular, and
                  Cordova, as well as my ability to keep up with the latest
                  technology while maintaining optimal customer experience make
                  me an ideal candidate for this role.
                  <br />
                  <br />I am confident that my experience and skills make me an
                  ideal candidate for this position. I am an excellent problem
                  solver, able to provide detailed specifications for proposed
                  solutions and account for possible project challenges and
                  constraints. I also have strong project management and
                  leadership skills that will help me effectively monitor
                  progress of initiatives.
                  <br />
                  <br />
                  I am also excited to learn more about the work culture at S&P
                  Global, and I am open to discussing flexible working schedules
                  and the possibility of remote work. I look forward to further
                  discussing this role and how I can contribute to the success
                  of the organization.
                  <br />
                  <br />
                  Sincerely,
                  <br />
                  <br />
                  Figrin D'an
                </blockquote>
              </Col>
            </Row>
          </div>
        </div>
        <div className="magic-block" />
        <div className="magic-container">
          <h1>So, how do we make the magic happen?</h1>
          <p>
            Here, you will find a brief step-by-step guide on how to use our
            AI-powered cover letter generator to create a highly personalized
            and professional cover letter for your job application.
          </p>
        </div>
        <div className="magic-block-down" />
        <div className="about-content-container">
          <Row style={{ alignItems: "center" }} className="about-container">
            <Col lg={6} md={12} sm={12}>
              <div className="about-colOne">
                <h1>Step 1: About You</h1>
                <div className="example-list">
                  <p>
                    <span>1</span>
                    Let us know about you so we can personalize your letter
                  </p>
                  <p>
                    <span>2</span>
                    Qualifications
                  </p>
                  <p>
                    <span>3</span>
                    Experience
                  </p>
                  <p>
                    <span>4</span>
                    Skills
                  </p>
                </div>
                <a href="/">Try pufferfish.ai</a>
              </div>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <div className="about-colTwo">
                <img src="/assets/11.png" alt="aboutPage" />
              </div>
            </Col>
          </Row>
        </div>

        <div className="about-content-container">
          <Row style={{ alignItems: "center" }} className="about-container">
            <Col lg={6} md={12} sm={12}>
              <div className="about-colOne">
                <h1>Step 2: Job Description</h1>
                <div className="example-list">
                  <p>
                    <span>1</span>
                    Let us know about the job you're applying for
                  </p>
                  <p>
                    <span>2</span>
                    Requirements
                  </p>
                  <p>
                    <span>3</span>
                    Responsibilities
                  </p>
                  <p>
                    <span>4</span>
                    Copy & paste from LinkedIn, Glassdoor, etc
                  </p>
                </div>
                <a href="/">Try pufferfish.ai</a>
              </div>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <div className="about-colTwo">
                <img src="/assets/description.png" alt="aboutPage" />
              </div>
            </Col>
          </Row>
        </div>

        <div className="about-content-container">
          <Row style={{ alignItems: "center" }} className="about-container">
            <Col lg={6} md={12} sm={12}>
              <div className="about-colOne">
                <h1>Step 3: The Magic</h1>
                <div className="example-list">
                  <p>
                    <span>1</span>
                    We employ the best highly customized AI to craft your cover
                    letter
                  </p>
                </div>
                <a href="/">Try pufferfish.ai</a>
              </div>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <div className="about-colTwo">
                <img src="/assets/Magic.png" alt="aboutPage" />
              </div>
            </Col>
          </Row>
        </div>

        <div className="about-content-container">
          <Row style={{ alignItems: "center" }} className="about-container">
            <Col lg={6} md={12} sm={12}>
              <div className="about-colOne">
                <h1>Step 4: Your cover letter</h1>
                <div className="example-list">
                  <p>
                    <span>1</span>
                    Personalized to you and the job description
                  </p>
                  <p>
                    <span>2</span>A great introduction showing why you're
                    perfect for the job
                  </p>
                  <p>
                    <span>3</span>
                    Beautifully crafted blend of you and the job description
                  </p>
                  <p>
                    <span>4</span>A call to action for the employer
                  </p>
                </div>
                <a href="/">Try pufferfish.ai</a>
              </div>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <div className="about-colTwo">
                <img src="/assets/aboutPage.png" alt="aboutPage" />
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default How;
