import React from 'react'
import Footer from './Component/Footer'
import Logo from './Component/Logo'
import Plainnav from './Component/Plainnav'
import Post from './Component/Post'

const Postdetail = ({logoName, post, handleDelete}) => {
  return (
    <div className='Postdetail'>
        <Logo logoName='Welcome to Xureblog'/>
        <Plainnav />
        <Post 
        post={post}
        handleDelete={handleDelete}
        />
        <Footer />
    </div>
  )
}

export default Postdetail