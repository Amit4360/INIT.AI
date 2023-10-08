import React, {useRef} from 'react'
import '../styles/blogs.css'
import { useScroll, motion } from "framer-motion";
import {Link} from "react-router-dom"

const Blog = ({title, image, info, date, id}) => {
    const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 1"],
  });
  return (
    <>
        <motion.div 
            className="blog-item"
            ref={ref}
            style={{
              scale: scrollYProgress,
              opacity: scrollYProgress,
            }}
          >
            <img src={image} alt="card-image" className="blog-image"/>
            <h1 className="blog-title">{title}</h1>
            <p className="blog-date">{date}</p>
            <p className="blog-content">{info}</p>
            <Link to={`/blogs/${id}`}>
                <button className="blog-button" >Read More</button>
            </Link>
          </motion.div>
    </>
  )
}

export default Blog
