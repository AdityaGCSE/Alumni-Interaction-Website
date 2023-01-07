import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../../images/logo.png";
import Login from '../Login/Login.js';
import User from '../User/User.js';
import "./Header.css"


export default function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" id='nav' variant="dark">
      <Container>
            <Navbar.Brand href="/Alumni-Interaction-Website/">
            <img
              src={logo}
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="GifteEasy"
            />
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/Alumni-Interaction-Website/events" >Events</Nav.Link>
            <Nav.Link href="/Alumni-Interaction-Website/initiatives">Initiatives</Nav.Link>
            <Nav.Link href="/Alumni-Interaction-Website/newsmedia">News & Media</Nav.Link>
            <Nav.Link href="/Alumni-Interaction-Website/aboutus">About Us</Nav.Link>
            <Nav.Link href="/Alumni-Interaction-Website/services" target="_blank" rel="noopener noreferrer">Services</Nav.Link>
          </Nav>
          <Nav id='test'>
            <Login/>
            <User/>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

