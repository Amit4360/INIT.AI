// Blogs.js
import React from 'react';
import { blogData } from '../data'; 
import Blog from '../components/Blog';

const Blogs = () => {
  return (
    <div>
      {
        blogData.map(item=>(
            <Blog title={item.title} content={item.content} date={item.date} />
        ))
      }
    </div>
  )
};

export default Blogs;
