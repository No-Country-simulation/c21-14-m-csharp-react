import { format } from 'date-fns'

function formatDate(dateString) {
  return format(new Date(dateString), "dd/MM/yy '|' HH:mm:ss")
}

const RecentlyCard = ({ activity }) => {
  return (
    <div className="w-96 ">
      <h2 className="bg-lighGray border-b-4 border-black text-2xl font-bold text-center py-4">
        Actividades recientes
      </h2>
      <div className="border-2 border-slate-400 px-1 h-[600px]">
        {activity.map((item, index) => {
          return (
            <div key={index} className="flex gap-2 border-b border-slate-400">
              <p className="w-3/5">{formatDate(item.date)}</p>
              <p>
                <span className="text-blue-600">{item.investor.name} </span>
                invirtió
                <span className="text-green-600"> ${item.amount} </span>
                en
                <span className="text-orange-600"> {item.property.name}</span>
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default RecentlyCard