import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "./Jumbotron.css";
 const Jumbotron = () => {

  return (
<>
    <div className='z-0 c_jumbotron d-flex flex-column mb-3 justify-content-center d-flex align-items-center'>
         <div className="container-fluid contenerdorJumbo d-flex flex-column">
                <h2>Invierte en bienes raíces</h2>
                <h2 > desde $1000 dólares</h2>
                <a href="#seccion1" className="btn btn-lg btn-primary m-auto"> VER PROYECTOS</a>
                
       
         </div>
     </div>


</>

 
  )
}
export default Jumbotron;

