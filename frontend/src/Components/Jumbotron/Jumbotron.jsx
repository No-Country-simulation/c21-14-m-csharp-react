import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "./Jumbotron.css";
export const Jumbotron = () => {

  return (
<>
    <div className='z-0 c_jumbotron d-flex flex-column mb-3 justify-content-center d-flex align-items-center' style={{ backgroundImage: "url(/img/hero.png)", backgroundRepeat: 'no-repeat',backgroundPosition: 'center' }}>
         <div class="container-fluid contenerdorJumbo d-flex flex-column">
                <h2>Invierte en bienes raíces</h2>
                <h2 > desde $1000 dólares</h2>
                <button class="btn  btn-lg w-25 mb-0 m-auto" type="button">
                VER PROYECTOS
                </button>
       
         </div>
     </div>


</>

 
  )
}


