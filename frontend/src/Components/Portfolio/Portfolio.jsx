import { useEffect, useState } from 'react'
import './Portfolio.css'
import { Navbar } from '../Navbar/Navbar'
import { Footer } from '../Footer/Footer'
import LocationMap from '../LocationMap/LocationMap'
import invImg from '../../assets/noInver.png'
import OtherProjects from '../OtherProjects/OtherProjects'
import { getMyInvestments } from '../../lib/data'

function calcularMontoFinal(montoInicial, meses, interesAnual) {
  const tasaMensual = interesAnual / 12 / 100
  const montoFinal = montoInicial * Math.pow(1 + tasaMensual, meses)
  return montoFinal.toFixed(2)
}

function calcularFechaConMeses(fechaInicial, meses) {
  const fecha = new Date(fechaInicial)
  fecha.setMonth(fecha.getMonth() + meses) // Sumar los meses a la fecha

  const dia = String(fecha.getDate()).padStart(2, '0')
  const mes = String(fecha.getMonth() + 1).padStart(2, '0') // getMonth() es 0-indexed, por eso sumamos 1
  const anio = String(fecha.getFullYear()).slice(-2) // Obtener los últimos dos dígitos del año

  return `${dia}/${mes}/${anio}`
}

export const Portfolio = () => {
  const dataJSON = localStorage.getItem('data')
  const user = JSON.parse(dataJSON)
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function getData() {
      try {
        const response = await getMyInvestments()
        setProjects(response)
        console.log(projects)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }
    getData()
  }, [])

  return (
    <>
      <Navbar userHome={'userHome'} loggedIn={true} />

      <div className="px-20">
        <div className="container pt-5">
          <h1 className="font-bold text-2xl">Hola, {user.name}!</h1>
          <h2 className="font-bold text-3xl">Tus Inversiones inmobilarias</h2>

          <div className="grid grid-cols-2 gap-4 py-5 mt-3">
            {projects.map((item, index) => (
              <div
                key={index}
                className="col-span-1 h-[300px] bg-slate-200 rounded-md px-3 py-3 flex gap-3"
              >
                <div className="w-1/2 flex flex-col gap-2 items-center overflow-hidden">
                  <img
                    src={item.property.photosUrl.split(',')[0]}
                    alt=""
                    className="aspect-square w-3/4 object-cover"
                  />
                  <p className="font-bold text-xl z-10">{item.property.name}</p>
                </div>
                <div className="w-1/2 flex flex-col items-center justify-between py-4">
                  <p className="font-bold text-xl italic">Monto invertido:</p>
                  <p className="font-bold text-2xl text-green-700">
                    ${item.amount}
                  </p>

                  <p className="font-bold text-xl italic">
                    Podrás retiral tu capital el día
                  </p>
                  <p className="font-bold text-2xl text-blue-500">
                    {calcularFechaConMeses(item.date, item.property.time)}
                  </p>

                  <p className="font-bold text-xl italic">Monto a retirar</p>
                  <p className="font-bold text-2xl text-yellow-500">
                    $
                    {calcularMontoFinal(
                      item.amount,
                      item.property.time,
                      item.property.profit
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <LocationMap />
      <Footer />
    </>
  )
}
