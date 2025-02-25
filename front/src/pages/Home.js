import tony from '../imgs/tony_winner.png'

const Home = () => {
  return (
    <div className='flex flex-col'>
      <div className="h-6 w-full bg-zinc-800"></div>
      <div className="flex flex-col items-center w-full bg-zinc-800">
        <div className="flex flex-col gap-3 w-11/12 text-center">
          <div className='p-2'>
            <h1 className="text-2xl font-bold">Welcome to the MCHS { new Date().getFullYear() - 2014 }.0 Fantasy Football Archives</h1>
          </div>
          <p className='p-1'>What started as a friendly competition among high school friends has grown into an epic tradition spanning over a decade. Here, we celebrate the triumphs, heartbreaks, questionable trades, and trash talk that has defined our league.</p>
          <p className='p-1'>This archive is not just a record of champions, but a testament to our loyalty, camaraderie, and shared obsession with football.</p>
          <p className='p-1'>Whether you're here to poke fun at Caleb, relive your own glory days, or to remind Tony that his reign as 2024 champ was a fluke, I hope this site brings a smile to your face.</p>
        </div>
        <div className="flex flex-col w-full items-center mt-6 mb-4 h-96">
          <img className='w-full max-h-96 p-2 md:w-4/12 lg:w-2/12 xl:w-2/12 2xl:w-2/12 sm:w-6/12' src={ tony } alt='our champion'/>
        </div>
        <div className="flex flex-col gap-3 w-11/12 text-center">
          <p className='p-1'>Here’s to { new Date().getFullYear() - 2014 } years of friendship, football, and the fantasy league that refuses to die. May the best manager win!</p>
        </div>
      </div>
    </div>
  )
}


export default Home;