import tony from '../imgs/tony_winner.png'

const Home = () => {
  return (
    <> 
      <div className="h-12 w-full bg-zinc-800"></div>
      <div className="flex flex-col items-center w-full bg-zinc-800">
        <div className="flex flex-col gap-3 w-11/12 text-center">
          <h1 className="text-2xl">Welcome to the MCHS { new Date().getFullYear() - 2014 }.0 Fantasy Football Archives</h1>
          <p>What started as a friendly competition among high school friends has grown into an epic tradition spanning over a decade. Here, we celebrate the triumphs, heartbreaks, questionable trades, and trash talk that have defined our league.</p>
          <p>This archive is not just a record of champions, but a testament to our loyalty, camaraderie, and shared obsession with football.</p>
          <p>Whether you're here to relive your own glory days or to remind Tony Vitale that his reign as 2024 champ was a fluke, we hope this site brings a smile to your face and a spark to your competitive spirit.</p>
        </div>
        <div className="flex flex-col w-full mt-6 mb-4 h-96">
          <img className='w-full max-h-96' src={ tony } alt='our champion'/>
        </div>
        <div className="flex flex-col gap-3 w-11/12 text-center">
          <p>Here’s to { new Date().getFullYear() - 2014 } years of friendship, football, and the fantasy league that refuses to die. May the best manager win!</p>
        </div>
        <div>
          
        </div>
      </div>
    </>
  )
}


export default Home;