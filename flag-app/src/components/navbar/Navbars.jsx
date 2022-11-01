import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function Navbars() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container className="d-flex justify-content-between">
        <div>
          <Navbar.Brand href="#home">Flag App</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        </div>
        <div>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Link className="badge badge-pill badge-primary" to="/about">About</Link>
              <Link className="badge badge-pill badge-primary" to="/login">Log Out</Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
}

export default Navbars;
