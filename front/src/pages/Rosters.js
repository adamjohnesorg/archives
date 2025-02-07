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
    fetch('http://192.168.1.77:3000/roster').then(res => res.json()).then((roster) => 
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
      <div className="h-4 bg-zinc-800 w-full"></div>
      <div className="bg-zinc-800 w-full">
        <div className="flex">
          <div className="flex justify-evenly w-full text-center">
            <div className="flex flex-col">
              <label className="text-xl">Year</label>
              <div className="flex bg-zinc-900 p-1">
                <select className="">
                  { uniqueYears.map((year) => 
                  (
                    <option onClick={ e => filterRosters(Number(e.target.value)) }>{ year }</option>
                  ))}
                </select>
                <p>▼</p>
              </div>
            </div>
            <div className="flex flex-col">
              <label className="text-xl">Member</label>
              <div className="flex bg-zinc-900 p-1">
              <select>
                { uniqueNames.map((name) => 
                (
                  <option onClick={ e => filterRosters(e.target.value) }>{ name }</option>
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
                <tr className="border-t border-t-zinc-700" key={`${team.year}-${team.team}`}>
                  <th className='w-4/12 text- [16px]'>Team</th>
                  <td>{team.team}</td>
                </tr>
                <tr className="border-t border-t-zinc-700" key={`${team.year}-${team.quarterback}`}>
                  <th className='text- [16px]'>QB</th>
                  <td>{team.quarterback}</td>
                </tr>
                <tr className="border-t border-t-zinc-700" key={`${team.year}-${team.runningbackOne}`}>
                  <th className='text- [16px]'>RB1</th>
                  <td>{team.runningbackOne}</td>
                </tr>
                <tr className="border-t border-t-zinc-700" key={`${team.year}-${team.runningbackTwo}`}>
                  <th className='text- [16px]'>RB2</th>
                  <td>{team.runningbackTwo}</td>
                </tr>
                <tr className="border-t border-t-zinc-700" key={`${team.year}-${team.wideReceiverOne}`}>
                  <th className='text- [16px]'>WR1</th>
                  <td>{team.wideReceiverOne}</td>
                </tr>
                <tr className="border-t border-t-zinc-700" key={`${team.year}-${team.wideReceiverTwo}`}>
                  <th className='text- [16px]'>WR2</th>
                  <td>{team.wideReceiverTwo}</td>
                </tr>
                <tr className="border-t border-t-zinc-700" key={`${team.year}-${team.tightEnd}`}>
                  <th className='text- [16px]'>TE</th>
                  <td>{team.tightEnd}</td>
                </tr>
                <tr className="border-t border-t-zinc-700" key={`${team.year}-${team.flex}`}>
                  <th className='text- [16px]'>Flex <sup>[1]</sup></th>
                  <td>{team.flex}</td>
                </tr>
                <tr className="border-t border-t-zinc-700" key={`${team.year}-${team.kicker}`}>
                  <th className='text- [16px]'>Kicker</th>
                  <td>{team.kicker}</td>
                </tr>
                <tr className="border-t border-t-zinc-700" key={`${team.year}-${team.defense}`}>
                  <th className='text- [16px]'>D/ST</th>
                  <td>{team.defense}</td>
                </tr>
                <tr className="border-t border-t-zinc-700" key={`${team.year}-${team.benchOne}`}>
                  <th className='text- [16px]'>Bench</th>
                  <td>{team.benchOne}</td>
                </tr>
                <tr className="border-t border-t-zinc-700" key={`${team.year}-${team.benchTwo}`}>
                  <th className='text- [16px]'>Bench</th>
                  <td>{team.benchTwo}</td>
                </tr>
                <tr className="border-t border-t-zinc-700" key={`${team.year}-${team.benchThree}`}>
                  <th className='text- [16px]'>Bench</th>
                  <td>{team.benchThree}</td>
                </tr>
                <tr className="border-t border-t-zinc-700" key={`${team.year}-${team.benchFour}`}>
                  <th className='text- [16px]'>Bench</th>
                  <td>{team.benchFour}</td>
                </tr>
                <tr className="border-t border-t-zinc-700" key={`${team.year}-${team.benchFive}`}>
                  <th className='text- [16px]'>Bench</th>
                  <td >{team.benchFive}</td>
                </tr>
                <tr className="border-t border-t-zinc-700" key={`${team.year}-${team.benchSix}`}>
                  <th className='text- [16px]'>Bench</th>
                  <td >{team.benchSix}</td>
                </tr>
                <tr className="border-t border-t-zinc-700 border-b border-b-zinc-700" key={`${team.year}-${team.IR}`}>
                  <th className='text- [16px]'>IR</th>
                  <td>{team.IR}</td>
                </tr>
              </tbody>
            ))
          }
        </table>
        <div className="h-1 bg-zinc-800 w-full"></div>
        <p className="text-[8px]">1. Flex is used in place of WR3 for seasons before 2018.</p>
      </div>
    </>
  )
}

//<p className="text-[8px]">**flex also counts as the WR3 spot before flex was introduced</p>
export default Rosters