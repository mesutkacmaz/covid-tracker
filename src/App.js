import Header from './components/Header'
import Home from './components/Home'

const App = () => {
  return (
    <>
      <Header />
      <div className='container p-2'>
        <Home />
      </div>
    </>
  );
}

export default App;
