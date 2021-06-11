const CountrySelect = ({ countries, getCountry }) => {
  const onChange = (e) => {
    const country = countries.find(item => item.ID === e.target.value)

    getCountry(country)
  }

  return (
    <select className='form-select mt-3' onChange={onChange}>
      <option value="0">Select Country</option>
      {countries.map(country => (
        <option key={country.ID} value={country.ID}>{country.Country}</option>
      ))}
    </select>
  )
}

export default CountrySelect
