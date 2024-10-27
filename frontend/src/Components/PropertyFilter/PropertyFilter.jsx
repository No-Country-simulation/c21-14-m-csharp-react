import React from 'react';
import './PropertyFilter.css';

const PropertyFilter = () => {
  return (
    <div className="property-filter">
      <div className="filter-item">
        <label htmlFor="location">Ubicación</label>
        <select id="location" defaultValue="">
          <option value="" disabled>Selecciona la ubicación</option>
          <option value="madrid">Madrid</option>
          <option value="barcelona">Barcelona</option>
          <option value="valencia">Valencia</option>
        </select>
      </div>
      <div className="filter-item">
        <label htmlFor="propertyType">Tipo de propiedad</label>
        <select id="propertyType" defaultValue="">
          <option value="" disabled>Selecciona una opción</option>
          <option value="apartment">Apartamento</option>
          <option value="house">Casa</option>
          <option value="commercial">Local comercial</option>
        </select>
      </div>
      <div className="filter-item">
        <label htmlFor="propertyStatus">Estado de la propiedad</label>
        <select id="propertyStatus" defaultValue="">
          <option value="" disabled>Selecciona una opción</option>
          <option value="forSale">En venta</option>
          <option value="forRent">En alquiler</option>
          <option value="newDevelopment">Obra nueva</option>
        </select>
      </div>
      <div className="filter-item">
        <label htmlFor="investmentPrice">Precio de inversión</label>
        <input 
          type="range" 
          id="investmentPrice" 
          min="0" 
          max="1000000" 
          step="10000" 
          defaultValue="500000"
        />
      </div>
    </div>
  );
};

export default PropertyFilter;