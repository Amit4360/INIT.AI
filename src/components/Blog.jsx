// Blog.js
import React from 'react';

const Blog = ({ image, title, date, content }) => {
    return (
        <div className="container">
            <h1>{title}</h1>
            <p>{content}</p>
            <img src={image} alt="image" />
            <p>{date}</p>
        </div>
    );
};

export default Blog;
