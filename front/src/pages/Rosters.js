import { useEffect, useState } from "react"

const Rosters = () =>
{
  const [roster, setRoster] = useState([]) // eslint-disable-next-line no-unused-vars
  const [uniqueYears, setUniqueYears] = useState([]) // eslint-disable-next-line no-unused-vars
  const [uniqueNames, setUniqueNames] = useState([]) // eslint-disable-next-line no-unused-vars
  const [selectedYear, setSelectedYear] = useState(0) // eslint-disable-next-line no-unused-vars
  const [selectedName, setSelectedName] = useState('') // eslint-disable-next-line no-unused-vars
  const [selectedRoster, setSelectedRoster] = useState([])

  useEffect(() => {
    fetch('api/rosters').then(res => res.json()).then((roster) => 
    {
      setRoster(roster)
      setUniqueYears([...new Set(roster.map(team => team.rosterYear))]);
      setUniqueNames([...new Set(roster.map(team => team.firstName + " " + team.lastName))])
      setSelectedRoster(() => 
      { // eslint-disable-next-line
        return roster.filter(team => (team.firstName + " " + team.lastName == "Trey Aguirre" && team.rosterYear == 2016))
      })
      setSelectedName("Trey Aguirre")
      setSelectedYear(2016)
    }).catch(err => console.log(err)) // eslint-disable-next-line
  }, [])

  const filterRosters = (value) =>
  {
    if (roster.length === 0) { return }
    setSelectedRoster([]); // Clear previous state before filtering
    if (typeof value === "number")
    {
      setSelectedYear(value); // eslint-disable-next-line
      setSelectedRoster(roster.filter(team => team.rosterYear == value && (team.firstName + " " + team.lastName == selectedName)));
    }
    else
    {
      setSelectedName(value); // eslint-disable-next-line
      setSelectedRoster(roster.filter(team => team.rosterYear == selectedYear && (team.firstName + " " + team.lastName == value)));
    }
  }

  return (
    <>
      <div className="h-1 bg-zinc-800 w-full"></div>
      <div className="bg-zinc-800 w-full">
        <div className="flex">
          <div className="flex justify-evenly w-full text-center">
            <div className="flex flex-col">
              <label className="text-xl italic">Year</label>
              <div className="flex bg-zinc-900 items-center p-1">
                <select className='p-1' onChange={e => filterRosters(Number(e.target.value))}>
                  { uniqueYears.map((year) => 
                  (
                    <option key={ year }>{ year }</option>
                  ))}
                </select>
                <p>▼</p>
              </div>
            </div>
            <div className="flex flex-col">
              <label className="text-xl italic">Member</label>
              <div className="flex bg-zinc-900 p-1 items-center">
              <select className='p-1' onChange={ e => filterRosters(e.target.value) }>
                { uniqueNames.map((name) => 
                (
                  <option key = { name }>{ name }</option>
                ))}
              </select>
              <p>▼</p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-4"></div>
        <table className="w-11/12 text-center ml-auto mr-auto">
          { selectedRoster.map(team => (
              <tbody>
                <tr className="bg-zinc-700 p-1" key={`${team.year}-${team.team}-${Math.random()}`}>
                  <th className='w-4/12 text-[16px]'>Team</th>
                  <td className="font-mono text-[17px] p-1">{team.team}</td>
                </tr>
                <tr key={`${team.year}-${team.quarterback}-${Math.random()}`}>
                  <th className='text-[16px]'>QB</th>
                  <td>{team.quarterback}</td>
                </tr>
                <tr className="bg-zinc-700 p-1" key={`${team.year}-${team.runningbackOne}-${Math.random()}`}>
                  <th className='text-[16px]'>RB1</th>
                  <td>{team.runningbackOne}</td>
                </tr>
                <tr className="p-1" key={`${team.year}-${team.runningbackTwo}-${Math.random()}`}>
                  <th className='text-[16px]'>RB2</th>
                  <td>{team.runningbackTwo}</td>
                </tr>
                <tr className="bg-zinc-700 p-1" key={`${team.year}-${team.wideReceiverOne}-${Math.random()}`}>
                  <th className='text-[16px]'>WR1</th>
                  <td>{team.wideReceiverOne}</td>
                </tr>
                <tr className="border-t border-t-zinc-700" key={`${team.year}-${team.wideReceiverTwo}-${Math.random()}`}>
                  <th className='text-[16px]'>WR2</th>
                  <td>{team.wideReceiverTwo}</td>
                </tr>
                <tr className="bg-zinc-700 p-1" key={`${team.year}-${team.tightEnd}-${Math.random()}`}>
                  <th className='text-[16px]'>TE</th>
                  <td>{team.tightEnd}</td>
                </tr>
                <tr className="border-t border-t-zinc-700" key={`${team.year}-${team.flex}-${Math.random()}`}>
                  <th className='text-[16px]'>Flex <sup>[1]</sup></th>
                  <td>{team.flex}</td>
                </tr>
                <tr className="bg-zinc-700 p-1" key={`${team.year}-${team.kicker}-${Math.random()}`}>
                  <th className='text-[16px]'>Kicker</th>
                  <td>{team.kicker}</td>
                </tr>
                <tr className="border-t border-t-zinc-700" key={`${team.year}-${team.defense}-${Math.random()}`}>
                  <th className='text-[16px]'>D/ST</th>
                  <td>{team.defense}</td>
                </tr>
                <tr className="bg-zinc-700 p-1" key={`${team.year}-${team.benchOne}-${Math.random()}`}>
                  <th className='text-[16px]'>Bench</th>
                  <td>{team.benchOne}</td>
                </tr>
                <tr className="border-t border-t-zinc-700" key={`${team.year}-${team.benchTwo}-${Math.random()}`}>
                  <th className='text-[16px]'>Bench</th>
                  <td>{team.benchTwo}</td>
                </tr>
                <tr className="bg-zinc-700 p-1" key={`${team.year}-${team.benchThree}-${Math.random()}`}>
                  <th className='text-[16px]'>Bench</th>
                  <td>{team.benchThree}</td>
                </tr>
                <tr className="border-t border-t-zinc-700" key={`${team.year}-${team.benchFour}-${Math.random()}`}>
                  <th className='text-[16px]'>Bench</th>
                  <td>{team.benchFour}</td>
                </tr>
                <tr className="bg-zinc-700 p-1" key={`${team.year}-${team.benchFive}-${Math.random()}`}>
                  <th className='text-[16px]'>Bench</th>
                  <td >{team.benchFive}</td>
                </tr>
                <tr className="border-t border-t-zinc-700" key={`${team.year}-${team.benchSix}-${Math.random()}`}>
                  <th className='text-[16px]'>Bench</th>
                  <td >{team.benchSix}</td>
                </tr>
                <tr className="bg-zinc-700 p-1 " key={`${team.year}-${team.IR}-${Math.random()}`}>
                  <th className='text-[16px]'>IR</th>
                  <td>{team.IR}</td>
                </tr>
              </tbody>
            ))
          }
        </table>
        <div className="h-1 bg-zinc-800 w-full p-1"></div>
        <p className="text-[8px]">1. Flex is used in place of WR3 for seasons before 2018.</p>
      </div>
    </>
  )
}

export default Rosters