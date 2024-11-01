import { Link } from 'react-router-dom'
import './Property.css'
const formatType = value => {
  switch (value) {
    case 'commercial':
      return 'Comercial'
    case 'residential':
      return 'Residencial'
    case 'industrial':
      return 'Industrial'
  }
}

export const Property = ({ property }) => {
  const photos = property.photosUrl.split(',')
  return (
    <div className="py-10">
      <div
        className="d-flex justify-content-between p-3"
        style={{ color: '#0C49B0' }}
      >
        <div>
          <p>
            {property.city}, {property.country}
          </p>
          <h2 className="fw-bold fs-2">{property.name}</h2>
        </div>
        <div>
          <p className="fs-5 fw-bold">Inversión Mínima</p>
          <h2 className="text-black fw-bold fs-2">${property.minAmount}</h2>
        </div>
      </div>

      <div className="flex flex-col gap-4 ">
        {/* Fila superior con dos columnas */}
        <div className="grid grid-cols-2 gap-4">
          <div className="aspect-4/3">
            <img
              src={photos[0]}
              alt="Imagen 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-4/3">
            <img
              src={photos[1]}
              alt="Imagen 2"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Fila inferior con tres columnas */}
        <div className="grid grid-cols-3 gap-4">
          <div className="aspect-4/3">
            <img
              src={photos[2]}
              alt="Imagen 3"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-4/3">
            <img
              src={photos[3]}
              alt="Imagen 4"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-4/3">
            <img
              src={photos[4]}
              alt="Imagen 5"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="property-details py-3">
        <div className="property-info">
          <p>
            <strong>Tipo de propiedad:</strong> {formatType(property.type)}
          </p>
          <p>
            <strong>Estado de la propiedad:</strong> {property.status}
          </p>
          <p>
            <strong>Tamaño (m²):</strong> {property.area}
          </p>
          <p>
            <strong>Inversión mínima</strong> ${property.minAmount}
          </p>
          <p>
            <strong>Plazo de la inversión:</strong> {property.time} meses
          </p>
        </div>
        <div className="property-description">
          <h2 className="pDescTitle fw-bold py-3">
            Descripción de la propiedad
          </h2>
          <p>{property.description}</p>
        </div>
      </div>
      <a
        href={'/investment-pay/' + property.id}
        className="bg-main rounded-md text-lg text-white px-12 py-2"
      >
        INVERTIR AHORA
      </a>
      <div className="favorite-icon">❤</div>
    </div>
  )
}
