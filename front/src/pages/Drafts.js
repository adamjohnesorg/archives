import React, { useState } from 'react'
import { useEffect } from 'react'

const Drafts = () =>
{

  const [draft, setDraft] = useState([])
  const [players, setPlayers] = useState([])
  const [uniqueYears, setUniqueYears] = useState([]) // eslint-disable-next-line no-unused-vars
  const [selectedDraft, setSelectedDraft] = useState([])

  useEffect(() => {
      fetch('api/drafts').then(res => res.json()).then((draft) => 
      {
        setDraft(draft)
        setUniqueYears([...new Set(draft.map(pick => pick.year).reverse())]);
        setSelectedDraft(() => 
        { // eslint-disable-next-line
          return draft.filter(pick => pick.year == 2024)
        })
      }).catch(err => console.log(err)) // eslint-disable-next-line

      fetch('/api/players').then(res => res.json()).then(player => setPlayers(player)).catch(err => console.log(err))
      
    }, [])

  const filterDrafts = (value) =>  
  {
    if (draft.length === 0) { return }
    setSelectedDraft([]); // Clear previous state before filtering
    setSelectedDraft(draft.filter(pick => pick.year === value));
  }

  return (
    <>
      <div className='h-1 w-full bg-zinc-800'></div>
      <div className='w-full flex flex-col items-center bg-zinc-800'>
        <h1 className='text-center'>Select Year</h1>
        <select className='p-1 mb-4 w-7/12 border border-slate-600'
                onChange={e => filterDrafts(Number(e.target.value))}>
                  { uniqueYears.map((year) => 
                  (
                    <option key={ year }>{ year }</option>
                  ))}
        </select>
        <table className='w-full text-[10px] bg-zinc-800 border border-zinc-700'>
          <thead className='sticky top-16 z-50 bg-zinc-900'>
            <tr>
              <th className='w-3/12 text-[14px] text-center'>Member</th>
              <th className='w-3/12 text-[14px] text-center'>Team Name</th>
              <th className='w-5/12 text-[14px] text-center'>Player</th>
              <th className='w-1/12 text-[14px] text-center'>Pick</th>
            </tr>
          </thead>
          <tbody>
            {selectedDraft.map((player) => {
              // Find the corresponding player
              player.player = player.player.replace(/(^|\s)Jr.\s?/g, '').replace(/(^|\s)Sr.\s?/g, '')
              const playerObj = players.find((person) => person.name === player.player)
              // Construct the image URL
              const imgUrl = playerObj ? `https://sleepercdn.com/content/nfl/players/${playerObj.playerid}.jpg` : null;
              const roundHeader = player.pick % 10 === 1 ? 'Round: ' + player.round : ''
              return (
                <>
                  <tr>
                    <td colSpan='4' className='w-full text-center text-[14px] font-bold italic pt-2'>
                      { roundHeader }
                    </td>
                  </tr>
                  <tr key={ player.year + player.team + player.player }
                      className={`text-center h-10 text-[11px] ${ player.pick % 2 !== 0 ? 'bg-zinc-700' : 'bg-zinc-800'}`}>
                    <td className='font-bold'>
                      { player.firstName + ' ' + player.lastName }
                    </td>
                    <td>
                      { player.team }
                    </td>
                    <td className='flex items-center justify-center p-1'>
                      { player.player }
                      <img className='h-8' src={ imgUrl } alt={'player portrait'} />
                    </td>
                    <td>
                      { player.pick }
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Drafts