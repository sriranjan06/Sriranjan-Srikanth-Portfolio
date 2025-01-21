import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Type from "./Type";
import profilePic from "../../Assets/profilepicture.jpeg";
// import Tilt from "react-parallax-tilt";

// Social Media Icons
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home() {
  return (
    <>
      <section id="home">
        <Container fluid className="home-section">
          {/* Particles Effect */}
          <Particle />

          {/* Landing Page */}
          <Container className="home-content">
            <Row>
              {/* Left Column */}
              <Col md={6} className="home-header">
                <h4 style={{ paddingBottom: 15 }} className="heading">
                  Hi there! I am
                </h4>

                <h2 style={{ paddingBottom: 5 }} className="heading-name">
                  <strong className="main-name">Sriranjan Srikanth</strong>
                </h2>

                <h5
                  style={{
                    paddingTop: "15px", // Adds spacing above
                    fontStyle: "italic", // Makes the text italic
                    color: "white", // Text color (currently white, can be your accent color)
                    fontSize: "1.2rem", // Adjusts font size
                    fontWeight: "500", // Medium font weight
                    paddingLeft: "50px", // Corrected camelCase for padding left
                  }}
                >
                  and I am passionate about creating impactful software.
                </h5>

                {/* Typewriter Effect */}
                <div style={{ padding: 50, textAlign: "left" }}>
                  <Type />
                </div>
              </Col>

              {/* Profile Picture */}
              <Col
                md={6}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingBottom: 20,
                }}
              >
                <img
                  src={profilePic}
                  alt=" "
                  className="img-fluid"
                  style={{ maxHeight: "400px", borderRadius: "50%" }}
                />
              </Col>
            </Row>

            {/* About Me Description */}
            <Row id="about" className="home-about-description">
              <>{/* Empty fragment to logically separate sections */}</>
              <h1 style={{ fontSize: "2.6em" }}>
                ABOUT<span className="purple"> ME</span>
              </h1>
              <Col md={6}>
                <p className="home-about-body">
                  I'm dedicated to building{" "}
                  <b className="purple">
                    innovative full-stack web applications
                  </b>{" "}
                  and <b className="purple">scalable systems </b>
                  that solve complex, real-world challenges.
                  <br />
                  <br />
                  With experience as a Software Development Engineer and
                  contributions to impactful projects, I specialize in designing
                  robust solutions that seamlessly integrate{" "}
                  <b className="purple">front-end interfaces</b> with efficient
                  <b className="purple"> back-end systems</b>.
                </p>
              </Col>

              <Col md={6}>
                <p className="home-about-body">
                  My work is driven by a commitment to continuous improvement
                  and a strong focus on{" "}
                  <b className="purple">cloud technologies</b>,
                  <b className="purple"> automation</b>, and{" "}
                  <b className="purple">scalable architecture</b>.
                  <br />
                  <br />
                  My goal is to leverage my skills to deliver transformative
                  solutions, collaborate on innovative projects, and make a
                  meaningful impact through technology.
                </p>
              </Col>
            </Row>

            {/* Skills */}
            <Row className="home-about-description">
              <Col md={12}>
                <h2 style={{ fontSize: "2.6em", paddingBottom: "20px" }}>
                  TECHNICAL<span className="purple"> SKILLS </span>
                </h2>
                <p align="center">
                  <img
                    height="50"
                    src="/Assets/Icons/javascript.svg"
                    alt="JavaScript"
                    title="JavaScript"
                  />
                  &nbsp;
                  <img
                    height="50"
                    src="/Assets/Icons/typescript-icon.svg"
                    alt="TypeScript"
                    title="TypeScript"
                  />
                  &nbsp;
                  <img
                    height="50"
                    src="/Assets/Icons/java.svg"
                    alt="Java"
                    title="Java"
                  />
                  &nbsp;
                  <img
                    height="50"
                    src="/Assets/Icons/python.svg"
                    alt="Python"
                    title="Python"
                  />
                  &nbsp;
                  <img
                    height="50"
                    src="/Assets/Icons/mysql.svg"
                    alt="MySQL"
                    title="MySQL"
                  />
                  &nbsp;
                  <img
                    height="50"
                    src="/Assets/Icons/postgresql.svg"
                    alt="PostgreSQL"
                    title="PostgreSQL"
                  />
                  &nbsp;
                  <img
                    height="50"
                    src="/Assets/Icons/HTML5_logo_resized.svg"
                    alt="HTML5"
                    title="HTML5"
                  />
                  &nbsp;
                  <img
                    height="50"
                    src="/Assets/Icons/CSS3_logo_and_wordmark.svg"
                    alt="CSS3"
                    title="CSS3"
                  />
                  &nbsp;
                  <img
                    height="50"
                    src="/Assets/Icons/c.svg"
                    alt="C"
                    title="C"
                  />
                  &nbsp;
                  <img
                    height="50"
                    src="/Assets/Icons/file-type-cpp2.svg"
                    alt="C++"
                    title="C++"
                  />
                  &nbsp;
                  <img
                    height="50"
                    src="/Assets/Icons/file-type-reactjs.svg"
                    alt="React.js"
                    title="React.js"
                  />
                  &nbsp;
                  <img
                    height="50"
                    src="/Assets/Icons/redux-logo-svgrepo-com.svg"
                    alt="Redux"
                    title="Redux"
                  />
                  &nbsp;
                  <img
                    height="50"
                    src="/Assets/Icons/nextjs.svg"
                    alt="Next.js"
                    title="Next.js"
                    style={{ filter: "invert(1)" }}
                  />
                  &nbsp;
                  <img
                    height="50"
                    src="/Assets/Icons/Tailwind_CSS_Logo.svg"
                    alt="Tailwind CSS"
                    title="Tailwind CSS"
                  />
                  &nbsp;
                  <img
                    height="50"
                    src="/Assets/Icons/springio-ar21.svg"
                    alt="Spring Boot"
                    title="Spring Boot"
                  />
                  &nbsp;
                  <img
                    height="40"
                    src="/Assets/Icons/express.svg"
                    alt="Express.js"
                    title="Express.js"
                    style={{ filter: "invert(1)" }}
                  />
                  &nbsp;
                  <img
                    height="50"
                    src="/Assets/Icons/nodejs-icon.svg"
                    alt="Node.js"
                    title="Node.js"
                  />
                  &nbsp;
                  <img
                    height="50"
                    src="/Assets/Icons/file-type-mongo.svg"
                    alt="MongoDB"
                    title="MongoDB"
                  />
                  &nbsp;
                  <img
                    height="45"
                    src="/Assets/Icons/neo4j-icon.svg"
                    alt="Neo4j"
                    title="Neo4j"
                  />
                  &nbsp;
                  <img
                    height="45"
                    src="/Assets/Icons/Amazon_Web_Services_Logo.svg"
                    alt="AWS"
                    title="AWS"
                    style={{ filter: "invert(1)" }}
                  />
                  &nbsp;
                  <img
                    height="45"
                    src="/Assets/Icons/kubernetes-icon.svg"
                    alt="Kubernetes"
                    title="Kubernetes"
                  />
                  &nbsp;
                  <img
                    height="45"
                    src="/Assets/Icons/docker-svgrepo-com.svg"
                    alt="Docker"
                    title="Docker"
                  />
                  &nbsp;
                  <img
                    height="50"
                    src="/Assets/Icons/kafka.svg"
                    alt="Kafka"
                    title="Kafka"
                    style={{ filter: "invert(1)" }}
                  />
                  &nbsp;
                  <img
                    height="50"
                    src="/Assets/Icons/firebase.svg"
                    alt="Firebase"
                    title="Firebase"
                  />
                  &nbsp;
                  <img
                    height="45"
                    src="/Assets/Icons/npm.svg"
                    alt="NPM"
                    title="NPM"
                  />
                  &nbsp;
                  <img
                    height="50"
                    src="/Assets/Icons/git-icon.svg"
                    alt="Git"
                    title="Git"
                  />
                </p>
              </Col>
            </Row>
          </Container>
        </Container>

        {/* Contact */}
        <Container>
          <Row>
            <Col md={12} className="home-about-social">
              <h1>FIND ME ON</h1>
              <p>
                Feel free to <span className="purple">connect </span>with me
              </p>
              <ul className="home-about-social-links">
                <li className="social-icons">
                  {/* <a
                      href=""
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                    > */}
                  <AiFillGithub />
                  {/* </a> */}
                </li>
                <li className="social-icons">
                  {/* <a
                      href=""
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                    > */}
                  <FaLinkedinIn />
                  {/* </a> */}
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Home;
