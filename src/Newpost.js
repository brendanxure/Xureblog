import React from 'react'
import Footer from './Component/Footer'
import Logo from './Component/Logo'
import Postform from './Component/Postform'
import Plainnav from './Component/Plainnav'


const Newpost = ({title,setTitle, body, setBody, handleSubmit, logoName}) => {
    
  return (
    <div>
        <Logo 
        logoName='Welcome to Xureblog'
        />
        <Plainnav />
        <Postform 
        title={title}
        setTitle={setTitle}
        body={body}
        setBody={setBody}
        handleSubmit={handleSubmit}
        />
        <Footer />
    </div>
  )
}

export default Newpost