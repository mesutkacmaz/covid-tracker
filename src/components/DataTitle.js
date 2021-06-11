import moment from 'moment'

const DataTitle = ({ text, dataDate }) => {

  const formatDate = (dataDate) => {
    return moment(dataDate).format('MMMM Do YYYY, h:mm:ss a')
  }

  return (
    <div className='text-center'>
      <h2>{text}</h2>
      <div className='mt-3 mb-4'>{formatDate(dataDate)}</div>
    </div>
  )
}

export default DataTitle
