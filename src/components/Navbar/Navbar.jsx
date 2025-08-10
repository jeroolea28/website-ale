import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from "react-router-dom";
import './Navbar.css'; // import the custom CSS

function BasicExample() {
  return (
    <Navbar expand="lg" className="custom-navbar" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink as={Link} to="/contact" className="nav-link">Contact Me!</NavLink>
            <NavDropdown title="Get to know me!" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/about">About Me</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/hobbies">My Hobbies</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/awards">Recognitions</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
