import React from 'react'
import './SectionProject.css'
import { useState } from 'react'
import { Mexico } from '../Paises/Mexico/Mexico'
import {NavLink} from 'react-router-dom'

export const SectionProject = () => {
   
  return (
    <div className='c_project d-flex flex-column'>
        <h2 className='text-center p-3 '>Proyectos que te pueden interesar</h2>

        <div class="d-flex justify-content-center align-items-center menu col-lg-12 shadow-lg mb-5 bg-body ">
            <ul >
                <li><NavLink exact activeClassName="active" to='/Argentina' >Argentina</NavLink></li>    
                <li><NavLink activeClassName="active" to='/Mexico'>México</NavLink></li> 
                <li><NavLink exact activeClassName="active" to='/Colombia'>Colombia</NavLink></li>
            </ul>
        </div>
        <div className='cards'>
             <Mexico/>
        </div>
        
    </div>
  )
}
