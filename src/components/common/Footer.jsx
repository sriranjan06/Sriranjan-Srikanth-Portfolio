import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="12" className="footer-copywright">
          <a
            href="https://github.com/sriranjan06/Sriranjan-Srikanth-Portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
            aria-label="Link to portfolio source code on GitHub"
          >
            <h3 className="footer-text">
              Designed by Sriranjan Srikanth © {year}{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#fcc200"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="footer-arrow"
              >
                <path d="M5 19L19 5M5 5h14v14" />
              </svg>
            </h3>
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
