import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { BlogCard } from '../components/BlogCard'
import { Login } from '../components/Login'

export const Home = () => {
    const [blog,setBlog] = useState('');
    // axios.get("http://localhost:8080/blogs").then(res =>{
    //     setBlog(res.data);
    //     console.log(res.data);
    // })
  return (
    <div>
      <Login />
      <div>
      {/* {blog.map((elem)=>{
        return(
            <div key={elem.id}>
                <BlogCard blogData={blog}/>
            </div>
        )
      })} */}
      </div>
    </div>
  )
}

