import { useEffect, useState } from 'react'
import Hourglass from './Hourglass'
import DataTitle from './DataTitle'
import DataBoxes from './DataBoxes'
import CountrySelect from './CountrySelect'

const Home = () => {
  const [loading, setLoading] = useState(true)
  const [title, setTitle] = useState('Global')
  const [dataDate, setDataDate] = useState('')
  const [stats, setStats] = useState({})
  const [countries, setCountries] = useState([])
  
  useEffect(() => {
    const getCovidData = async () => {
      const covidData = await fetchCovidData()
      setDataDate(covidData.Date)
      setStats(covidData.Global)
      setCountries(covidData.Countries)
      setLoading(false)
    }

    getCovidData()
  }, [])

  const fetchCovidData = async () => {
    const res = await fetch('https://api.covid19api.com/summary')
    const data = await res.json()
    return data
  }

  const getCountryData = (country) => {
    setStats(country)
    setTitle(country.Country)
  }

  const clearCountryData = async () => {
    setLoading(true)
    const data = await fetchCovidData()
    setTitle('Global')
    setStats(data.Global)
    setLoading(false)
  }

  return (
    <>
      {!loading ? <main>
        <DataTitle text={title} dataDate={dataDate}/>
        <DataBoxes stats={stats} />
        <CountrySelect getCountry={country => getCountryData(country)} countries={countries} />
        {stats.Country && <button className='btn btn-warning mt-3 text-light' onClick={clearCountryData}>Clear Country</button>}
      </main> : <main className='flex flex-col align-items-center justify-content-center text-center'>
          <div className='text-dark mt-3 mb-1'>Fetching Data</div>
          <Hourglass />
        </main>}
    </>
  )
}

export default Home
