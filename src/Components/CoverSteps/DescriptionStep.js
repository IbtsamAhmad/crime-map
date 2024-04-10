import React, { useState } from "react";
import { Form, Button, Row, Col, Tabs, Tab } from "react-bootstrap";
const PageTwo = ({ onButtonClick }) => {

   const [numCount, setNumCount] = useState(0);

   const descriptionHandler = (e) => {
     setNumCount(e.target.value.length);
   };

  return (
    <section className="aboutCover-container">
      <h2>Job Description</h2>
      <Form className="about-form">
        <div className="description-list">
          <h3>The Job Description</h3>
          <ul>
            <li>
              <img src="/assets/list.png" alt="list" />
              Let us know about the job you're applying for
            </li>
            <li>
              {" "}
              <img src="/assets/list.png" alt="list" />
              Requirements
            </li>
            <li>
              {" "}
              <img src="/assets/list.png" alt="list" />
              Let us know about the job you're applying for
            </li>
            <li>
              {" "}
              <img src="/assets/list.png" alt="list" />
              Responsibilities
            </li>
            <li>
              {" "}
              <img src="/assets/list.png" alt="list" />
              Copy & paste from LinkedIn, Glassdoor, etc
            </li>
          </ul>
          <p>Don't show this message again</p>
        </div>
        <Form.Group className="aboutName" controlId="formBasicEmail">
          <Form.Label>The job description you're applying for</Form.Label>
          <Form.Control
            required
            as="textarea"
            placeholder=""
            defaultValue=""
            maxLength={4000}
            contentEditable
            onChange={descriptionHandler}
            //   className="profile-input"
          />
        </Form.Group>
        <div className="textCountTow">{numCount} of 4,000</div>
        <Form.Group className="description-buttons" controlId="formBasicEmail">
          <Button
            variant="primary"
            type="submit"
            className="description-btn"
            onClick={() => onButtonClick("pageone")}
          >
            Previous
          </Button>
          <Button
            variant="primary"
            type="submit"
            className="description-btn"
            onClick={() => onButtonClick("pagethree")}
          >
            Next
          </Button>
        </Form.Group>
      </Form>
    </section>
  );
};

export default PageTwo;
