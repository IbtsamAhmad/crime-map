import React from 'react'
import { Form, Button, Row, Col, Tabs, Tab } from "react-bootstrap";
const Letter = ({ onButtonClick }) => {
  return (
    <section className="aboutCover-container">
      <h2>Your Cover Letter</h2>
      <Form className="about-form">
        <div className="description-list">
          <h3>Congratulations on receiving your custom-made cover letter! </h3>
          <ul>
            <li>
              {" "}
              <img src="/assets/list.png" alt="list" />
              Personalized to you and the job description
            </li>
            <li>
              {" "}
              <img src="/assets/list.png" alt="list" />A great introduction
              showing why you're perfect for the job
            </li>
            <li>
              {" "}
              <img src="/assets/list.png" alt="list" />
              Let us know about the job you're applying for
            </li>
            <li>
              {" "}
              <img src="/assets/list.png" alt="list" />
              Beautifully crafted blend of you and the job description
            </li>
            <li>
              {" "}
              <img src="/assets/list.png" alt="list" />A call to action for the
              employer
            </li>
          </ul>
          <h3>
            Thank you for using our service, and we wish you the best of luck in
            your job search!
          </h3>
          <p>Don't show this message again</p>
        </div>
        <Form.Group className="aboutName" controlId="formBasicEmail">
          <Form.Label>Your cover letter</Form.Label>
          <Form.Control
            required
            as="textarea"
            placeholder=""
            defaultValue=""
            contentEditable
            //   className="profile-input"
          />
        </Form.Group>
        <Form.Group className="description-buttons" controlId="formBasicEmail">
          <Button
            variant="primary"
            type="submit"
            className="description-btn"
            onClick={() => onButtonClick("pageone")}
          >
            Restart
          </Button>
          <Button
            variant="primary"
            type="submit"
            className="description-btn"
            onClick={() => onButtonClick("pagethree")}
          >
            Save
          </Button>
        </Form.Group>
      </Form>
    </section>
  );
};

export default Letter