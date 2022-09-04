import React from 'react'
import Footer from './Component/Footer'
import Logo from './Component/Logo'
import Plainnav from './Component/Plainnav'
import Postedit from './Component/Postedit'

const Editpost = ({logoName, editTitle, editBody, setEditTitle, setEditBody, editHandleSubmit, post}) => {
  return (
    <div>
        <Logo logoName='Xureblog Post Edit'/>
        <Plainnav />
        <Postedit 
        editTitle={editTitle}
        editBody={editBody}
        setEditTitle={setEditTitle}
        setEditBody={setEditBody}
        editHandleSubmit={editHandleSubmit}
        post={post}
        />
        <Footer />        
    </div>
  )
}

export default Editpost