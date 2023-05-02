import React from 'react'

function Navbar() {
  return (
   <div className="nav">
    <div className="nav__logo">
     <h1>VINCENZO</h1>
    </div>
     <div className="nav__links">
      <ul>
       <li>Home</li>
       <li>About</li>
       <li>Projects</li>
       <li>Contact</li>
      </ul>
     </div>
   </div>
  )
}

export default Navbar