import { LogoutLink } from "./LogoutLink";
import { Navbar, Nav, NavDropdown, Container, Button, Form } from "react-bootstrap";

export function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">YogiBear</Navbar.Brand>
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
                <NavDropdown title="Admin" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="/yogis/new">Add New YogiBear Instructor</NavDropdown.Item>
                </NavDropdown>
                <LogoutLink />
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
