import Router from './Router'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { useEffect, useState } from 'react'

function App() {

  const [owners, setOwners] = useState([])
  useEffect(() => {
    fetch('https://archives-prod-88c3247d4963.herokuapp.com/api/owners')
    .then(res => res.json()).then(owners => { setOwners(owners) })
    .catch(err => console.log(err))
  })

  return (
    <div className='flex flex-col 2xl:min-h-screen xl:min-h-screen lg:min-h-screen md:min-h-screen'>
      <Navbar members = { owners }/>
      <div className='flex flex-col items-center flex-grow bg-zinc-800'>
        <Router members = { owners }/>
      </div>
      <Footer />
    </div>
  );
}

export default App