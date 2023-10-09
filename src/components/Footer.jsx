import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Footer() {
  return (
    <Navbar expand="lg" className="end bg-dark" variant="dark">
      <Container className='d-flex flex-column text-center p-2'>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='m-3'  style={{bordercolor:"white"}} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className='d-flex gap-4 '>
           
          </Nav>
        </Navbar.Collapse>
        <Navbar.Text className='text-light m-2'>asd</Navbar.Text>
      </Container>
    </Navbar>
  );
}

export default Footer;