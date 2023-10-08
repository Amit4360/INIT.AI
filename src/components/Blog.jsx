import React from 'react'

const Blog = ({title, image,content, date}) => {
  return (
    <>
        <div className="container">
            <h1>{title}</h1>
            <p>{content}</p>
            <p>{date}</p>
        </div>
    </>
  )
}

export default Blog