import { useNavigate } from "react-router-dom";
import logo from '../imgs/archives_logo.png'
import '../styles/navbar.css'

var names = []

const Navbar = ({ members }) => {

  const navigate = useNavigate()
  
  const handlePlayerRoutes = (e) =>
  {
    navigate('/' + e.replace(' ', ''))
  }

  if (names.length < members.length)
  {
    members.map((person) =>
        names.push(person.firstName+ ' ' +person.lastName)
    )
    names.sort()
  }

  return (
    <>
      <div className="flex flex-col items-center sticky top-0 z-50">
        <div className='flex justify-evenly h-16 w-full bg-gradient-to-r from-zinc-950 to-slate-700 border-b-2 border-b-black'>
          <div className="flex items-center justify-center w-4/12">
            <div className="w-7/12 text-center">
              <p className="text-ss">Member Profiles</p>
              <select 
              className="w-11/12 text-center text-white text-ss p-2 border border-sky-900 active:bg-zinc-400"
              onChange={ e => handlePlayerRoutes(e.target.value) }>
                <option selected hidden disabled>Member ▼</option>
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
          <div className="absolute top-5 mr-24 ">
            <div>
              <a href="http://192.168.1.77:3001/home">
                <img src={ logo } 
                     alt='archives logo' 
                     id='archives_logo_small'
                     className='rounded-full h-8'
                />
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center w-7/12 p-0.5">
            <div className="text-center">     
              <h1 className="text-lg italic font-bold">MCHS { new Date().getFullYear() - 2014 }.0 Archives</h1>
            </div>
            <div className="w-4/12 mt-4">
              <a href="http://192.168.1.77:3001/home"><button className='w-full bg-zinc-800 border border-sky-900 p-1 text-sm active:bg-zinc-400'>Home</button></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );

};
export default Navbar