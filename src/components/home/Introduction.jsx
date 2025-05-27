import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Type from "../animations/Typewriter";
import profilePic from "../../Assets/images/profilepicture.jpeg";

function Introduction() {
  return (
    <section id="introduction" className="intro-section">
      <Container>
        {/* Introduction Content */}
        <Container className="intro-content">
          <Row className="d-flex align-items-center justify-content-center flex-column flex-md-row flex-wrap">
            {/* LEFT COLUMN - Text */}
            <Col
              xs={12}
              md={12}
              lg={6}
              className="intro-header text-center text-lg-start"
            >
              <div className="intro-text-wrapper">
                <h4 className="heading">Hi there! I am</h4>
                <h2 className="heading-name">
                  <strong className="main-name">Sriranjan Srikanth</strong>
                </h2>
                <h5 className="intro-subtext">
                  and I am passionate about creating impactful software.
                </h5>

                {/* Typewriter Effect */}
                <div className="typewriter-container">
                  <Type />
                </div>
              </div>
            </Col>

            {/* RIGHT COLUMN - Profile Picture */}
            <Col xs={12} md={12} lg={6} className="profile-picture-container">
              <img src={profilePic} alt="Profile" className="profile-picture" />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Introduction;
