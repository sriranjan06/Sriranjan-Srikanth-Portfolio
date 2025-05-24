import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <Container>
        {/* Section Header */}
        <h2 className="section-header">
          TECHNICAL<span className="purple"> SKILLS</span>
        </h2>

        <Row className="skills-content justify-content-center">
          <Col md={10} lg={10} xl={8}>
            <div className="skills-list mb-4">
              <p>
                <b>Programming Languages:</b> JavaScript, TypeScript, Java,
                Python, SQL, C, C++, HTML, CSS
              </p>
              <p>
                <b>Frontend:</b> React.js, Next.js, Redux, Tailwind CSS,
                NextAuth.js
              </p>
              <p>
                <b>Backend:</b> Spring Boot, Spring Data JPA, Node.js,
                Express.js, OAuth, Axios
              </p>
              <p>
                <b>Databases:</b> MySQL, PostgreSQL, MongoDB, Firebase, Neo4j
              </p>
              <p>
                <b>DevOps & Cloud:</b> AWS (EC2, S3, Lambda, CloudWatch),
                Docker, Kubernetes, Git, Apache Kafka
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
  );
}

export default Skills;
