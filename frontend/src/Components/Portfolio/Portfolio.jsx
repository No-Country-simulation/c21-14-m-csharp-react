import React from "react";
import "./Portfolio.css";
import { useLocation } from 'react-router-dom';
import {Navbar} from '../Navbar/Navbar'
import {Footer} from '../Footer/Footer'
import LocationMap from '../LocationMap/LocationMap'
import { Property } from '../Property/Property'
import OtherProjects from '../OtherProjects/OtherProjects'

export const Portfolio = () => {
  const location = useLocation();
  const profile = location.state?.profile;
  return (
<>
<Navbar portfolio={"portfolio"} />
<div>

      {" "}
      {profile ? (
        <div>
          {" "}
          <h1>Profile Details</h1> <p>Name: {profile.name}</p>{" "}
          <p>Email: {profile.email}</p> <p>Phone: {profile.phone}</p>{" "}
          <p>Country: {profile.country}</p>{" "}
          <p>Document ID: {profile.documentId}</p>{" "}
          <p>Profile URL: {profile.profileUrl}</p>{" "}
        </div>
      ) : (
        <div>No profile data available</div>
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
