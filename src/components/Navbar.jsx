import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/img/logonavbar.png';

function Nav() {
  return (
<Navbar className=" bg-img-navbar text-light bg-dark">
<Navbar.Brand>
  <Container>
  <img src={logo} alt='logo' className='logo' style={{width: "200px"}}></img>
  </Container>
</Navbar.Brand>
</Navbar>
  )
}

export default Nav;