import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Postedit = ({editTitle, editBody, setEditTitle, setEditBody,editHandleSubmit,post}) => {
    const { id } = useParams()
    const findPost = post.find(eachpost=> eachpost.title.toString() ===id) 
    useEffect(()=>{
        if(findPost) {
            setEditTitle(findPost.title)
            setEditBody(findPost.mainbody)
        }
    },[findPost])
  return (
    <form className='Postform' onSubmit={(e)=> e.preventDefault()}>
        <p>Please kindly edit your post</p>
        <label htmlFor='title'>Title: </label>
        <textarea  autoFocus required value={editTitle} onChange={(e)=>setEditTitle(e.target.value)}  id='title' type='text' />
        <label htmlFor='body'>Body: </label>
        <textarea required value={editBody} onChange={(e)=>setEditBody(e.target.value)} id='body' type='textbox' />
        <button onClick={()=>editHandleSubmit(findPost.id)}>Post</button>
    </form>
  )
}

export default Postedit