import React from 'react'

import { Container, Nav, Navbar} from 'react-bootstrap';


function  Navbaar() {
  return (
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Profile</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
         
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navbaar