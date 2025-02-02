import { Link } from "react-router-dom";
import logo from '../imgs/archives_logo.png'

const Navbar = () => {

  return (
    <>
      <div className="flex flex-col">
        <div className='flex justify-evenly gap-8'>
          <div className="flex items-center justify-center h-12 gap-8 w-5/12">
            <Link to="/Home">Home</Link>
            <Link to="/PageTwo">Champions</Link>
          </div>
          <div className="flex items-center justify-center h-12 gap-8 w-5/12">
            <Link to="/Home">Standings</Link>
            <Link to="/PageTwo">Members</Link>
          </div>
        </div>
        <div className='flex justify-center h-10 bg-sky-900'>
          <img src={ logo } alt='archives logo' id='archives_logo_small'
               className='absolute top-9 rounded-full'/>
        </div>
      </div>
    </>
  );
};

export default Navbar