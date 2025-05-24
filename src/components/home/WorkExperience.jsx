import React from "react";
import { Container } from "react-bootstrap";

function WorkExperience() {
  return (
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
  );
}

export default WorkExperience;
