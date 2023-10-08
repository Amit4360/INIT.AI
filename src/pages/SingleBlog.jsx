import { useParams } from "react-router-dom";
import {useState, useEffect} from 'react'
import {blogData} from '../data'
import "../styles/singleBlog.css"

const SingleBlog = () => {
  const [blog, setBlog] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const selectedBlog = blogData.find((item) => item.id.toString() === id);
    if (selectedBlog) {
      setBlog(selectedBlog);
    }
  }, [blogData, id]);

  return (
    <>
      <div className="">
        <h1>{blog.title}</h1>
        <p>{blog.date}</p>
        <p>{blog.content1}</p>
        <p>{blog.content2}</p>
        <p>{blog.content3}</p>
      </div>
    </>
  );
};

export default SingleBlog;
