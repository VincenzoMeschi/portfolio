import React from 'react'

function Socialicon(props) {
 const { icon, link } = props
 return(
  <a href={link} target="_blank" rel='noreferrer noopener'>
   {icon}
  </a>
 )
}

export default Socialicon