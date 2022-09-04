import React from 'react'
import { Link } from 'react-router-dom'

const Blogcont = ({post}) => {
  return (
    <div className='Blogcont'>
        <ul>
            {post.length ? post.map((eachpost)=>
            <ol key={eachpost.id}>
                <Link className='contlink' to={`post/${eachpost.id}`}>
                <h2>{eachpost.title}</h2>
                <p>{eachpost.timedate}</p>
                </Link> 
                <h3>{eachpost.mainbody.length>=25 ? `${eachpost.mainbody.slice(0,25)}...` :eachpost.mainbody}</h3>
            </ol>
            ):
            <h1>No News Today</h1>
            }
        </ul>
    </div>
  )
}

export default Blogcont