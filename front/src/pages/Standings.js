import { useEffect, useState } from 'react'
import _ from 'lodash';

const Standings = ({ members }) => {

  const [defaultState, setDefaultState] = useState([])
  const [standings, setStandings] = useState([])
  const [standingsOld, setStandingsOld] = useState([])
  const [pfHeavy, setPfHeavy] = useState([])
  const [pfLight, setPfLight] = useState([])
  const [paHeavy, setPaHeavy] = useState([])
  const [paLight, setPaLight] = useState([]) // eslint-disable-next-line no-unused-vars
  const [togglePf, setTogglePf] = useState(true) // eslint-disable-next-line no-unused-vars
  const [togglePa, setTogglePa] = useState(true) 
  const [membersOrganized, setMembersOrganized] = useState([])
  const [worstRecords, setWorstRecords] = useState([])
  const [bestRecords, setBestRecords] = useState([])

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

    

  useEffect(() => {
      fetch('api/fullstandingsrecent').then(res => res.json()).then(standings => { setStandings(standings); setDefaultState(standings); setStandingsOld(standings.slice().reverse()) }).catch(err => console.log(err))
      fetch('api/fullstandingspfheavy').then(res => res.json()).then(pf => setPfHeavy(pf)).catch(err => console.log(err))
      fetch('api/fullstandingspflight').then(res => res.json()).then(pf => setPfLight(pf)).catch(err => console.log(err))
      fetch('api/fullstandingspaheavy').then(res => res.json()).then(pa => setPaHeavy(pa)).catch(err => console.log(err))
      fetch('api/fullstandingspalight').then(res => res.json()).then(pa => setPaLight(pa)).catch(err => console.log(err))
      fetch('api/fullstandingsmembers').then(res => res.json()).then(members => setMembersOrganized(members)).catch(err => console.log(err))
      fetch('api/fullstandingsworstrecords').then(res => res.json()).then(records => setWorstRecords(records)).catch(err => console.log(err))
      fetch('api/fullstandingsbestrecords').then(res => res.json()).then(records => setBestRecords(records)).catch(err => console.log(err))
  }, [])

  if (members.length === 0 || standings.length === 0){ return ( <p>Loading...</p> )}

  return (
    <div className='w-full text-center flex flex-col justify-center items-center'>
      <p className='bg-zinc-800 italic text-[9px] p-1'>*Half PPR introduced in 2018</p>
      <table className='text-[10px] bg-zinc-800 w-11/12 border border-gray-500'>
        <thead className='sticky top-16 z-10 bg-zinc-900'>
          <tr>
            <th className='w-2/12 text-[11px]'>Year <button className='text-[14px] active:bg-sky-700' onClick={ e => handleYear() }>⇅</button></th>
            <th className='w-1/12 text-[11px]'>Member <button className='text-[14px] active:bg-sky-700' onClick={ e => handleMembers() }>↑</button></th>
            <th className='w-2/12 text-[11px]'>Team Name </th>
            <th className='w-1/12 text-[11px]'>PF <button className='text-[14px] active:bg-sky-700' onClick={ e => handlePf() }>⇅</button></th>
            <th className='w-1/12 text-[11px]'>PA <button className='text-[14px] active:bg-sky-700' onClick={ e => handlePa() }>⇅</button></th>
            <th className='w-2/12 text-[11px]'>Record <button className='text-[14px] active:bg-sky-700' onClick={ e => handleRecords() }>⇅</button></th>
          </tr>
        </thead>
        <tbody>
          {standings.map((user, i) => (
          <tr className={`${ i % 2 !== 0 ? 'bg-zinc-700' : 'bg-zinc-800'} h-10`} key={`${user.firstName}-${user.lastName}-${user.year}-${user.pf}`}>
            <td className='font-semibold'>{user.year}</td>
            <td>{user.firstName + ' ' + user.lastName}</td>
            <td>{user.team}</td>
            <td>{user.pf}</td>
            <td>{user.pa}</td>
            <td>{user.record}</td>
          </tr>
          ))}
        </tbody>
      </table>
      <div className='h-8'></div>
      <div className='p-2 w-10/12 flex flex-col items-center justify-center'>
        <h1 className='text-[28px]'>Overall Standings</h1>
        <table className='text-[18px] bg-zinc-800 w-full'>
          <thead>
            <tr>
              <th className='w-5/12 p-1 md:w-3/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12'>Member</th>
              <th className='w-3/12 p-1'>Record</th>
              <th className='w-3/12 p-1'>Championships</th>
              <th className='w-3/12 p-1'>Bowls</th>
            </tr>
          </thead>
          <tbody>
            { members.map((member) => (
              <tr className='h-10 border border-gray-500'>
                <td className='font-serif p-1'>{member.firstName + " " + member.lastName}</td>
                <td className='font-serif'>{member.record}</td>
                <td className='font-serif'>{member.championships}</td>
                <td className='font-serif'>{member.bowls || 0}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Standings