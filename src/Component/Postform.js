import React from 'react'


const Postform = ({title, setTitle, body, setBody, handleSubmit}) => {
  return (
    <form className='Postform'>
        <label htmlFor='title'>Title: </label>
        <textarea value={title} autoFocus required onChange={(e)=> setTitle(e.target.value)} id='title' type='text' />
        <label htmlFor='body'>Body: </label>
        <textarea value={body} required onChange={(e)=>setBody(e.target.value)} id='body' type='textbox' />
        <button onClick={handleSubmit}>Post</button>
    </form>
  )
}

export default Postform