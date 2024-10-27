
import React from 'react';
import './OtherProjects.css'; 
import img1 from '../../assets/o_1.png';
import img2 from '../../assets/o_2.png';
import img3 from '../../assets/o_3.jpg';
import img4 from '../../assets/o_4.png';
import img5 from '../../assets/o_5.jpg';

function OtherProjects() {
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

    return (
        <div className="project-gallery  m-auto ">
            <h1>Otros proyectos para invertir</h1>
            <div className="projects-grid py-5">
                {projects.map((project, index) => (
                    <div className="project-card" key={index}>
                        <img src={project.image} alt={project.name} />
                        <div className='project-block'>
                            <h2>{project.name}</h2>
                            <p className="price">Precio de inversión: {project.price}</p>
                            <p className="description">{project.description}</p>
                            <button>Ver más</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default OtherProjects;
