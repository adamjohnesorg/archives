import MemberProfile from '../components/MemberProfile'
//import bb_png from '../imgs/memberprofiles/bbmp.png'

const NoahFahnestock = ({ members }) =>
{

  /*
    members=[
      0, Adam Johnes
      1, Brandon Sanfilippo
      2, Tony Vitale
      3, Tim Harmon
      4, Caleb McClintock
      5, Noah Fahnestock
      6, Alex Davis
      7, Trey Aguirre
      8, Jesse Simmons
      9, Jacob File
    ]
  */

  if (members.length === 0) { return <p>Loading...</p>}
  return (
    <div>
      <MemberProfile person = { members[5] } />
    </div>
  )
}

export default NoahFahnestock