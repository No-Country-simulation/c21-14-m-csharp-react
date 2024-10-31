import React from 'react';
import './Tarjeta.css';

export const Tarjeta = ({ property }) => {
  return (
    <div className="tarjeta">
      <img src={property.photosUrl} alt={property.name} className="tarjeta-img" />
      <div className="tarjeta-info">
        <h2>{property.name}</h2>
        <p><strong>Tipo:</strong> {property.type}</p>
        <p><strong>País:</strong> {property.country}</p>
        <p><strong>Ciudad:</strong> {property.city}</p>
        <p><strong>Ubicación:</strong> {property.location}</p>
        <p><strong>Descripción:</strong> {property.description}</p>
        <p><strong>Monto Mínimo:</strong> ${property.minAmount}</p>
        <p><strong>Área:</strong> {property.area} m²</p>
        <p><strong>Tiempo:</strong> {property.time} meses</p>
        <p><strong>Profit:</strong> {property.profit}%</p>
        <p><strong>Estado:</strong> {property.status}</p>
      </div>
    </div>
  );
};

  
