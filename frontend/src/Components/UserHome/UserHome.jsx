import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Navbar } from '../Navbar/Navbar'
import { Footer } from '../Footer/Footer'
import LocationMap from '../LocationMap/LocationMap'
import OtherProjects from '../OtherProjects/OtherProjects'
import axios from 'axios'
import SearchProperties from '../../pages/admin/components/SearchProperties'
import { getProfile } from '../../lib/data'

export const UserHome = () => {
  const [loading, setLoading] = useState(true)
  const [projects, setProjects] = useState([])
  const [name, setName] = useState(false)

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(
          'https://brickly-backend.onrender.com/api/v1/properties'
        )
        setProjects(response.data)
        const userProfile = await getProfile()
        setName(userProfile.name)
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, [])

  return (
    <div>
      <Navbar userHome={true} loggedIn={true} />
      <div className="pt-20 px-20">
        {name ? (
          <div className="container pt-5">
            <h1 className="text-4xl text-main font-semibold mb-5">
              Hola, {name}!
            </h1>
            <h2 className="text-3xl mb-2">Proyectos Brickly</h2>
            <p className="text-3xl mb-2">Quizás te puedan interesar</p>
            <div className="m-auto">
              <div className="grid grid-cols-4 gap-4 py-5 mt-3">
                {projects.map(
                  (project, index) =>
                    index < 4 && <OtherProjects card={project} key={index} />
                )}
              </div>
            </div>
          </div>
        ) : (
          <div>No hay data del perfil disponible</div>
        )}

        <hr className="w-full mb-24" />
        <h1 className="text-2xl font-bold text-main mb-5">
          Otros proyectos para invertir
        </h1>
        <SearchProperties setData={setProjects} setLoading={setLoading} />
        <div className="m-auto">
          <div className="grid grid-cols-4 gap-4 py-5 mt-3">
            {projects.map((project, index) => (
              <OtherProjects key={project.id} card={project} />
            ))}
          </div>
        </div>
      </div>
      <LocationMap />
      <Footer />
    </div>
  )
}
