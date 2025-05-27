import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const ContactMe = () => {
  return (
    <section id="contact" className="contact-section">
      <Container>
        {/* Header */}
        <Row>
          <Col md={12} className="contact-header">
            <h1 className="section-header">
              <span className="purple">CONTACT</span> ME
            </h1>
            <p>
              I'm currently open for exciting opportunities! Let’s{" "}
              <span className="purple">connect</span> and talk about the next
              big thing!
            </p>
          </Col>
        </Row>

        {/* Social Icons */}
        <Row>
          <Col md={12} className="social-links">
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="mailto:ssrika21@asu.edu"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineMail /> {/* Email Icon */}
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sriranjan-s/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn /> {/* LinkedIn Icon */}
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://github.com/sriranjan06"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub /> {/* GitHub Icon */}
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactMe;
