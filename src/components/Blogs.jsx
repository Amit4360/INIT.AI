import React from "react";
import {blogData} from '../data'
import '../styles/blogs.css'
import Blog from './Blog'

const Blogs = () => {
  return (
    <>
      <div className="blog-container">
        {blogData.map((item) => (
          <Blog title={item.title} info={item.info} date={item.date} image={item.image} id={item.id}/>
        ))}
      </div>
    </>
  );
};

export default Blogs;
