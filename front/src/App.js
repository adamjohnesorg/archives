import Router from './Router'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { useEffect, useState } from 'react'

function App() {

  const [owners, setOwners] = useState([])
  useEffect(() => {
    fetch('http://192.168.1.77:3000/api/owners')
    .then(res => res.json()).then(owners => { setOwners(owners) })
    .catch(err => console.log(err))
  })

  return (
    <div className='flex flex-col 2xl:h-screen'>
      <Navbar members = { owners }/>
      <div className='flex flex-col items-center flex-grow bg-zinc-800'>
        <Router members = { owners }/>
      </div>
      <Footer />
    </div>
  );
}

export default App