import './PropertyDetail.css'
import { Navbar } from '../Navbar/Navbar'
import { Footer } from '../Footer/Footer'
import LocationMap from '../LocationMap/LocationMap'
import { Property } from '../Property/Property'
import OtherProjects from '../OtherProjects/OtherProjects'
import PropertyFilter from '../PropertyFilter/PropertyFilter'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const PropertyDetail = () => {
  const { id } = useParams()
  // const [loading, setLoading] = useState(true)
  const [projects, setProjects] = useState([])
  const [project, setProject] = useState([])

  useEffect(() => {
    async function getData() {
      try {
        console.log(id)
        const response = await axios.get(
          'https://brickly-backend.onrender.com/api/v1/properties'
        )

        setProjects(response.data)
        setProject(response.data.filter(item => item.id == id))
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, [id])

  console.log(project)
  return (
    <>
      <Navbar PropertyDetail={'PropertyDetail'} />

      <div className="px-20">
        <div className="container-fluid">
          <div className="row">
            {project.length > 0 && <Property property={project[0]} />}
          </div>
        </div>

        <hr className="w-full mb-24" />
      </div>
      <LocationMap />
      <Footer
        style={{
          padding: '40px 16px',
          height: '190px',
        }}
      />
    </>
  )
}
