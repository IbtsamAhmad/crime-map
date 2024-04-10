import React from 'react'
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer";
const About = () => {
  return (
    <>
      <Navbar />
      <div className="home-page-container">
        <div className="home-header">
          <h1>How we got started</h1>
          <h2>About Us</h2>
          <a href="/">Try puffer fish.ai</a>
        </div>
        <div className="home-down-block" />
        <div className='home-description-container'>
         <div className='description-content'>
        <p>Our company specializes in using AI technology to generate personalized and effectivecover letters for job seekers, saving them time and increasing their chances of landing an interview.<br/><br/>We understand that the job application process can be time-consuming and tedious, that's why we developed a solution that saves you time by automating the cover letter writing process while also increasing your chances of landing an interview.<br/><br/>Our AI-powered system takes into consideration the job description and the a little information about you to tailor the perfect cover letter.<br/><br/>With our service, you can now focus on other important aspects of your application and leave the cover letter writing to us.</p>
         </div>
        </div>
        <section className="home-free-container">
          <h1>Try us for free</h1>
          <h2>
            Unlock your potential and land your dream job with our AI-powered
            cover letter rewriting technology - the ultimate solution for
            crafting a top-notch cover letter!
          </h2>
          <a href="/">Try puffer fish.ai</a>
        </section>
      </div>
      <Footer/>
    </>
  );
}

export default About