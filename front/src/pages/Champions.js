import React, { useEffect, useState } from 'react'
import trophy from '../imgs/trophy2.png'

const Champions = () =>
{
  const [champions, setChampions] = useState([])

  useEffect(() => {
    fetch('api/champions').then(res => res.json()).then(data => setChampions(data)).catch(err => console.log(err))
  }, [])

  const displayTrophies = (iterations) =>
  {
    const fragments = <img src={ trophy }
                           alt='trophies'
                           className='h-8 w-6'>
                      </img>
    const jsxElements = []
    for (let i = 0; i < iterations; i++)
    {
      jsxElements.push(fragments)
    }
    return jsxElements 
  }

  console.log(champions)
  if (champions.length === 0) { return <p>Loading...</p>}
  return (
    <div className='w-full'>
      <h1 className='bg-gradient-to-br from-yellow-300 to-yellow-700 text-2xl text-center text-black'>Hall of Fame</h1>
      <table className='bg-zinc-800 w-full min-h-dvh'>
        <thead>
          <tr>
            <td className='w-6/12 text-xl'>Member</td>
            <td className='text-xl'>Team</td>
            <td className='text-xl'>Year</td>
          </tr>
        </thead>
        <tbody>
          { champions.map((champion, i) => (
            <tr key={ champion.firstName+champion.lastName+champion.year }
                className={`${i % 2 !== 0 ? 'bg-zinc-800' : 'bg-zinc-700'}`}>
              <td className='flex p-1 gap-1 text-[12px]'>{ champion.firstName + ' ' + champion.lastName} {displayTrophies(champion.championships)}
              </td>
              <td className='p-1 text-[12px]'>{ champion.team }</td>
              <td className='p-1'>{ champion.year }</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Champions