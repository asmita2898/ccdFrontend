import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <h3>Cafe Day Dreamer&nbsp;<i class="fa-solid fa-mug-saucer"></i></h3>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">

            <Nav className="me-auto"></Nav>
            <Nav className='justify-content-end'>
              <Nav.Link href="/" style={{ fontSize: "20px" }}>Home</Nav.Link>
              <Nav.Link eventKey={2} href="/products" style={{ fontSize: "20px" }}>
                Products
              </Nav.Link>
              <Nav.Link href="/contactus" style={{ fontSize: "20px" }}>Contact Us</Nav.Link>
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
