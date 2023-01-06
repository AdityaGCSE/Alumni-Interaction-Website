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
            <Navbar.Brand href="/">
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
            <Nav.Link href="/events" >Events</Nav.Link>
            <Nav.Link href="/initiatives" target="_blank" rel="noopener noreferrer">Initiatives</Nav.Link>
            <Nav.Link href="/newsmedia" target="_blank" rel="noopener noreferrer">News & Media</Nav.Link>
            <Nav.Link href="/aboutus" target="_blank" rel="noopener noreferrer">About Us</Nav.Link>
            <Nav.Link href="/services" target="_blank" rel="noopener noreferrer">Services</Nav.Link>
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

