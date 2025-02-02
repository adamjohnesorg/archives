import React from 'react'
import { Link } from 'react-router-dom'

const PageTwo = () =>
{
  return (
    <div>
      <p className='text-green-400'>Page Two!!</p>
      <div className="wrapper">
        <Link to="/PageOne">PageOne</Link>
      </div>
    </div>
  )
}

export default PageTwo
  