import React from 'react'
import './PropertyDetail.css'
import {Navbar} from '../Navbar/Navbar'
import {Footer} from '../Footer/Footer'
import LocationMap from '../LocationMap/LocationMap'
import { Property } from '../Property/Property'
import OtherProjects from '../OtherProjects/OtherProjects'
import PropertyFilter from '../PropertyFilter/PropertyFilter'
import img1 from '../../assets/o_1.png';
import img2 from '../../assets/o_2.png';
import img5 from '../../assets/o_5.jpg';

export const PropertyDetail = () => {
    const projects = [
        { name: 'Lago del Sol', price: '$30,200.00', description: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet...', image: img1 },
        { name: 'La Hacienda Imperial', price: '$1,560.00', description: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet...', image: img2 },
        { name: 'Villas del Sol', price: '$12,345.00', description: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet...', image: img1},
        { name: 'TechnoPark Residencial', price: '$4,030.00', description: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet...', image: img1 },
        { name: 'Montecarlo Suites', price: '$500,020.00', description: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet...', image: img5 },
        { name: 'Villas del Sol', price: '$12,345.00', description: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet...', image: img5},
        { name: 'La Hacienda Imperial', price: '$1,560.00', description: 'Neque porro quisquam est qui dolorem ipsum quia dolor sihjjhjkjkt amgh h h gdfh fgh ghd h fhfgh fhffhet...', image: img2 }, 
        { name: 'Montecarlo Suites', price: '$500,020.00', description: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet...', image: img5 }
   
        ];
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
    <h1>Otros proyectos para invertir</h1>
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
  )
}
