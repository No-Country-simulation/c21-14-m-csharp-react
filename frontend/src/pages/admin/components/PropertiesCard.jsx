import { Link } from 'react-router-dom'

const PropertiesCard = ({ propertiesCount }) => {
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
  return (
    <div className="w-[450px] bg-lighGray px-10 py-4 rounded-lg text-center">
      <h2 className="text-2xl font-bold mb-3">Cartera de Propiedades</h2>
      <div className="text-center font-bold text-xl">
        <h3>TOTAL DE PROPIEDADES</h3>
        <p>{propertiesCount.totalProperties}</p>
      </div>
      <section className="flex flex-col gap-3 py-5 ">
        <div className="border-b-2 border-gray flex flex-col gap-1 pb-2">
          <h3 className="text-left font-bold text-lg">TIPO DE INMUEBLE</h3>
          {propertiesCount.countByType.map((item, index) => {
            return (
              <div key={index} className="flex justify-between w-[90%]">
                <p>{formatType(item.type)}</p>
                <p>{item.count}</p>
              </div>
            )
          })}
        </div>
        <div className="border-b-2 border-gray flex flex-col gap-1 pb-2">
          <h3 className="text-left font-bold text-lg">TIPO DE PROYECTO</h3>
          {propertiesCount.countByStatus.map((item, index) => {
            return (
              <div key={index} className="flex justify-between w-[90%]">
                <p>{item.status}</p>
                <p>{item.count}</p>
              </div>
            )
          })}
        </div>
        <div className="border-b-2 border-gray flex flex-col gap-1 pb-2">
          <h3 className="text-left font-bold text-lg">NUEVOS PROYECTOS</h3>
          <div className="flex justify-between w-[90%]">
            <p>Agregados recientemente (7d)</p>
            <p>{propertiesCount.recentPropertyCount}</p>
          </div>
        </div>
      </section>
      <Link to={'/admin/portfolio'}>
        <p className="bg-main text-white font-bold rounded-lg py-4 text-lg">
          Ver Propiedades
        </p>
      </Link>
    </div>
  )
}

export default PropertiesCard
