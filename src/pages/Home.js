import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../components/animations/Particle";
import Type from "../components/animations/Type";
import profilePic from "../Assets/images/profilepicture.jpeg";

// Social Media Icons
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const projects = [
  {
    title: "Streamline Orchestrator",
    description:
      "Streamline Orchestrator is a containerized pipeline using Docker, Kubernetes, and Kafka for scalable, fault-tolerant real-time data streaming and Neo4j-based graph analytics, enabling efficient document stream processing for insights.",
    image: "/Assets/Projects/StreamlineOrchestrator.png",
    link: "https://github.com/sriranjan06/Streamline-Orchestrator",
  },
  {
    title: "Serenity Homes",
    description:
      "Serenity Homes is a full-stack web app for managing property listings, built with React, Vite, Tailwind CSS, and MongoDB. It features secure authentication with JWT and Google OAuth, Firebase-powered image uploads, responsive design, advanced search, and intuitive listing management.",
    image: "/Assets/Projects/SerenityHomes.jpg",
    link: "https://github.com/sriranjan06/Serenity-Homes",
  },
  {
    title: "Connectify",
    description:
      "Connectify is a full-stack social media app with a responsive Next.js and Tailwind CSS frontend, powered by a robust Spring Boot and MySQL backend. It features Google authentication, dynamic posts, and efficient state management with Redux Toolkit.",
    image: "/Assets/Projects/Connectify.jpg",
    link: "https://github.com/sriranjan06/Connectify-Social-Media-App",
  },
  {
    title: "Account Administration System",
    description:
      "A full stack web application with admin authentication implementation using Next.js, Spring Boot, MySQL, TailwindCSS, Headless UI, NextAuth.js, Spring Data JPA, Web and Test.",
    image: "/Assets/Projects/Account-Admin.jpg",
    link: "https://github.com/sriranjan06/Account-Administration-System",
  },
  {
    title: "Employee Management Service",
    description:
      "An employee management system built with React.js, Spring Boot, MySQL, and Tailwind CSS, simplifying employee record management with a user-friendly interface, robust backend, and reliable database support.",
    image: "/Assets/Projects/Employee-Management.jpg",
    link: "https://github.com/sriranjan06/Employee-Management-Service",
  },
  {
    title: "Malaria Diagnosis using Deep Learning",
    description:
      "This project uses machine learning models, including SVM, KNN, ANN, and CNN, to classify blood cell images as infected or uninfected with malaria, featuring detailed preprocessing and performance evaluation.",
    image: "/Assets/Projects/Malaria-Diagnosis.png",
    link: "https://github.com/sriranjan06/Diagnosis-of-Infectious-Diseases-using-Machine-Learning-Models",
  },
  {
    title: "Global Renewable Energy Trends",
    description:
      "This project examines global renewable energy trends, focusing on solar, wind, and hydroelectric sources. It explores growth patterns, regional disparities, and their impact on GDP, using visualizations to highlight challenges and opportunities in adoption.",
    image: "/Assets/Projects/GlobalEnergy.jpg",
    link: "https://github.com/sriranjan06/Global-Renewable-Energy-Trends",
  },
  {
    title: "Targeted Enrollment Analytics",
    description:
      "This project leverages U.S. Census data to identify demographic and socioeconomic factors influencing income levels, aiming to enhance university enrollment. Through data visualizations, it uncovers insights to develop targeted marketing profiles for individuals earning $50,000 or less annually.",
    image: "/Assets/Projects/TargetedEnrollment.jpg",
    link: "https://github.com/sriranjan06/Targeted-Enrollment-Analytics",
  },
];

