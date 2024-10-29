import React from 'react';
import './LocationMap.css';
import imgMap from '../../assets/map.png'

const LocationMap = () => {
  return (
    <div className="location-map">
      <div className="header">
        ENCUÉNTRANOS CERCA DE TI
      </div>    
      <div className="mapswrapper"><iframe width="100%" height="250" loading="lazy" allowFullScreen src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=lima&zoom=10&maptype=roadmap"></iframe></div>
    </div>
  );
};

export default LocationMap;