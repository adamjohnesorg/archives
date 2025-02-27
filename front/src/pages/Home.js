import tony from '../imgs/tony_winner.png'

const Home = () => {
  return (
    <div className='flex flex-col'>
      <div className="h-6 w-full bg-zinc-800"></div>
      <div className="flex flex-col items-center w-full bg-zinc-800">
        <div className="flex flex-col gap-3 w-10/12 md:w-8/12 lg:w-8/12 xl:w-8/12 2xl:w-8/12 text-center">
          <div className='p-2'>
            <h1 className="text-2xl font-bold 2xl:text-5xl">Welcome to the MCHS { new Date().getFullYear() - 2014 }.0 Fantasy Football Archives</h1>
          </div>
          <p className='p-1 2xl:text-2xl font-light'>What started as a friendly competition among high school friends has grown into an epic tradition spanning over a decade. Here, we celebrate the triumphs, heartbreaks, questionable trades, and trash talk that has defined our league.</p>
          <p className='p-1 2xl:text-2xl font-light'>This archive is not just a record of champions, but a testament to our loyalty, camaraderie, and shared obsession with football.</p>
          <p className='p-1 2xl:text-2xl font-light'>Whether you're here to poke fun at Caleb, relive your own glory days, or to remind Tony that his reign as 2024 champ was a fluke, I hope these archives bring a smile to your face.</p>
        </div>
        <div className="flex flex-col w-full items-center mt-6 mb-6">
          <img className='w-full max-h-96 2xl:max-h-[500px] p-2 md:w-4/12 lg:w-4/12 xl:w-4/12 2xl:w-3/12 sm:w-6/12' src={ tony } alt='our champion'/>
        </div>
        <div className="w-10/12 md:w-8/12 lg:w-8/12 xl:w-8/12 2xl:w-8/12 text-center">
          <p className='p-1 2xl:text-2xl font-light'>Here’s to { new Date().getFullYear() - 2014 } years of friendship, football, and the fantasy league that refuses to die. May the best manager win!</p>
        </div>
      </div>
    </div>
  )
}


export default Home;