function Home() {
  return (
    <>
      {/* Introduction */}
      <section id="introduction" className="intro-section">
        <Container>
          <Particle />

          {/* Introduction Content */}
          <Container className="intro-content">
            <Row className="d-flex align-items-center justify-content-center flex-column flex-md-row">
              {/* LEFT COLUMN - Text */}
              <Col md={6} className="intro-header text-center text-md-start">
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
              </Col>

              {/* RIGHT COLUMN - Profile Picture */}
              <Col md={6} className="profile-picture-container">
                <img
                  src={profilePic}
                  alt="Profile"
                  className="profile-picture"
                />
              </Col>
            </Row>
          </Container>
        </Container>
      </section>

      {/* About | Technical Skills */}
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
                and <b className="purple">scalable systems</b> that solve
                complex, real-world challenges.
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
                My work is driven by a commitment to continuous improvement and
                a strong focus on <b className="purple">cloud technologies</b>,{" "}
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

          {/* Technical Skills Section */}
          <h2 className="section-header">
            TECHNICAL<span className="purple"> SKILLS</span>
          </h2>

          <Row className="skills-content">
            <Col md={12}>
              <div className="skills-list">
                <p>
                  <b>Languages:</b> JavaScript, TypeScript, Java, Python, SQL,
                  HTML, CSS, C, C++
                </p>
                <p>
                  <b>Libraries and Frameworks:</b> React.js, Redux, Next.js,
                  Tailwind CSS, Spring, Spring Boot, Express.js, Node.js
                </p>
                <p>
                  <b>Databases and Technologies:</b> MySQL, PostgreSQL, MongoDB,
                  Kafka, Firebase, Amazon Web Services (AWS), Git, Docker,
                  Kubernetes
                </p>
              </div>

              {/* Tech Icons */}
              <div align="center">
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
                <img height="50" src="/Assets/Icons/c.svg" alt="C" title="C" />
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
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Work */}
      <section id="work" className="work-experience-section">
        <Container>
          <h2 className="section-header">
            <span className="purple">WORK </span>EXPERIENCE
          </h2>
          <div className="timeline">
            {/* Node 1 */}
            <div className="timeline-item">
              <div className="timeline-icon"></div>
              <div className="timeline-content">
                <h3>Software Development Engineer</h3>
                <h4 className="company">Brillio</h4>
                <p className="duration">September 2022 - July 2023</p>
                <p>
                  Designed and maintained applications to enhance data retrieval
                  and uptime while improving user experience with optimized
                  interfaces and validation workflows. Conducted API testing to
                  boost system responsiveness, utilizing <b>React.js</b>,{" "}
                  <b>Spring Boot</b>, and <b>MySQL</b> for scalable solutions.
                </p>
              </div>
            </div>

            {/* Node 2 */}
            <div className="timeline-item">
              <div className="timeline-icon"></div>
              <div className="timeline-content">
                <h3>Research Intern</h3>
                <h4 className="company">
                  International Institute of Information Technology Bangalore
                </h4>
                <p className="duration">June 2021 - August 2021</p>
                <p>
                  Optimized Bangalore neighborhood layouts with SUMO and
                  OpenStreetMap to improve traffic flow and reduce delays. Used{" "}
                  <b>XML</b> and <b>Python</b> to analyze traffic conditions and
                  enhance simulation accuracy, producing research-driven graphs
                  for better urban planning.
                </p>
              </div>
            </div>

            {/* Node 3 */}
            <div className="timeline-item">
              <div className="timeline-icon"></div>
              <div className="timeline-content">
                <h3>Software Engineer Intern</h3>
                <h4 className="company">Dokat Inc</h4>
                <p className="duration">August 2020 - October 2020</p>
                <p>
                  Improved website performance with <b>React</b>, boosting load
                  speeds and user satisfaction. Conducted QA testing for Lisa.ai
                  to ensure functionality and resolve critical bugs, enhancing
                  reliability and user experience. Supported backend development
                  with <b>Express.js</b>, <b>Node.js</b>, and optimized database
                  interactions using <b>MongoDB</b>.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Projects */}
      <section id="projects" className="projects-section">
        <Container>
          <h2 className="section-header">
            <span className="purple">PROJECTS</span>
          </h2>
          <Row className="project-row">
            {/* Row 1 */}
            {projects.slice(0, 4).map((project, index) => (
              <Col key={index} md={3} className="project-card">
                <div className="project-card-inner">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                  />
                  <div className="project-details">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-title-link"
                    >
                      <h3 className="project-title">{project.title}</h3>
                    </a>
                    <p className="project-description">{project.description}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
          <Row className="project-row">
            {/* Row 2 */}
            {projects.slice(4).map((project, index) => (
              <Col key={index} md={3} className="project-card">
                <div className="project-card-inner">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                  />
                  <div className="project-details">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-title-link"
                    >
                      <h3 className="project-title">{project.title}</h3>
                    </a>
                    <p className="project-description">{project.description}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
          <div className="more-links d-flex flex-column align-items-center text-center">
            <div>
              <a
                href="https://github.com/sriranjan06"
                target="_blank"
                rel="noopener noreferrer"
                className="github-link"
              >
                <i className="fab fa-github"></i> Check out more of my work on
                GitHub
              </a>
            </div>
            <div>
              <a
                href="https://drive.google.com/file/d/180idmU71Ab8v6HudWs8QJwg5QGyXbLvT/view"
                target="_blank"
                rel="noopener noreferrer"
                className="resume-link"
              >
                View My Resume
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Contact Me */}
      <section id="contact" className="contact-section">
        <Container>
          {/* Header */}
          <Row>
            <Col md={12} className="contact-header">
              <h1>
                <span className="purple">CONTACT</span> ME
              </h1>
              <p style={{ color: "whitesmoke" }}>
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
    </>
  );
}

export default Home;
