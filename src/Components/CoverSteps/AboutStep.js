import React, { useState} from "react";
import { Form, Button, Row, Col, Tabs, Tab } from "react-bootstrap";
const PageOne = ({ onButtonClick }) => {
  const [numCount,setNumCount] = useState(0);

  const aboutHandler = (e) =>{
    setValue(e.target.value);
   setNumCount(e.target.value.length)

  }

    const textRef = React.useRef();
    const [value, setValue] = React.useState();

  React.useEffect(() => {
    if (textRef && textRef.current) {
      textRef.current.style.height = "0px";
      const taHeight = textRef.current.scrollHeight;
      textRef.current.style.height = taHeight + "px";
    }
  }, [value]);



  return (
    <section className="aboutCover-container">
      <h2>About You</h2>

      <Form className="about-form">
        <div className="description-list">
          <h3>Thank you for chossing pufferfish.ai</h3>
          <ul>
            <li>
              <img src="/assets/list.png" alt="list" />
              Let us know about you so we can personalize your letter
            </li>
            <li>
              {" "}
              <img src="/assets/list.png" alt="list" />
              Requirements
            </li>
            <li>
              {" "}
              <img src="/assets/list.png" alt="list" />
              Qualifications
            </li>
            <li>
              {" "}
              <img src="/assets/list.png" alt="list" />
              Experience
            </li>
            <li>
              {" "}
              <img src="/assets/list.png" alt="list" />
              Skills
            </li>
          </ul>
          <p>Don't show this message again</p>
        </div>
        <Form.Group className="aboutName" controlId="formBasicEmail">
          <Form.Label>A brief introduction about you</Form.Label>
          <Form.Control
            ref={textRef}
            maxLength={1000}
            required
            as="textarea"
            placeholder=""
            defaultValue=""
            onChange={aboutHandler}
            contentEditable
            //   className="profile-input"
          />
        </Form.Group>
        <div className="textCount">{numCount} of 1,000</div>
        <Form.Group
          className=""
          controlId="formBasicEmail"
          onClick={() => onButtonClick("pagetwo")}
        >
          <Button variant="primary" type="submit" className="about-btn">
            Next
          </Button>
        </Form.Group>
      </Form>
    </section>
  );
};

export default PageOne;
