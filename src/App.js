import React from 'react'
import {Route, Routes, useNavigate} from 'react-router-dom'
import Home from './Home'
import Newpost from './Newpost'
import About from './About'
import { useEffect, useState } from 'react'
import { format } from 'date-fns'
import Postdetail from './Postdetail'
import Editpost from './Editpost'

const App = () => {
  const feeds = [
    {
      id: 1,
      timedate: 'July 11, 2022',
      title: 'Man United to be relegated',
      mainbody: 'Manchester united looks like they are going to be relegated with the way they are going'
    },
    {
      id: 2,
      timedate: 'July 11, 2022',
      title: 'Man United to sign Casemiro',
      mainbody: 'Manchester united looks like they are going to be relegated with the way they are going'
    },
    {
      id: 3,
      timedate: 'July 11, 2022',
      title: 'Lionel Messi scored a brace',
      mainbody: 'Lionel Messi as been making tremedious waves..'
    }
  ]
  const [post, setPost] = useState(feeds)
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [search, setSearch] = useState('')
  const [editTitle, setEditTitle] = useState('')
  const [editBody, setEditBody] = useState('')
  const navigate = useNavigate()
  const now = new Date()
  const logoName = 'Xureblog'
  
  const filtered= post.filter(eachpost=> eachpost.mainbody.toLowerCase().includes(search.toLowerCase()) 
  || eachpost.title.toLowerCase().includes(search.toLowerCase()))
  const filteredPost = filtered.reverse()

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!title) return;
        if(!body) return;
        if (post.length>=1) {
          const idIndex = post.length - 1
          const newId = post[idIndex].id + 1
          const newPostToadd = {
            id : newId,
            timedate: format(now, 'MMMM dd, yyyy pp'),
            title: title,
            mainbody: body
          }
          setPost([...post, newPostToadd])
          console.log(newPostToadd)
          setTitle('')
          setBody('')
          navigate('/')
        } else {
          const newPostToadd = {
            id : 1,
            timedate: format(now, 'MMMM dd, yyyy pp'),
            title: title,
            mainbody: body
          }
          setPost([...post, newPostToadd])
          console.log(newPostToadd)
          setTitle('')
          setBody('')
          navigate('/')
        }
      }
      const handleDelete = (id) => {
        const Delete = post.filter(eachpost=> eachpost.id !== id)
        setPost(Delete)
        navigate('/')
      }
      const editHandleSubmit =(id)=> {
        if(!editTitle) return;
        if(!editBody) return;
        const edit = post.map(eachpost=> eachpost.id === id ? {...eachpost, title: editTitle, mainbody: editBody }: eachpost)
        console.log(edit)
        setPost(edit)
        setEditTitle('')
        setEditBody('')
        navigate('/')
      }
  return (
    <div className='App'>
        <Routes>
          <Route path='/' element={<Home 
          post={filteredPost}
          logoName={logoName}
          search={search}
          setSearch={setSearch}
          />} />
          <Route path='post' element={<Newpost 
          title={title}
          setTitle={setTitle}
          body={body}
          setBody={setBody}
          handleSubmit={handleSubmit}
          />} />
          <Route path='post/:id' element={<Postdetail 
          post={post}
          handleDelete={handleDelete}
          />} />
          <Route path='post/:id/editpost/:id' element={<Editpost 
          editTitle={editTitle}
          editBody={editBody}
          setEditTitle={setEditTitle}
          setEditBody={setEditBody}
          editHandleSubmit={editHandleSubmit}
          post={post}
          />} />
          <Route path='about' element={<About 
          logoName={logoName}
          />} />
        </Routes>
    </div>
  )
}

export default App
