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
        </Row>
          <Col className="font text-white" style={{minWidth:"300px"}}>
             <p>Hola, mi nombre es Marcelo, actual estudiante de Inglés y desarrollador Full Stack Javascript, mis hobbies son la música, los videojuegos y algo de deporte jeje
             </p>
            <p>Y como puedes notar, también tengo cierto interés en la astronomía, lo desconocido permite usar tú imaginación
             </p>
             <p>Puedes acceder a repositorios de GitHub haciendo <a href="https://github.com/Marcelo-spec?tab=repositories" target='blank'>click aqui</a> para ver proyectos</p>
          </Col>
      </main>
    
    )
    
  }
  <Footer/> 


export default Main;