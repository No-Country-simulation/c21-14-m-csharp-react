import React from "react";
import "./UserHome.css";
import { useLocation } from 'react-router-dom';
import { Navbar } from '../Navbar/Navbar';
import { Footer } from '../Footer/Footer';
import LocationMap from '../LocationMap/LocationMap';
import { useNavigate } from 'react-router-dom';
import OtherProjects from '../OtherProjects/OtherProjects';
import PropertyFilter from "../PropertyFilter/PropertyFilter";
import img2 from '../../assets/o_2.png';
import img5 from '../../assets/o_5.jpg';

export const UserHome = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const profile = location.state?.profile;
    const projects = [
        { id: 1, name: 'Lago del Sol', price: '$30,200.00', description: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit am fjjfjfjet...', image: img5 },
        { id: 2, name: 'La Hacienda Imperial', price: '$1,560.00', description: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet...', image: img2 },
        { id: 3, name: 'Villas del Sol', price: '$12,345.00', description: 'Neque porro quisquam est qui dolorem ipsu fjjjf m quia dolor sit amet...', image: img5},
        { id: 4, name: 'La Hacienda Imperial', price: '$1,560.00', description: 'Neque porro quisquam est qui dolorem ipsum quia dolor  sit amet...', image: img2 },
    ];

    return (
        <>
            <Navbar userHome={"userHome"} loggedIn={true} />
            <div className="perfil">
                {profile ? (
                    <div className="container pt-5">
                        <h1>Hola, {profile.name}!</h1>
                        <div className="d-flex justify-content-around align-item-center container m-5 inversiones pt-3">
                            <p>Monto disponible: $120,000</p>
                            <p>Proyectos Invertidos: 2</p>
                            <p>Ganacias: $3,000</p>
                        </div>
                        <h2>Proyectos Brickly</h2>
                        <p>Quizás te puedan interesar</p>
                        <div className="project-gallery m-auto">
                            <div className="projects-grid py-5 mt-3">
                                {projects.map((project) => (
                                    <div key={project.id}>
                                        <OtherProjects card={project} />
                                    </div>
                                ))}
                            </div>
                            <button className='btn-verMas mx-auto my-5'>Ver más</button>
                        </div>
                    </div>
                ) : (
                    <div>No hay data del perfil disponible</div>
                )}
            </div>
            <hr className='m-auto' />
            <h1 className="pl-3">Otros proyectos para invertir</h1>
            <PropertyFilter />
            <div className="project-gallery m-auto">
                <div className="projects-grid py-5 mt-3">
                    {projects.map((project) => (
                        <OtherProjects key={project.id} card={project} />
                    ))}
                </div>
                <button className='btn-verMas mx-auto my-5'>Ver más</button>
            </div>
            <LocationMap />
            <Footer style={{ padding: "40px 16px", height: "190px" }} />
        </>
    );
};
