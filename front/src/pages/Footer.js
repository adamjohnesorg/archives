import { Link } from "react-router-dom"

const Footer = () =>
{
  return (
    <>
        <div className="h-4 bg-zinc-800"></div>
        <div className="h-0.5 bg-sky-900"></div>
        <div className="flex justify-evenly items-center bg-zinc-800 h-10">
            <div>
                <Link className='text-lg font-poppins' to="/Standings">Standings</Link>
            </div>
            <div>
                <p>|</p>
            </div>
            <div>
                <Link className='text-lg font-poppins' to="/Rosters">Rosters</Link>
            </div>
            <div>
                <p>|</p>
            </div>
            <div>
                <Link className='text-lg font-poppins' to="/Drafts">Drafts</Link>
            </div>
            <div>
                <p>|</p>
            </div>
            <div>
                <Link className='text-lg font-poppins' to="/Champions">Champions</Link>
            </div>
        </div>
    </>
  )
}

export default Footer