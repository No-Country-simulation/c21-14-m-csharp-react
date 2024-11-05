import { useNavigate } from 'react-router-dom'
import OtherProjects from '../OtherProjects/OtherProjects'

export const SectionProject = () => {
  const navigate = useNavigate()
  const projects = [
    {
      id: 4,
      adminId: 1,
      name: 'Polo Comercial San Telmo',
      type: 'commercial',
      country: 'Argentina',
      city: 'Buenos Aires',
      location: 'F9Q5+8R, Av. Independencia, Buenos Aires C1103',
      description:
        'Centro comercial en el corazón de San Telmo con locales y restaurantes',
      minAmount: 2500,
      area: 9000,
      time: 30,
      profit: 14,
      status: 'En operación',
      photosUrl:
        'https://i.ibb.co/yVp5W7d/image.png,https://i.ibb.co/KznYB0K/image.png,https://i.ibb.co/K0xBj42/image.png,https://i.ibb.co/1LGt6pm/image.png,https://i.ibb.co/w4p1Q9d/image.png',
      createdAt: '2024-10-21T17:42:13.045Z',
      updatedAt: '2024-11-01T11:31:16.930Z',
    },
    {
      id: 5,
      adminId: 1,
      name: 'Parque Industrial La Matanza',
      type: 'industrial',
      country: 'Argentina',
      city: 'Buenos Aires',
      location: '6VWP+73, Ruta 3, La Matanza, Buenos Aires',
      description: 'Parque industrial con grandes almacenes y fábricas',
      minAmount: 1000,
      area: 12000,
      time: 60,
      profit: 10,
      status: 'En construcción',
      photosUrl:
        'https://i.ibb.co/6Y33Sz3/image.png,https://i.ibb.co/8r9JbD7/image.png,https://i.ibb.co/3hP7ySH/image.png,https://i.ibb.co/gJ9XPp4/image.png,https://i.ibb.co/ncCycqT/image.png',
      createdAt: '2024-10-21T17:44:13.367Z',
      updatedAt: '2024-11-01T11:40:02.991Z',
    },
    {
      id: 6,
      adminId: 1,
      name: 'Residencial Los Olivos',
      type: 'residential',
      country: 'Argentina',
      city: 'Córdoba',
      location: 'QH9M+12, Barrio Los Olivos, Córdoba 5000',
      description: 'Complejo residencial con casas y departamentos de lujo',
      minAmount: 4500,
      area: 4500,
      time: 36,
      profit: 16,
      status: 'Terminado',
      photosUrl:
        'https://i.ibb.co/kSdsjyj/image.png,https://i.ibb.co/PcyYs83/image.png,https://i.ibb.co/9w9g8Cv/image.png,https://i.ibb.co/k3RBKKG/image.png,https://i.ibb.co/QvkrDQZ/image.png',
      createdAt: '2024-10-21T17:50:07.798Z',
      updatedAt: '2024-11-01T11:51:00.527Z',
    },
  ]

  const handleButtonClick = () => {
    navigate('/PropertyDetail') // Cambia a la ruta deseada
  }
  return (
    <>
      <div className="my-48">
        <h2 className="text-center text-4xl font-bold mb-5">
          Proyectos que te pueden interesar
        </h2>

        <div onClick={handleButtonClick} className="grid grid-cols-3 w-full">
          {projects.map((item, index) => {
            index < 3 && <OtherProjects card={item} key={index} />
          })}
        </div>
      </div>
    </>
  )
}
