import hourglass from '../hourglass.gif'

const Spinner = () => {
  return (
    <img src={hourglass} style={{ width: '100px', margin: 'auto', display: 'block' }} alt='Loading...'/>
  )
}

export default Spinner
