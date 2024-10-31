import React from "react";
import "./Portfolio.css";
import { useLocation } from 'react-router-dom';
import {Navbar} from '../Navbar/Navbar'
import {Footer} from '../Footer/Footer'
import LocationMap from '../LocationMap/LocationMap'
import invImg from '../../assets/noInver.png'
import OtherProjects from '../OtherProjects/OtherProjects'
import img2 from '../../assets/o_2.png';
import img5 from '../../assets/o_5.jpg';
import PropertyFilter from "../PropertyFilter/PropertyFilter";

export const Portfolio = () => {

  const dataJSON = localStorage.getItem('data');
  const user = JSON.parse(dataJSON);

  
  const projects = [
      { name: 'Lago del Sol', price: '$30,200.00', description: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit am fjjfjfjet...', image: img5 },
      { name: 'La Hacienda Imperial', price: '$1,560.00', description: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet...', image: img2 },
     
      ];


  return (
<>
<Navbar userHome={"userHome"} loggedIn={true}/>



<div className="perfil">

      {" "}
      {user ? (
        <div className="container pt-5">
            <h1>Hola, {user.name}!</h1>
            <div className="d-flex justify-content-around align-item-center container m-5 inversiones pt-3">
                <p>Monto disponible: $120,000  </p>
                <p>Proyectos Invertidos: 2</p>
                <p>Ganacias: $3,000</p>
            </div>
            <h2>Tus Inversiones inmobilarias</h2>
          
                 <div className="project-gallery  m-auto "> 
                      <div className="projects-grid py-5 mt-3">
                             {projects.map(project => (
                                 <OtherProjects card={project}/>
                              ))}
                        </div>
                        
                                 <button className='btn-verMas mx-auto my-5'>Ver más</button>
                    </div>

                  {/*  {" "}
                    <h1>Profile Details</h1> <p>Name: {profile.name}</p>{" "}
                    <p>Email: {profile.email}</p> <p>Phone: {profile.phone}</p>{" "}
                    <p>Country: {profile.country}</p>{" "}
                    <p>Document ID: {profile.documentId}</p>{" "}
                    <p>Profile URL: {profile.profileUrl}</p>{" "}*/}
        </div>
      ) : (
        <div className="container pt-5">
        
            <div className="d-flex justify-content-around align-item-center container m-5 inversiones pt-3">
                <p>Monto disponible: $120,000  </p>
                <p>Proyectos Invertidos: 2</p>
                <p>Ganacias: $3,000</p>
            </div>
            <h2>Tus Inversiones inmobilarias</h2>
            <div className="d-flex justify-content-center flex-column align-items-center p-5 m-5">
                 <img className="w-50" src={invImg} alt="" />
                 <p style={{color:"#48974E"}} className="p-3 fs-3">Aún no tienes inversiones</p>
            </div>
           
          
                 

        </div>
      )}{" "}
    </div>

    <hr className='m-auto'/>
    <h1 className="px-5 pt-4">Tus favoritos</h1>
    <PropertyFilter/>

    <div className="project-gallery  m-auto "> 
                      <div className="projects-grid py-5 mt-3">
                             {projects.map(project => (
                                 <OtherProjects card={project}/>
                              ))}
                        </div>
                                 <button className='btn-verMas mx-auto my-5'>Ver más</button>
                    </div>

    <LocationMap/>
    <Footer style={{ 
    padding:"40px 16px",
    height:"190px",}}/>
    
</>
    
    
    
  );
};
