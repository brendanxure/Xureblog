import React from 'react'

const Footer = () => {
    const date = new Date()
  return (
    <div className='Footer'>
        <h3>Copyright &copy; {date.getFullYear()}</h3>
    </div>
  )
}

export default Footer