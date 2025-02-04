import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

//import _ from 'lodash';
import logo from '../imgs/archives_logo.png'
import '../styles/navbar.css'

var names = []

const Navbar = () => {

  useEffect(() => {
    console.log('fetching...')
    fetch('http://192.168.1.77:3000/owner').then(res => res.json()).then(owners => setOwners(owners)).catch(err => console.log(err))
  }, [])

  const [owners, setOwners] = useState([])
  const navigate = useNavigate()
  
  const handlePlayerRoutes = (e) =>
  {
    navigate('/' + e.replace(' ', ''))
  }


  if (owners.length > 0)
  {
    if (names.length < owners.length)
    {
      owners.map((person) =>
          names.push(person.firstName+ ' ' +person.lastName)
      )
      names.sort()
    }

    return (
      <>
        <div className="flex flex-col">
          <div className='flex justify-evenly h-16'>
            <div className="flex items-center justify-center w-4/12 bg-neutral-800">
              <div className="w-full text-center">
                    <select 
                    className="w-8/12 text-center text-white text-sm p-2 border border-sky-900"
                    onChange={ e => handlePlayerRoutes(e.target.value) }>
                      <option value='Home'>Home ▼</option>
                      { names.map((person)=>
                        (
                          <option>
                            { person }
                          </option>
                        )
                      )}
                    </select>
                </div>
            </div>
            <div className="flex items-center justify-center w-4/12 bg-neutral-800">
              <div className="text-center">     
                <p className="text-xl font-serif">MCHS { new Date().getFullYear() - 2014 }.0 Archives</p>
              </div>
            </div>
            <div className="flex items-center justify-center w-4/12 bg-neutral-800">
              <div className='flex justify-center'>
                <a href="http://192.168.1.77:3001/home">
                  <img src={ logo } 
                      alt='archives logo' 
                      id='archives_logo_small'
                      className='rounded-full h-14'
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="h-1 bg-neutral-900"></div>
          <div className="h-14"></div>
        </div>
      </>
    );
  };
}
export default Navbar