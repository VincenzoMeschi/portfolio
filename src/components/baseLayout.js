import React from 'react'
import Navbar from './navbar'
import Emojibullet from './home/emojibullet'
import Sociallinks from './home/socialicon'
import me from '../media/vincenzo.png'
import {TiSocialFacebook, TiSocialInstagram, TiSocialGithub, TiSocialLinkedin, TiSocialTwitter} from 'react-icons/ti'
import {IconContext} from 'react-icons'

function BaseLayout() {
 return (
  <IconContext.Provider
      value={{ color: 'white', size: '50px' }}
    >
  <div>
   <Navbar />
   <div className="body">
    <div className="image">
     <img src={me} alt="Vincenzo Meschi" />
    </div>
    <div className="text">
     <h1>Hi, I'm <span>Vincenzo</span> <span id='emoji'>👋</span></h1>
     <h3>I'm a Full Stack Developer.</h3>
     <ul>
      <Emojibullet emoji='☕' text='fueled by coffee'/>
      <Emojibullet emoji='🌎' text='based in the US'/>
      <Emojibullet emoji='🧑‍🎓' text='Information Systems @ GVSU'/>
      <Emojibullet emoji='📧' text='meschiv@mail.gvsu.edu'/>
     </ul>
     <div className="links">
      <Sociallinks icon={<TiSocialFacebook/>} link='https://www.facebook.com/vincenzomeschi'/>
      <Sociallinks icon={<TiSocialInstagram/>} link='https://www.instagram.com/vincenzomeschi/'/>
      <Sociallinks icon={<TiSocialGithub/>} link='https://github.com/VincenzoMeschi'/>
      <Sociallinks icon={<TiSocialLinkedin/>} link='https://www.linkedin.com/in/vincenzo-meschi-584ba6211/'/>
      <Sociallinks icon={<TiSocialTwitter/>} link='https://twitter.com/VincenzoMeschi'/>
     </div>
    </div>
   </div>
  </div>
  </IconContext.Provider>
 )
}

export default BaseLayout