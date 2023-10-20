import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {Row, Col, Container} from "react-bootstrap";
import myself from "../assets/img/yo.jpg";
import Footer from "../components/Footer";


function Main() {
    return (
      
      <main className="wallpaper d-flex align-items-center justify-content-center" >
        <Row className="d-flex justify-content-center m-3" style={{minWidth:"300px"}}>
          <Col  >
          <img src={myself} alt="yo" style={{width:"300px", borderRadius: "50px"}}></img>
          </Col>
          <Col className="font text-white" style={{minWidth:"300px"}}>
             <p>asd
             </p>
            <p>asd
             </p>
             <p>asd</p>
          </Col>
        </Row>
      </main>
    
    )
    
  }
  <Footer/> 


export default Main;