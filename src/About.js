import React from 'react'
import Footer from './Component/Footer'
import Logo from './Component/Logo'
import Plainnav from './Component/Plainnav'


const About = (logoName) => {
  return (
    <div className='About'>
        <Logo logoName='About Xureblog'/>
        <Plainnav />
        <h1>The best blog ever</h1>
        <Footer />
    </div>
  )
}

export default About