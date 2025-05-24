import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function About() {
  return (
    <section id="about" className="about-section">
      <Container>
        <h2 className="section-header">
          ABOUT<span className="purple"> ME</span>
        </h2>

        {/* About Me Content */}
        <Row className="about-content justify-content-center">
          <Col md={5} className="about-text">
            <p>
              I'm dedicated to building{" "}
              <b className="purple">innovative full-stack web applications</b>{" "}
              and <b className="purple">scalable systems</b> that solve complex,
              real-world challenges.
            </p>
          </Col>

          <Col md={5} className="about-text">
            <p>
              With experience as a Software Development Engineer and
              contributions to impactful projects, I specialize in designing
              robust solutions that seamlessly integrate{" "}
              <b className="purple">front-end interfaces</b> with efficient{" "}
              <b className="purple">back-end systems</b>.
            </p>
          </Col>

          <Col md={5} className="about-text">
            <p>
              My work is driven by a commitment to continuous improvement and a
              strong focus on <b className="purple">cloud technologies</b>,{" "}
              <b className="purple">automation</b>, and{" "}
              <b className="purple">scalable architecture</b>.
            </p>
          </Col>

          <Col md={5} className="about-text">
            <p>
              My goal is to leverage my skills to deliver transformative
              solutions, collaborate on innovative projects, and make a
              meaningful impact through technology.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
