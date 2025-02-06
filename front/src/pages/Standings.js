import { useEffect, useState } from 'react'
import _ from 'lodash';

const Standings = () => {

  const [defaultState, setDefaultState] = useState([])
  const [standings, setStandings] = useState([])
  const [standingsOld, setStandingsOld] = useState([])
  const [pfHeavy, setPfHeavy] = useState([])
  const [pfLight, setPfLight] = useState([])
  const [paHeavy, setPaHeavy] = useState([])
  const [paLight, setPaLight] = useState([])
  const [togglePf, setTogglePf] = useState(true)
  const [togglePa, setTogglePa] = useState(true)
  const [membersOrganized, setMembersOrganized] = useState([])
  const [worstRecords, setWorstRecords] = useState([])
  const [bestRecords, setBestRecords] = useState([])
  const items = []

  const handleYear = () =>
  {
    setStandings(prevStandings => 
    {
      return (_.isEqual(prevStandings, standingsOld) ? defaultState : standingsOld)
    })
  }

  const handleMembers = () =>
  {
    setStandings(membersOrganized)
  }

  const handlePf = () =>
  {
    setTogglePf(prevTogglePf => 
    {
      const newTogglePf = !prevTogglePf
      setStandings(newTogglePf ? pfHeavy : pfLight)
      return newTogglePf
    })
  }

  const handlePa = () =>
  {
    setTogglePa(prevTogglePa => 
    {
      const newTogglePa = !prevTogglePa
      setStandings(newTogglePa ? paHeavy : paLight)
      return newTogglePa
    })
  }

  const handleRecords = () =>
  {
    setStandings(prevStandings => 
    {
      return (_.isEqual(prevStandings, bestRecords) ? worstRecords : bestRecords)
    })
  }

  items.push(
    <tbody>
      {standings.map((user, i) => (
      <tr className='border-b-2 border-zinc-700' key={`${user.firstName} + ${user.lastName} + ${i}`}>
        <td>{user.year}</td>
        <td>{user.firstName + ' ' + user.lastName}</td>
        <td>{user.team}</td>
        <td>{user.pf}</td>
        <td>{user.pa}</td>
        <td>{user.record}</td>
      </tr>
      ))}
    </tbody>
  )

  useEffect(() => {
      fetch('http://192.168.1.77:3000/fullstandingsrecent').then(res => res.json()).then(standings => { setStandings(standings); setDefaultState(standings); setStandingsOld(standings.slice().reverse()) }).catch(err => console.log(err))
      fetch('http://192.168.1.77:3000/fullstandingspfheavy').then(res => res.json()).then(pf => setPfHeavy(pf)).catch(err => console.log(err))
      fetch('http://192.168.1.77:3000/fullstandingspflight').then(res => res.json()).then(pf => setPfLight(pf)).catch(err => console.log(err))
      fetch('http://192.168.1.77:3000/fullstandingspaheavy').then(res => res.json()).then(pa => setPaHeavy(pa)).catch(err => console.log(err))
      fetch('http://192.168.1.77:3000/fullstandingspalight').then(res => res.json()).then(pa => setPaLight(pa)).catch(err => console.log(err))
      fetch('http://192.168.1.77:3000/fullstandingsmembers').then(res => res.json()).then(members => setMembersOrganized(members)).catch(err => console.log(err))
      fetch('http://192.168.1.77:3000/fullstandingsworstrecords').then(res => res.json()).then(records => setWorstRecords(records)).catch(err => console.log(err))
      fetch('http://192.168.1.77:3000/fullstandingsbestrecords').then(res => res.json()).then(records => setBestRecords(records)).catch(err => console.log(err))
  }, [])

  return (
    <div className='w-full text-center'>
      <table className='text-[10px] bg-zinc-800'>
        <thead className='sticky top-16 z-50 bg-zinc-800'>
          <tr>
            <th className='w-1/12'>Year<button className='text-center' onClick={ e => handleYear() }>⇅</button></th>
            <th className='w-1/12'>Member <button className='text-center' onClick={ e => handleMembers() }>⇅</button></th>
            <th className='w-2/12'>Team Name</th>
            <th className='w-1/12'>PF<button onClick={ e => handlePf() }>⇅</button></th>
            <th className='w-1/12'>PA<button onClick={ e => handlePa() }>⇅</button></th>
            <th className='w-1/12'>Record<button onClick={ e => handleRecords() }>⇅</button></th>
          </tr>
        </thead>
      { items }
      </table>
    </div>
  )
}

export default Standings