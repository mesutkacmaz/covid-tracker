const DataBoxes = ({ stats }) => {
  const numberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  return (
      <div className='container'>
        <div className='row text-center'>
          <div className='col-md'>
            <div className='card bg-dark text-light'>
              <div className='card-body text-center'>
                <h3 className='mb-3 card-title'>Cases</h3>
                <div>
                  <strong>New: </strong>
                  {numberWithCommas(stats.NewConfirmed)}
                </div>
                <div>
                  <strong>Total: </strong>
                  {numberWithCommas(stats.TotalConfirmed)}
                </div>
              </div>
            </div>
          </div>

          <div className='col-md'>
            <div className='card bg-dark text-light'>
              <div className='card-body text-center'>
                <h3 className='card-title mb-3'>Deaths</h3>
                <div>
                  <strong>New: </strong>
                  {numberWithCommas(stats.NewDeaths)}
                </div>
                <div>
                  <strong>Total: </strong>
                  {numberWithCommas(stats.TotalDeaths)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default DataBoxes
