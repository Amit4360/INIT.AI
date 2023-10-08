// Blogs.js
import React from 'react';
import { blogData } from '../data'; // Make sure this import path is correct
import Blog from '../components/Blog';

const Blogs = () => {
  return (
    <div className="container">
      {blogData.map((item, index) => (
        <Blog
          image={item.img}
          title={item.title}
          date={item.date}
          content={item.content}
        />
      ))}
    </div>
  );
};

export default Blogs;
