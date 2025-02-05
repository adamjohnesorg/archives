import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

//import _ from 'lodash';
import logo from '../imgs/archives_logo.png'
import '../styles/navbar.css'

var names = []

const Navbar = () => {

  const [owners, setOwners] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    console.log('fetching...')
    fetch('http://192.168.1.77:3000/owner').then(res => res.json()).then(owners => setOwners(owners)).catch(err => console.log(err))
  }, [])
  
  const handlePlayerRoutes = (e) =>
  {
    navigate('/' + e.replace(' ', ''))
  }

  console.log(owners)
  if (names.length < owners.length)
  {
    owners.map((person) =>
        names.push(person.firstName+ ' ' +person.lastName)
    )
    names.sort()
  }

  return (
    <>
      <div className="flex flex-col items-center">
        <div className='flex justify-evenly h-16 w-full border-b-2 border-b-sky-900'>
          <div className="flex items-center w-4/12 bg-zinc-800">
            <div className="w-full text-center">
                <p className="text-ss">Member Profiles</p>
                <select 
                className="w-8/12 text-center text-white text-xs p-2 border border-sky-900"
                onChange={ e => handlePlayerRoutes(e.target.value) }>
                  <option value='Home'>Home ▼</option>
                  { names.map((person, index)=>
                    (
                      <option key={ index }>
                        { person }
                      </option>
                    )
                  )}
                </select>
            </div>
          </div>
          <div className="w-1/12 bg-zinc-800"></div>
          <div className="flex items-center justify-center w-7/12 bg-zinc-800">
            <div className="text-center">     
              <h1 className="text-xl ">MCHS { new Date().getFullYear() - 2014 }.0 Archives</h1>
            </div>
          </div>
          <div className="absolute top-2 mr-20 bg-zinc-800">
            <div>
              <a href="http://192.168.1.77:3001/home">
                <img src={ logo } 
                    alt='archives logo' 
                    id='archives_logo_small'
                    className='rounded-full h-12'
                />
              </a>
            </div>
          </div>
        </div>
        <div className="h-2 bg-zinc-800 w-full"></div>
      </div>
    </>
  );

};
export default Navbar