// import React from 'react'

// function MemberProfile({ person, picture }) {

//   const getRecordPercentage = () =>
//   {
//     const split_string = person.record.split('-')
//     return('(' + parseFloat(parseInt(split_string[0]) / (parseInt(split_string[0]) + parseInt(split_string[1])) * 100).toFixed(2) + '%)')
//   }
    
//   return (
//     <div className='flex flex-col items-center w-dvw bg-zinc-800'>
//       <div className='flex flex-col items-center w-11/12 bg-white bg-opacity-5 rounded-lg mt-2 p-4'>
//         <h1 className='text-4xl text-center p-2 font-bold'>{ person.firstName + ' ' + person.lastName }</h1>
//         <div className='h-4'></div>
//         <img className='pr-4 pl-4 pb-4 h-64 rounded-lg' src={ picture } alt='member profile'></img>
//         <p className='text-[22px]'>Record: { person.record } { getRecordPercentage() }</p>
//         <p className='text-[22px]'>Championships: { person.championships } </p>
//         <p className='text-[22px]'>Bowls: { person.bowls | 0 } </p>
//       </div>
//     </div>
//   )
// }

// export default MemberProfile