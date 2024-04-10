import React from "react";
import Navbar from "../../components/Navbar";
import { Button, Carousel, Row, Col } from "react-bootstrap";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home-page-container">
        <div className="home-header">
          <h1>Crafting the perfect job application cover letter</h1>
          <h2>Powered by AI</h2>
          <a href="/login?type=signup">Try puffer fish.ai</a>
        </div>
        <div className="home-down-block" />
        <section className="create-container">
          <h1>What we'll create for you</h1>
          <h2>
            After entering information about both you and the job description
            you're applying for, we'll create the perfect cover letter for you.
          </h2>
          <div className="home-quote-container">
            <h1>
              <span>Example</span>Cover Letter
            </h1>
            <blockquote>
              Dear Melissa,
              <br />
              <br />I am excited to apply for the position of Full Stack, Front
              End Lead Software Developer at S&amp;P Global. I have been working
              in full-stack development since 2001 and have extensive line
              management and Agile experience. My experience with React,
              Laravel, Node.js, NestJS, MySQL, Angular, and Cordova, as well as
              my ability to keep up with the latest technology while maintaining
              optimal customer experience make me an ideal candidate for this
              role.
              <br />
              <br />I am confident that my experience and skills make me an
              ideal candidate for this position. I am an excellent problem
              solver, able to provide detailed specifications for proposed
              solutions and account for possible project challenges and
              constraints. I also have strong project management and leadership
              skills that will help me effectively monitor progress of
              initiatives.
              <br />
              <br />I am also excited to learn more about the work culture at
              S&amp;P Global, and I am open to discussing flexible working
              schedules and the possibility of remote work. I look forward to
              further discussing this role and how I can contribute to the
              success of the organization.
              <br />
              <br />
              Sincerely,
              <br />
              <br />
              Figrin D'an
            </blockquote>
          </div>
          <Button className="how-works-btn">HOW IT WORKS</Button>
        </section>
        <div className="offer-block-up" />
        <section className="offer-container">
          <div className="offer-content">
            <h1>What we offer</h1>
            <div className="offer-box">
              <h1>Personalized Cover Letters</h1>
              <p>
                We analyze your resume and create a cover letter that is
                tailored to the job position you are applying for, making it
                more likely to catch the employer's attention.
              </p>
            </div>
            <div className="offer-box">
              <h1>Keyword Optimization</h1>
              <p>
                We ensure that your cover letter contains the most relevant
                keywords, making it more likely to pass through tough scrutiny.
              </p>
            </div>
            <div className="offer-box">
              <h1>Professional Tone</h1>
              <p>
                We use sophisticated language processing algorithms to craft a
                cover letter that sounds professional and engaging, increasing
                your chances of getting an interview.
              </p>
            </div>
            <div className="offer-box">
              <h1>Time-Saving</h1>
              <p>
                We save you time by automating the cover letter writing process,
                eliminating the need for you to spend hours crafting them from
                scratch.
              </p>
            </div>
            <div className="offer-box">
              <h1>Accessible</h1>
              <p>
                We are accessible from anywhere, allowing you to create a cover
                letter on-the-go, whenever you need one.
              </p>
            </div>
          </div>
        </section>
        <div className="offer-block-down" />
        <div className="cover-image-container">
          <Carousel variant="dark">
            <Carousel.Item>
              <img className="" src="/assets/1.png" alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="" src="/assets/2.png" alt="Second slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="" src="/assets/3.png" alt="Third slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="" src="/assets/4.png" alt="Third slide" />
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="offer-block-up" style={{ marginTop: "-100px" }} />
        <div className="home-features-container">
          <h1>What everyone loves the most</h1>
          <p>
            These are the features that everyone <br /> loves the most
          </p>

          <Row className="home-features">
            <Col lg={4} sm={12}>
              <div className="feature">
                <img
                  src="https://uploads-ssl.webflow.com/63ea9a713821af92947d8fa7/63eb5468ae57fd5818454324_abs039.svg"
                  alt=""
                />
                <h1>Language Optimization</h1>
                <p>
                  Stand out above the rest and <br />
                  increase your chances{" "}
                </p>
              </div>
            </Col>
            <Col lg={4} sm={12}>
              <div className="feature">
                <img
                  src="https://uploads-ssl.webflow.com/63ea9a713821af92947d8fa7/63eb5516b58a5a49a6d13e73_cod005.svg"
                  alt=""
                />
                <h1>Saves Time</h1>
                <p>Automates a tedious task so you can apply for more jobs</p>
              </div>
            </Col>
            <Col lg={4} sm={12}>
              <div className="feature">
                <img
                  src="https://uploads-ssl.webflow.com/63ea9a713821af92947d8fa7/63eb548ea4e16494057b5c9e_fin010.svg"
                  alt=""
                />
                <h1>Improves Chances</h1>
                <p>
                  Vastly increases your chances of <br /> getting a job
                </p>
              </div>
            </Col>
          </Row>
        </div>
        <div className="offer-block-down" />

        <section className="home-free-container">
          <h1>Try us for free</h1>
          <h2>
            Unlock your potential and land your dream job with our AI-powered
            cover letter rewriting technology - the ultimate solution for
            crafting a top-notch cover letter!
          </h2>
          <a href="/">Try pufferfish.ai</a>
        </section>
        <div className="offer-block-up" />
        <section className="home-plans-container">
          <h1>Clear Pricing Makes It Easy</h1>
          <h2>Flexible plans for everyone</h2>
          <div className="home-plans-row">
            <div className="home-plan">
              <h1>Free Trial</h1>
              <h2>See what we can do</h2>
              <h3>
                <span>$</span>0<span className="spanTwo"> / 3 Credits</span>
              </h3>
              <ul>
                <li>
                  <div className="list-num">
                    <span>1</span>
                  </div>
                  3 free credits to start
                </li>
                <li>
                  <div className="list-num">
                    <span>2</span>
                  </div>
                  Instant access
                </li>
                <li>
                  <div className="list-num">
                    <span>3</span>
                  </div>
                  No commitment
                </li>
                <li>
                  <div className="list-num">
                    <span>4</span>
                  </div>
                  3 credits = 3 cover letters
                </li>
              </ul>
              <Button className="try-btn">Try pufferfish.ai</Button>
            </div>
            <div className="home-plan">
              <h1>10 Credits</h1>
              <h2>Essential bundle</h2>
              <h3>
                <span>$</span>5<span className="spanTwo"> / 10 Credits</span>
              </h3>
              <ul>
                <li>
                  <div className="list-num">
                    <span>1</span>
                  </div>
                  Affordable option
                </li>
                <li>
                  <div className="list-num">
                    <span>2</span>
                  </div>
                  Quick and simple
                </li>
                <li>
                  <div className="list-num">
                    <span>3</span>
                  </div>
                  Ideal for trial
                </li>
                <li>
                  <div className="list-num">
                    <span>4</span>
                  </div>
                  10 credits = 10 cover letters
                </li>
              </ul>
              <Button className="try-btn">Try pufferfish.ai</Button>
            </div>
            <div className="home-plan home-plan-three">
              <h1>50 Credits</h1>
              <h2>Job Seeker Deal</h2>
              <h3>
                <span>$</span>15<span className="spanTwo"> / 50 Credits</span>
              </h3>
              <ul>
                <li>
                  <div className="list-num">
                    <span>1</span>
                  </div>
                  Ideal for frequent users
                </li>
                <li>
                  <div className="list-num">
                    <span>2</span>
                  </div>
                  Optimal value proposition
                </li>
                <li>
                  <div className="list-num">
                    <span>3</span>
                  </div>
                  Cost effective
                </li>
                <li>
                  <div className="list-num">
                    <span>4</span>
                  </div>
                  50 credits = 50 cover letters
                </li>
              </ul>
              <Button className="try-btn">Try pufferfish.ai</Button>
            </div>
            <div className="home-plan">
              <h1>100 Credits</h1>
              <h2>Career Pro Package</h2>
              <h3>
                <span>$</span>25<span className="spanTwo"> / 100 Credits</span>
              </h3>
              <ul>
                <li>
                  <div className="list-num">
                    <span>1</span>
                  </div>
                  Find the best job
                </li>
                <li>
                  <div className="list-num">
                    <span>2</span>
                  </div>
                  Maximum convenience
                </li>
                <li>
                  <div className="list-num">
                    <span>3</span>
                  </div>
                  Unbeatable savings
                </li>
                <li>
                  <div className="list-num">
                    <span>4</span>
                  </div>
                  100 credits = 100 cover letters
                </li>
              </ul>
              <Button className="try-btn">Try pufferfish.ai</Button>
            </div>
          </div>
        </section>
        <div className="offer-block-down" />
      </div>
      <Footer />
    </>
  );
};

export default Home;


