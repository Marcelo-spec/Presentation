import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {Row, Col} from "react-bootstrap";
import myself from "../assets/img/me.jpg";
import Footer from "../components/Footer";


function Main() {
    return (
      
      <main className="myself wallpaper d-flex align-items-center justify-content-center" >
        <Row className=" float d-flex justify-content-center" style={{minWidth:"300px"}}>
          <Col >
          <img src={myself} alt="me" style={{width:"300px", borderRadius: "50px"}}></img>
          </Col>
          <Col className="font text-white m-5" style={{minWidth:"300px"}}>
             <p>Hola, mi nombre es Marcelo, actual estudiante de Inglés y desarrollador Full Stack Javascript, mis hobbies son la música, los videojuegos y algo de deporte jeje
             </p>
            <p>Y como puedes notar, también tengo cierto interés en la astronomía, lo desconocido permite usar tú imaginación
             </p>
             <p>Puedes acceder a repositorios de GitHub haciendo <a href="https://github.com/Marcelo-spec?tab=repositories" target='blank'>click aqui</a> para ver proyectos</p>
          </Col>
        </Row>
      </main>
    
    )
    
  }
  <Footer/> 


export default Main;