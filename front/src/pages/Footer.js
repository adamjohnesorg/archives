import { Link } from "react-router-dom"

const Footer = () =>
{
  return (
    <>
        <div className="h-4 bg-zinc-800"></div>
        <div className="flex justify-evenly items-center h-10 bg-gradient-to-r from-zinc-800 to-slate-700 border-t-2 border-t-black">
            <div>
                <Link className='text-lg font-poppins font-bold' to="/Standings">Standings</Link>
            </div>
            <div>
                <p>|</p>
            </div>
            <div>
                <Link className='text-lg font-poppins font-bold' to="/Rosters">Rosters</Link>
            </div>
            <div>
                <p>|</p>
            </div>
            <div>
                <Link className='text-lg font-poppins font-bold' to="/Drafts">Drafts</Link>
            </div>
            <div>
                <p>|</p>
            </div>
            <div>
                <Link className='text-lg font-poppins font-bold' to="/Champions">Champions</Link>
            </div>
        </div>
    </>
  )
}

export default Footer