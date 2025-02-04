import { useEffect, useState } from "react";
import tony from '../imgs/tony_winner.png'

const Home = () => {

  const [data, setData] = useState([])
  useEffect(() => {
    fetch('http://192.168.1.77:3000/currentchamp').then(res => res.json()).then(data => setData(data)).catch(err => console.log(err))
  }, [])

  if (data.length > 0)
  {
    return (
      <> 
        <div className="flex flex-col">
          <div className="flex flex-col items-center text-center gap-2">
            <h1>...and the { new Date().getFullYear() - 1} current champion of the<br />MCHS { new Date().getFullYear() - 2014 }.0 Fantasy Football league is...</h1>
            <p className='text-4xl'>{data[0].firstName} {data[0].lastName}</p>
            <img className='min-w-80 max-h-96' src={ tony } alt='our champion'/>
            <p className="text-xs">Happy for you commiss</p>
          </div>
          <div>
            
          </div>
        </div>
      </>
    )
  }
};

export default Home;