import React from 'react'
import './SectionProject.css'

import { Mexico } from '../Paises/Mexico/Mexico'
import {NavLink} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
export const SectionProject = () => {
  const navigate = useNavigate();
 

  const handleButtonClick = () => {
      navigate('/PropertyDetail'); // Cambia a la ruta deseada
  }
  return (
    <>
   
    <div  id="seccion1" className='c_project d-flex flex-column'>
        <h2 className='text-center p-3 '>Proyectos que te pueden interesar</h2>

        <div className="d-flex justify-content-center align-items-center menu col-lg-12 shadow-lg mb-5 bg-body ">
            <ul >
                <li><NavLink exact activeclassName="active" to='/Argentina' >Argentina</NavLink></li>    
                <li><NavLink activeclassName="active" to='/Mexico'>México</NavLink></li> 
                <li><NavLink exact activeclassName="active" to='/Colombia'>Colombia</NavLink></li>
            </ul>
        </div>
        <div onClick={handleButtonClick}  className='cards'>
          
             <Mexico/>
        </div>
        
    </div>
    </>
  )
}
