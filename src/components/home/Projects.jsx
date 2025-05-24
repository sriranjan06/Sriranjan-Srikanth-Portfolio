import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import projects from "../../constants/projects.js";

function Projects() {
  return (
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
              href="https://drive.google.com/file/d/1psGmdPCjDlxHN3C-EyK0JTL1dNULBgpu/view"
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
  );
}

export default Projects;
