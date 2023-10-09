import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {Row, Col, Container} from "react-bootstrap"
import myself from "../assets/img/yo.jpg"
import Footer from "../components/Footer"


function Main() {
    return (
        <Container className="d-flex align-items-center mt-4">
        <Row className="d-flex justify-content-center m-3" style={{minWidth:"300px"}}>
          <Col  >
          <img className="img-fluid" src={myself} alt="myself" style={{width:"660px", borderRadius: "50px"}}></img>
          </Col>
          <Col style={{minWidth:"300px"}}>
             <p>asd
             </p>
            <p>asd
             </p>
             <p>asd</p>
          </Col>
        </Row>
      </Container>
    )
    
  }
  <Footer/> 


export default Main;