import React from "react";
import { Navbar, Nav } from "react-bootstrap";
// import { BrowserRouter as Router, Link, Route } from "react-router-dom";
// import "./style.css";

function Header() {
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="#home">NER for ESL</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
