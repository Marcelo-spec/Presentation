import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { FaGithub, FaFacebook, FaLinkedin } from 'react-icons/fa6'
import { IoMail } from 'react-icons/io5'
function Footer() {
  return (
    <Navbar expand="lg" className="end bg-dark justify-content-center" variant="dark">
      <div className='d-flex flex-column text-center p-2'>
        <Navbar.Text className='text-light m-2 d-flex'>
          Contacto
        </Navbar.Text>
        <Navbar.Text className='d-flex flex-row' style={{gap:"8px"}}>
        <a href="https://github.com/Marcelo-spec" target="_blank" rel="noopener noreferrer">
        <FaGithub className='icon' /> 
      </a>
      <a href="https://github.com/Marcelo-spec" target="_blank" rel="noopener noreferrer">
        <FaFacebook className='icon' /> 
      </a>
      <a href="mailto:perezmarcelo363@gmail.com">
        <IoMail className='icon'/>
      </a>
      <a href="https://www.linkedin.com/in/marcelo-p%C3%A9rez-a6907221b/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className='icon' /> 
      </a>
        </Navbar.Text>
        </div>
    </Navbar>
  );
}

export default Footer;