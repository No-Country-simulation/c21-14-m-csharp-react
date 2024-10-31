import { useState } from 'react'
import UsersTable from './components/UsersTable'
import SearchUsers from './components/SearchUsers'
import { Header } from './components/Header'
import { Link } from 'react-router-dom'

const UsersView = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  return (
    <>
      <Header />
      <div className="px-20">
        <Link to={'/admin/dashboard'}>
          <div className="font-bold text-lg text-main border-b-4 border-transparent hover:border-main transition-colors duration-300 w-fit flex items-center my-4">
            <i className="w-5 h-5 flex items-center justify-center fa-solid fa-angle-left fa-sm"></i>
            <p>Regresar</p>
          </div>
        </Link>
        <main className="flex flex-col gap-4 py-5">
          <SearchUsers setData={setData} setLoading={setLoading} />
          <UsersTable data={data} loading={loading} />
        </main>
      </div>
    </>
  )
}

export default UsersView
