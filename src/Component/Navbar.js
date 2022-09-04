import React from 'react'
import { Link } from 'react-router-dom'

function Navbar({search, setSearch}) {
  return (
    <div className='Navbar'>
        <form className='Navsearch' onClick={(e)=>e.preventDefault()}>
            <input value={search} onChange={(e)=>setSearch(e.target.value)} type='search' placeholder='Search items'/>
        </form>
        <ul className='Navlist'>
            <ol><Link to='/'>Home</Link></ol>
            <ol><Link to='/post'>New Post</Link></ol>
            <ol><Link to='/about'>About us</Link></ol>
        </ul>
    </div>
  )
}

export default Navbar