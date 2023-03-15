import { LogoutLink } from "./LogoutLink";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import React from "react";
import gummyyoga from "./assets/gummyyoga.jpeg";
export function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">
          <img alt="" src={gummyyoga} width="50" height="50" /> YogiBear
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
            {localStorage.jwt === undefined ? (
              <>
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link href="/signup">Signup</Nav.Link>
              </>
            ) : (
              <>
                <LogoutLink />
                <Nav.Link href="/bookings">See your bookings</Nav.Link>
                <NavDropdown title="Admin" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="/yogis/new">Add New YogiBear Instructor</NavDropdown.Item>
                </NavDropdown>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
