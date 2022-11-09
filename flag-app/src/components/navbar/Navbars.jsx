import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function Navbars() {
  // const currentUser = { displayName: "murat gider" };
  const currentUser = false;
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container className="d-flex justify-content-between">
        <div>
          <Link className="text-white text-2xl mr-3" to="/">
            Flag App
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        </div>
        <div>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Link className="badge badge-pill badge-primary" to="/about">
                About
              </Link>
              <Link className="badge badge-pill badge-primary" to="/register">
                Register
              </Link>

              <Link className="badge badge-pill badge-primary" to="/login">
                Log Out
              </Link>
              <div>
                <h5 className="text-white mr-2 capitalize">
                  {currentUser?.displayName}
                </h5>
              </div>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
}

export default Navbars;
