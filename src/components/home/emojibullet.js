import React from 'react'

function Emojibullet(props) {
 const { emoji, text } = props
 return(
  <li>
   <span>{emoji}</span> {text}
  </li>
 )
}

export default Emojibullet