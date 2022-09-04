import React from 'react'
import { Link } from 'react-router-dom'

const Plainnav = () => {
  return (
    <div className='Navbar'>
         <ul className='Navlist'>
            <ol><Link to='/'>Home</Link></ol>
            <ol><Link to='/post'>New Post</Link></ol>
            <ol><Link to='/about'>About us</Link></ol>
        </ul>
    </div>
  )
}

export default Plainnav