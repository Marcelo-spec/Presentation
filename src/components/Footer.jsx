import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaGithub, FaFacebook } from 'react-icons/fa6'
import { IoMail } from 'react-icons/io5'
function Footer() {
  return (
    <Navbar expand="lg" className="end bg-dark" variant="dark">
      <Container className='d-flex flex-column text-center p-2'>
        <Navbar.Text className='text-light m-2 d-flex'>
          asd
        </Navbar.Text>
        <Navbar.Text className='d-flex flex-row'>
        <a href="https://github.com/Marcelo-spec" target="_blank" rel="noopener noreferrer">
        <FaGithub className='icon' /> 
      </a>
      <a href="https://github.com/Marcelo-spec" target="_blank" rel="noopener noreferrer">
        <FaFacebook className='icon' /> 
      </a>
      <a href="mailto:perezmarcelo363@gmail.com">
        <IoMail className='icon'/>
      </a>
        </Navbar.Text>
      </Container>
    </Navbar>
  );
}

export default Footer;