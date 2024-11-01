import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getPropertyInfo } from '../../lib/data'
import { Header } from './components/Header'
import { Loading } from './components/Loading'

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
const PropertyDetail = () => {
  const { id } = useParams()
  const [property, setProperty] = useState({})
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    async function getData() {
      setProperty(await getPropertyInfo(id))
      setLoading(false)
    }
    getData()
  }, [id])

  if (loading) return <Loading />
  return (
    <>
      <Header />

      <div className="px-20 pb-20">
        <Link to={'/admin/portfolio'}>
          <div className="font-bold text-lg text-main border-b-4 border-transparent hover:border-main transition-colors duration-300 w-fit flex items-center my-4">
            <i className="w-5 h-5 flex items-center justify-center fa-solid fa-angle-left fa-sm"></i>
            <p>Regresar</p>
          </div>
        </Link>
        <h1 className="font-bold text-4xl text-main mb-4">{property.name}</h1>
        <div>
          <span className="font-bold">Ubicación:</span> {property.city},{' '}
          {property.country}
        </div>
        <a href={property.location} target="_blank" rel="noopener noreferrer">
          <div className="flex gap-1 items-center text-link border-2 border-link w-fit px-4 py-2 my-2 rounded-lg">
            <i className="fa-solid fa-map"></i>
            <p>Ver ubicación en Google Maps</p>
          </div>
        </a>
        <div className="flex justify-between flex-wrap pt-3">
          <div>
            <p className="font-bold">Tipo de propiedad:</p>
            <p>{formatType(property.type)}</p>
          </div>
          <div>
            <p className="font-bold">Estado de propiedad:</p>
            <p>{property.status}</p>
          </div>
          <div>
            <p className="font-bold">Tamaño (m²):</p>
            <p>{property.area} m²</p>
          </div>
          <div>
            <p className="font-bold">Precio de la inversión:</p>
            <p>${property.minAmount.toLocaleString()}</p>
          </div>
          <div>
            <p className="font-bold">Rentabilidad Estimada:</p>
            <p>{property.profit.toLocaleString()}%</p>
          </div>
          <div>
            <p className="font-bold">Plazo de Inversión:</p>
            <p>{property.time} meses</p>
          </div>
        </div>

        <hr className="my-4" />
        <p className="text-xl font-bold mb-4">Fotos de la propiedad</p>
        <div className="grid grid-cols-5 gap-4">
          {Array.from({ length: 5 }, (_, index) => {
            const url = property.photosUrl.split(',')[index]?.trim() // Obtener la URL correspondiente

            return (
              <div
                key={index}
                className="aspect-square bg-slate-300 rounded-sm p-1 overflow-hidden"
              >
                {url && url.length > 0 ? ( // Verifica que la URL no esté vacía
                  <img
                    src={url} // Usar la URL correspondiente
                    alt={`Foto ${index + 1}`}
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <div className="w-full h-full bg-slate-300"></div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default PropertyDetail
