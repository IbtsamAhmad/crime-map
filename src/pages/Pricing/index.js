import React, {useState} from "react";
import AuthNavbar from "../../components/Navbar/AuthNavbar";
import Navbar from "../../components/Navbar/index";
import Footer from "../../components/Footer";
import {Button}  from "react-bootstrap"
const Pricing = () => {
   const [authenticated,setAuthenticated] = useState(false);
  return (
    <>
      {!authenticated ? (
        <>
          <Navbar />
          <div className="home-page-container">
            <div className="home-header">
              <h1>Gift yourself the best opportunity you can</h1>
              <h2>Pricing</h2>
              <a href="/">TRY PUFFERFISH.AI</a>
            </div>
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
                    <span>$</span>5
                    <span className="spanTwo"> / 10 Credits</span>
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
                    <span>$</span>15
                    <span className="spanTwo"> / 50 Credits</span>
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
                    <span>$</span>25
                    <span className="spanTwo"> / 100 Credits</span>
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

            <section className="home-free-container">
              <h1>Try us for free</h1>
              <h2>
                Unlock your potential and land your dream job with our
                AI-powered cover letter rewriting technology - the ultimate
                solution for crafting a top-notch cover letter!
              </h2>
              <a href="/">TRY PUFFERFISH.AI</a>
            </section>
          </div>
          <Footer />
        </>
      ) : (
        <>
          <AuthNavbar />
          <div className="price-page-container">
            <h1>Supercharge your cover letters with AI</h1>
            <h2>Flexible plans for everyone.</h2>
            <div className="pricing-columns-container">
              <div className="pricing-column column-one">
                <h1>10 Credits</h1>
                <h2>Essential Bundle</h2>
                <h3>
                  <span>$</span>5<span className="spanTwo"> / 10 Credits</span>
                </h3>
                <Button className="top-up-btn">TOP-UP</Button>
                <ul>
                  <li>Affordable option</li>
                  <li>Quick and simple</li>
                  <li>Ideal for trial</li>
                </ul>
                <p>10 credits = 10 cover letters</p>
              </div>
              <div className="pricing-column column-two">
                <h1 className="colTwo-heading">25 Credits</h1>
                <h2>Job Seeker Deal</h2>
                <h3>
                  <span>$</span>10<span className="spanTwo"> / 25 Credits</span>
                </h3>
                <Button className="top-up-btn">TOP-UP</Button>
                <ul>
                  <li>Ideal for frequent users</li>
                  <li>Optimal value proposition</li>
                  <li>Cost-effective solution</li>
                </ul>
                <p>25 credits = 25 cover letters</p>
              </div>
              <div className="pricing-column column-three">
                <h1>50 Credits</h1>
                <h2>Career Pro Package</h2>
                <h3>
                  <span>$</span>20<span className="spanTwo"> / 50 Credits</span>
                </h3>
                <Button className="top-up-btn">TOP-UP</Button>
                <ul>
                  <li>Find the best job</li>
                  <li>Maximum convenience</li>
                  <li>Unbeatable savings</li>
                </ul>
                <p>50 credits = 50 cover letters</p>
              </div>
            </div>
            <div className="faq-container">
              <h1>Frequently Asked Questions</h1>

              <div className="question-container">
                <h1 className="question">
                  What type of cover letters can I generate on your website?
                </h1>
                <p className="answer">
                  You can generate cover letters for a wide range of industries
                  and job positions, including but not limited to, marketing,
                  finance, human resources, and engineering.
                </p>
              </div>
              <div className="question-container">
                <h1 className="question">How does the AI technology work??</h1>
                <p className="answer">
                  Our AI technology uses natural language processing and machine
                  learning algorithms to analyze a job description and a
                  candidate's information and generate a personalized and
                  professional cover letter tailored to the specific job they
                  are applying for.
                </p>
              </div>
              <div className="question-container">
                <h1 className="question">How do the credits work?</h1>
                <p className="answer">
                  You purchase a certain number of credits with each plan and
                  every time you create a new cover letter, you use 1 credit.
                  <br />
                  You can also add to your credits by inviting friends and
                  family to use pufferfish.ai and, for every successful signup,
                  you'll be awarded 1 FREE credit.
                </p>
              </div>
              <div className="question-container">
                <h1 className="question">
                  Can I make changes to my cover letter after it has been
                  generated?
                </h1>
                <p className="answer">
                  Yes, our plans offer real-time editing, so you can make
                  changes and edit your cover letter after you generate it and
                  save it for later use alongside your original AI generated
                  cover letter.
                </p>
              </div>
              <div className="question-container">
                <h1 className="question">
                  How long does it take to generate a cover letter?
                </h1>
                <p className="answer">
                  The time it takes to generate a cover letter will vary
                  depending on the complexity of the job and the amount of
                  information provided, but on average it takes about 5-10
                  seconds.
                </p>
              </div>
              <div className="question-container">
                <h1 className="question">
                  How much does it cost to use your service?
                </h1>
                <p className="answer">
                  Our plans vary in price depending on the number of single use
                  credits included, please check our pricing page for more
                  information.
                </p>
              </div>
              <div className="question-container">
                <h1 className="question">
                  Is my personal information safe on your website?
                </h1>
                <p className="answer">
                  Yes, we take the security and privacy of our customers'
                  information very seriously and use industry-standard
                  encryption to protect all data transmitted to and from our
                  website.
                </p>
              </div>
              <div className="question-container">
                <h1 className="question">
                  Can I generate a cover letter for multiple job positions?
                </h1>
                <p className="answer">
                  Yes, you can generate a cover letter for multiple job
                  positions using the single use credits included in your plan.
                </p>
              </div>
              <div className="question-container">
                <h1 className="question">
                  How can I contact customer support?
                </h1>
                <p className="answer">
                  You can contact our customer support team through our
                  website's contact page, or by emailing us at
                  support@pufferfish.ai. We're always happy to help.
                </p>
              </div>
            </div>
            <div className="support-container">
              <p>
                If you have additional questions regarding pricing, we are happy
                to answer them. Please write to{" "}
                <strong>support@pufferfish.ai</strong> and we will respond as
                quickly as we can.
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Pricing;
