import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        {/* Sriranjan Srikanth branding on left top corner */}
        <Navbar.Brand href="#introduction" className="d-flex">
          Sriranjan Srikanth
        </Navbar.Brand>

        {/* Hamburger Menu */}
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>

        {/* Navbar collapse */}
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link href="#about" onClick={() => updateExpanded(false)}>
                About
              </Nav.Link>
            </Nav.Item>

            {/* Work consists of work experience and projects */}
            <Nav.Item>
              <Nav.Link href="#work" onClick={() => updateExpanded(false)}>
                Work
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                href="https://drive.google.com/file/d/1rWABvLa1a7Ud2Y9YBj7eDDRtLLLs7e69/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => updateExpanded(false)}
              >
                Resume
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href="#contact" onClick={() => updateExpanded(false)}>
                Contact
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
