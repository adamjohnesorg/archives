import { Link } from "react-router-dom";
import Select from 'react-select';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import logo from '../imgs/archives_logo.png'
import '../styles/navbar.css'

var names = []

const Navbar = () => {

  const [selectedOption, setSelectedOption] = useState('/Home')
  const [owners, setOwners] = useState([])
  
  let navigate = useNavigate()

  useEffect(() => {
    fetch('http://192.168.1.77:3000/owner').then(res => res.json()).then(owners => setOwners(owners)).catch(err => console.log(err))
  }, [])

  if (owners.length > 0)
  {
    if (names.length < owners.length)
    {
      owners.map((person) =>
        names.push({ value: '/' + person.firstName+person.lastName, label: person.firstName + ' ' + person.lastName})
      )
    }
    console.log(names)
    return (
      <>
        <div className="flex flex-col">
          <div className='flex justify-evenly gap-8'>
            <div className="flex items-center justify-center h-12 gap-6 w-6/12">
              <div>
                <Select 
                  defaultValue={ selectedOption }
                  onChange={ setSelectedOption }
                  options={ names }
                />
                <Link className='hoverElement' to="/Home">Home</Link>
              </div>
              <div>
                <Link className='hoverElement' to="/PageTwo">Champions</Link>
              </div>
            </div>
            <div className="flex items-center justify-center h-12 gap-6 w-6/12">
              <Link className='hoverElement' to={ selectedOption.value }>Standings</Link>
              <Link className='hoverElement' to="/PageTwo">Members</Link>
            </div>
          </div>
          <div className='flex justify-center h-10 bg-sky-900'>
            <img src={ logo } alt='archives logo' id='archives_logo_small'
                className='absolute top-9 rounded-full'/>
          </div>
          <div className="h-12"></div>
        </div>
      </>
    );
  };
}
export default Navbar