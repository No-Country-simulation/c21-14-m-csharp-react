import { useState } from 'react'
import DataGridDemo from './components/PropertiesTable'
import SearchProperties from './components/SearchProperties'
import Header from './components/Header'

const PropertiesPortfolio = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  return (
    <>
      <Header />
      <div className="px-6">
        <SearchProperties setData={setData} setLoading={setLoading} />
        <p className="my-4 text-end text-lg font-semibold">
          <a href="/admin/addproperty" className="underline text-[#0E58D3]">
            Añadir Propiedad
          </a>
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
