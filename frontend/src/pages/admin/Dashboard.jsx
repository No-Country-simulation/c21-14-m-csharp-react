import { useEffect, useState } from 'react'
import {
  getPropertiesCount,
  getRecentlyActivity,
  getTotalInvestments,
} from './lib/getData'
import RecentlyCard from './components/RecentlyCard'
import PropertiesCard from './components/PropertiesCard'
import InvestorsCard from './components/InvestorsCard'
import { Header } from './components/Header'
import { Loading } from './components/Loading'

const Dashboard = () => {
  const [recent, setRecent] = useState([])
  const [propertiesCount, setPropertiesCount] = useState({
    totalProperties: '',
    recentPropertyCount: '',
    countByType: [],
    countByStatus: [],
  })
  const [totalInvestments, setTotalInvestments] = useState({
    usersWithInvestmentCount: '',
    totalInvestmentAmount: '',
  })

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const [recentActivity, propertiesCount, totalInvestments] =
        await Promise.all([
          getRecentlyActivity(),
          getPropertiesCount(),
          getTotalInvestments(),
        ])

      setRecent(recentActivity)
      setPropertiesCount(propertiesCount)
      setTotalInvestments(totalInvestments)

      setLoading(false)
    }

    fetchData()
  }, [])
  return (
    <div>
      <Header />
      {loading && <Loading />}
      {!loading && (
        <main className="flex justify-evenly py-10">
          <RecentlyCard activity={recent} />
          <PropertiesCard propertiesCount={propertiesCount} />
          <InvestorsCard data={totalInvestments} />
        </main>
      )}
    </div>
  )
}

export default Dashboard
