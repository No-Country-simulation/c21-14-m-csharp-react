import { Link } from 'react-router-dom'

const InvestorsCard = ({ data }) => {
  return (
    <div className="w-[450px] h-fit bg-lighGray px-10 py-4 rounded-lg text-center">
      <h2 className="text-2xl font-bold mb-3">Cartera de Inversores</h2>
      <section className="py-5 font-semibold text-lg flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <h3>TOTAL DE INVERSORES</h3>
          <p className="text-2xl">{data.usersWithInvestmentCount}</p>
        </div>
        <div className="flex flex-col gap-2">
          <h3>TOTAL DE INVERSIONES</h3>
          <p className="text-2xl">${data.totalInvestmentAmount}</p>
        </div>
      </section>
      <div>
        <Link to={'/admin/users'}>
          <div className="bg-main text-white font-bold rounded-lg py-4 text-lg">
            Ver Usuarios
          </div>
        </Link>
      </div>
    </div>
  )
}

export default InvestorsCard
