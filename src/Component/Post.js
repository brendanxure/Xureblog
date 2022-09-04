import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Post = ({post, handleDelete}) => {
    const { id } = useParams()
    const eachpost = post.find(eachpost=> (eachpost.id).toString() === id)
  return (
    <div className='Post'>
        <article>
        {eachpost ? (
            <>
            <h2>{eachpost.title}</h2>
            <p>{eachpost.timedate}</p>
            <h3>{eachpost.mainbody}</h3>
            <button className='Buttonedit'><Link to={`editpost/${eachpost.title}`} className='Buttonlink'>Edit</Link> </button>
            <button className='Buttondelete' type='delete' onClick={()=>handleDelete(eachpost.id)}><a>Delete</a></button>
            </>
        ) : (
          <>
            <h2>Not Available</h2>
            <h3><Link to='/' className='Postlink'>Please you can click here to visit our Homepage</Link></h3>
          </>
        ) 
        }
        </article>
    </div>
  )
}

export default Post