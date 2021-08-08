import React from "react";
import Logo from "../assets/img/logo.png";
import { Navbar, Container, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export default function Header() {
  return (
    <Navbar variant="dark" expand="lg">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand className="logo">
            <img src={Logo} alt="logo" />
            Bayu Samudra
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <LinkContainer to="/" exact>
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/project" exact>
              <Nav.Link>Project</Nav.Link>
            </LinkContainer>
            <Nav.Link href="https://catatan.bayusamudra.my.id">Blog</Nav.Link>
            <LinkContainer to="/contact" exact>
              <Nav.Link>Contact</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
