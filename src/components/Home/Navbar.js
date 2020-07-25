import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import './Home.css'

/**
 * Navbar component
 */
const Appbar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky="top">
      <Container>
        <Navbar>
          <Nav justify className="m-auto">
            <Nav.Link className="nav-link-margin nav-link-margin-home" href="#home">About Me</Nav.Link>
            <Nav.Link className="nav-link-margin" href="#projects">Projects</Nav.Link>
            <Nav.Link className="nav-link-margin" href="#resume">Resume</Nav.Link>
            <Nav.Link className="nav-link-margin" href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar>
      </Container>
    </Navbar>
  );
};

export default Appbar;
