
import React from 'react';
import './OtherProjects.css'; 


function OtherProjects(props) {
    const {name,image,price,description,index} = props.card   
    return (
       <>
                {
                    <div className="project-card card" key={index}>
                        <img src={image} alt={name} />
                        <div className='project-block card-body'>
                            <h2>{name}</h2>
                            <p className="price">Precio de inversión: {price}</p>
                            <p className="description">{description}</p>
                            <button className='btn btnC'>Ver más</button>
                        </div>
                    </div>
                }     
           
            
           </>
    );
}

export default OtherProjects;
