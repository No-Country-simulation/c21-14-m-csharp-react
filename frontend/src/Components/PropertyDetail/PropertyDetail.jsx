import React from 'react'
import './PropertyDetail.css'
import {Navbar} from '../Navbar/Navbar'
import {Footer} from '../Footer/Footer'
import LocationMap from '../LocationMap/LocationMap'
import { Property } from '../Property/Property'
import OtherProjects from '../OtherProjects/OtherProjects'

export const PropertyDetail = () => {
    const images = [
        "https://via.placeholder.com/150/0000FF",
        "https://via.placeholder.com/150/FF0000",
        "https://via.placeholder.com/150/00FF00",
        "https://via.placeholder.com/150/FFFF00",
        "https://via.placeholder.com/150/FF00FF"
    ];
  return (
    <>
    <Navbar home={"home"}/>
    <div className="container-fluid">
            <div className="row">
                <Property 
                    title="Card Title 1"
                    text="Some quick example text to build on the card title and make up the bulk of the card's content."
                    images={images}
                />
            </div>
        </div>
        
    <hr className='m-auto'/>
    <OtherProjects/>
    <LocationMap/>
    <Footer style={{ 
    padding:"40px 16px",
    height:"190px",}}/>
    </>
  )
}
