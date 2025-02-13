import React from 'react'

function MemberProfile({ person, picture }) {
  return (
    <div>Hello! { person.firstName }
    <img src={ picture } alt='member profile'></img>
    </div>
  )
}

export default MemberProfile