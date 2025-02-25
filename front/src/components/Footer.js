const Footer = () =>
{
  return (
    <div>
      <div className="flex justify-evenly items-center h-10 bg-gradient-to-r from-zinc-950 to-slate-700 border-t-2 border-t-black">
        <div>
          <a href="http://192.168.1.77:3001/standings"><button className='w-full text-md font-poppins font-bold p-1 active:bg-sky-700'>Standings</button></a>
        </div>
        <div>
            <p>|</p>
        </div>
        <div>
          <a href="http://192.168.1.77:3001/rosters"><button className='w-full text-md font-poppins font-bold p-1 active:bg-sky-700'>Rosters</button></a>
        </div>
        <div>
            <p>|</p>
        </div>
        <div>
          <a href="http://192.168.1.77:3001/drafts"><button className='w-full text-md font-poppins font-bold p-1 active:bg-sky-700'>Drafts</button></a>
        </div>
        <div>
            <p>|</p>
        </div>
        <div>
          <a href="http://192.168.1.77:3001/champions"><button className='w-full text-md font-poppins font-bold p-1 active:bg-sky-700'>Champions</button></a>
        </div>
      </div>
    </div>
  )
}

export default Footer