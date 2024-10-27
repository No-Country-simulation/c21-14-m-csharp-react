import React from 'react'
import d_1 from '../../assets/d_1.jpg'
import d_2 from '../../assets/d_2.jpg'
import d_3 from '../../assets/d_3.jpg'
import d_4 from '../../assets/d_4.jpg'
import d_5 from '../../assets/d_5.jpg'



import './Property.css'



const propiedad=[
{
    id:1,
  name:'[Nombre de la Propiedad]',
  precio: 1000000,
  description:"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur,  ",
 
},


]
export const Property = () => {
 
  return (
    <div className="property-listing fs-4 px-4">
        <div className='d-flex justify-content-between p-5' style={{color:'#0C49B0'}}>
            <div>
                <p>Mexico</p>
                <h2 className='fw-bold fs-2'>Nexo Comercial</h2>
            </div>
            <div>
                <p className='fs-5 fw-bold'>Precio de inversion</p>
                <h2 className='text-black fw-bold fs-2'>$[000,000.00]</h2>
            </div>
        </div>

      <div className="main-image">
        <img src={d_1} alt="Exterior del edificio" />
      </div>
      <div className="image-gallery">
        <img src={d_2} alt="Espacio de oficina" />
        <img src={d_3} alt="Sala industrial vacía" />
        <img src={d_4} alt="Otro espacio vacío" />
        <img src={d_5} alt="Sala de reuniones" />
      </div>
      <div className="property-details py-3">
        <div className="property-info">
          <p><strong>Tipo de propiedad:</strong> Local comercial</p>
          <p><strong>Estado de la propiedad:</strong> En venta</p>
          <p><strong>Tamaño (m²):</strong> 150 m²</p>
          <p><strong>Inversión estimada:</strong> $500,000</p>
          <p><strong>Plazo de la inversión:</strong> 5 años</p>
        </div>
        <div className="property-description">
          <h2 className='pDescTitle fw-bold py-3'>Descripción de la propiedad</h2>
          <p>
            Los locales comerciales de estilo industrial destacan por su diseño vanguardista y
            funcional, con techos altos, grandes ventanales y acabados en materiales nobles como
            ladrillo, hormigón y acero. Ideales para tiendas, cafeterías o estudios creativos, combinan lo mejor
            de la arquitectura industrial con las comodidades y servicios que requiere la vida moderna.
          </p>
        </div>
      </div>
      <button className="invest-button w-25">Invertir Ahora</button>
      <div className="favorite-icon">❤</div>
    </div>
  )
}
