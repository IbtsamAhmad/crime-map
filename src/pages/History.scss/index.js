import React from "react";
import AuthNavbar from "../../components/Navbar/AuthNavbar";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import Footer from "../../components/Footer";
import Modal from "react-bootstrap/Modal";

const History = () => {
  const [modalShow, setModalShow] = React.useState(false);
function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body className="historyModal-container">
        <h3>Cover Letter Details</h3>
        <p>
          You are currently viewing the summary of your info, the job
          description and the cover letter that our AI has generated for you.
        </p>
        <div className="historyLetter-container">
          <h2>About You</h2>
          <p>student</p>
          <h1>Job Description</h1>
          <p>software</p>
          <h1>Cover Letter</h1>
          <div>
            Dear [Hiring Manager],
            <br />I am writing in response to the position of software engineer
            at your company. My name is Ibtsam Ahmad and I am a student
            currently studying for a degree in software engineering.
            <br />
            <br />
            Given my studies, I have a sound understanding of the software
            engineering industry and have acquired a range of skills in software
            development, coding, and testing. I have a passion for learning new
            technologies and have a keen drive to create efficient solutions to
            complex problems. I have strong problem-solving abilities, a good
            eye for detail, and excellent communication skills.
            <br />
            <br />I am confident that I possess the necessary skills and
            knowledge for the role of software engineer and am eager to
            demonstrate my capabilities. I am also excited at the opportunity to
            work with a world-class team at your company.
            <br />
            <br />I would be delighted to discuss the position further at your
            convenience and demonstrate how I could be an asset to your team.
            Please feel free to contact me at your earliest convenience.
            <br />
            <br />
            Thank you for your time and consideration.
            <br />
            <br />
            Sincerely,
            <br />
            <br />
            Ibtsam Ahmad
          </div>
        </div>
        <Button className="modal-close-btn" onClick={() => setModalShow(false)}>
          Close
        </Button>
      </Modal.Body>

      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
}

const showModal = (e) =>{
  e.preventDefault();
  console.log("showw Modal")
  setModalShow(true);

}
  return (
    <>
      <AuthNavbar />
      <div className="history-page-container">
        <div className="history-header">
          <h1>Cover Letter History</h1>
          <p>
            View and recover all of your previously generated cover letters.
          </p>
        </div>
        <div className="history-content-container">
          <h2>History</h2>
          <p>4 results</p>
          <div className="history-previous-lists">
            <div className="history-list-header">
              <h2>Date Written</h2>
              <h3>Cover Letter Summary</h3>
            </div>
            <div className="previous-list">
              <div className="dates-col">
                <p>03 Mar 2023 00:04</p>
              </div>
              <div className="history-list-col">
                <p>
                  1.The job is for a software engineer
                  <br />
                  2.My role will be to join a team in creating innovative
                  software solutions
                  <br />
                  3.The responsibilities are software development, design,
                  implementation, testing, and debugging
                  <br />
                  4.The ideal candidate has a deep understanding of the software
                  development process, coding fundamentals, object-oriented
                  programming, distributed computing, and data structures
                  <br />
                  5.The position requires experience in software engineering
                </p>
              </div>
              <div>
                <OverlayTrigger
                  placement="bottom"
                  trigger="click"
                  // trigger="focus"
                  overlay={
                    <Popover title="Popover bottom" onClick={showModal}>
                      <div className="list-popContent">
                        <p>View</p>
                      </div>
                    </Popover>
                  }
                >
                  <Button className="list-popOver">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      class="feather feather-more-vertical"
                      color="rgba(107, 114, 128, 1)"
                    >
                      <circle cx="12" cy="12" r="1"></circle>
                      <circle cx="12" cy="5" r="1"></circle>
                      <circle cx="12" cy="19" r="1"></circle>
                    </svg>
                  </Button>
                </OverlayTrigger>
              </div>
            </div>
            <div className="previous-list">
              <div className="dates-col">
                <p>03 Mar 2023 00:04</p>
              </div>
              <div className="history-list-col">
                <p>
                  1.The job is for a software Developer
                  <br />
                  2.My role will be to join a team in creating innovative
                  software solutions
                  <br />
                  3.The responsibilities are software development, design,
                  implementation, testing, and debugging
                  <br />
                  4.The ideal candidate has a deep understanding of the software
                  development process, coding fundamentals, object-oriented
                  programming, distributed computing, and data structures
                  <br />
                  5.The position requires experience in software engineering
                </p>
              </div>
              <div>
                <OverlayTrigger
                  placement="bottom"
                  // trigger="focus"
                  trigger="click"
                  overlay={
                    <Popover title="Popover bottom" onClick={showModal}>
                      <div className="list-popContent">
                        <p onClick={() => setModalShow(true)}>View</p>
                      </div>
                    </Popover>
                  }
                >
                  <Button className="list-popOver">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      class="feather feather-more-vertical"
                      color="rgba(107, 114, 128, 1)"
                    >
                      <circle cx="12" cy="12" r="1"></circle>
                      <circle cx="12" cy="5" r="1"></circle>
                      <circle cx="12" cy="19" r="1"></circle>
                    </svg>
                  </Button>
                </OverlayTrigger>
              </div>
            </div>
            <div className="previous-list">
              <div className="dates-col">
                <p>03 Mar 2023 00:04</p>
              </div>
              <div className="history-list-col">
                <p>
                  1.The job is for a software engineer
                  <br />
                  2.My role will be to join a team in creating innovative
                  software solutions
                  <br />
                  3.The responsibilities are software development, design,
                  implementation, testing, and debugging
                  <br />
                  4.The ideal candidate has a deep understanding of the software
                  development process, coding fundamentals, object-oriented
                  programming, distributed computing, and data structures
                  <br />
                  5.The position requires experience in software engineering
                </p>
              </div>
              <div>
                <OverlayTrigger
                  placement="bottom"
                  trigger="click"
                  // show={true}
                  overlay={
                    <Popover title="Popover bottom" onClick={showModal}>
                      <div className="list-popContent">
                        <p>View</p>
                      </div>
                    </Popover>
                  }
                >
                  <Button className="list-popOver">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      class="feather feather-more-vertical"
                      color="rgba(107, 114, 128, 1)"
                    >
                      <circle cx="12" cy="12" r="1"></circle>
                      <circle cx="12" cy="5" r="1"></circle>
                      <circle cx="12" cy="19" r="1"></circle>
                    </svg>
                  </Button>
                </OverlayTrigger>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <Footer />
    </>
  );
};

export default History;
