import React from "react";
import "./UserHome.css";
import { useLocation } from 'react-router-dom';
import {Navbar} from '../Navbar/Navbar'
import {Footer} from '../Footer/Footer'
import LocationMap from '../LocationMap/LocationMap'
import { Property } from '../Property/Property'
import OtherProjects from '../OtherProjects/OtherProjects'

export const UserHome = () => {
  const location = useLocation();
  const profile = location.state?.profile;
  return (
<>
{/*<Navbar userHome={"userHome"} loggedIn={true}/>*/}

<div>

      {" "}
      {profile ? (
        <div className="container pt-5">
                    <h1>Hola, {profile.name}!</h1>
            <div className="d-flex justify-content-around align-item-center container m-5 inversiones pt-3">
                <p>Monto disponible: $ </p>
                <p>Proyectos:</p>
                <p>Ganacias: $</p>
            </div>
                  {/*  {" "}
                    <h1>Profile Details</h1> <p>Name: {profile.name}</p>{" "}
                    <p>Email: {profile.email}</p> <p>Phone: {profile.phone}</p>{" "}
                    <p>Country: {profile.country}</p>{" "}
                    <p>Document ID: {profile.documentId}</p>{" "}
                    <p>Profile URL: {profile.profileUrl}</p>{" "}*/}
        </div>
      ) : (
        <div>No hay data del profil disponible</div>
      )}{" "}
    </div>

    <hr className='m-auto'/>
    <OtherProjects/>
    <LocationMap/>
    <Footer style={{ 
    padding:"40px 16px",
    height:"190px",}}/>
    
</>
    
    
    
  );
};
