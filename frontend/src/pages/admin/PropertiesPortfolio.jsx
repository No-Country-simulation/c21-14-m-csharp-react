import { useState } from 'react'
import DataGridDemo from './components/PropertiesTable'
import SearchProperties from './components/SearchProperties'
import { Header } from './components/Header'
import { Link } from 'react-router-dom'

const PropertiesPortfolio = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  return (
    <>
      <Header />

      <div className="px-6">
        <Link to={'/admin/dashboard'}>
          <div className="font-bold text-lg text-main border-b-4 border-transparent hover:border-main transition-colors duration-300 w-fit flex items-center my-4">
            <i className="w-5 h-5 flex items-center justify-center fa-solid fa-angle-left fa-sm"></i>
            <p>Regresar</p>
          </div>
        </Link>
        <SearchProperties setData={setData} setLoading={setLoading} />
        <p className="my-4 text-end text-lg font-semibold">
          <Link to="/admin/addproperty" className="underline text-[#0E58D3]">
            Añadir Propiedad
          </Link>
        </p>
        <div className="min-h-56">
          <DataGridDemo
            data={data}
            setData={setData}
            loading={loading}
            setLoading={setLoading}
          />
        </div>
      </div>
    </>
  )
}

export default PropertiesPortfolio
