import React from 'react'

export const BlogCard = (props) => {
    const data = props.blogData
  return (
    <div>
      <h3>Title: {data.title}</h3>
      <h3>Author: {data.author}</h3>
    </div>
  )
}
