import { Link } from 'react-router-dom'

function OtherProjects({ card }) {
  return (
    <div className="h-[600px] border-2 rounded-md border-main col-span-1 py-3 px-4 flex flex-col justify-between">
      <h2 className="font-bold text-lg">{card.name}</h2>
      <div className="h-[200px] w-full rounded-sm overflow-hidden">
        <img
          src={card.photosUrl.split(',')[0]}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col">
        <div className="flex flex-col">
          <p className="font-bold text-lg">Precio de inversión: </p>
          <p className="text-lg">${card.minAmount}</p>
        </div>
        <div className="flex flex-col py-3 h-[180px]">
          <p className="font-bold text-lg">Descripción</p>
          <p className="description">{card.description}</p>
        </div>

        <a
          href={'/propertydetail/' + card.id}
          className="bg-main text-white rounded-md px-3 py-3 text-center"
        >
          Ver más
        </a>
      </div>
    </div>
  )
}

export default OtherProjects
