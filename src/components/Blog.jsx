import React, { useRef } from 'react'
import '../styles/blogs.css'
import { useScroll, motion } from "framer-motion";
import { Link } from "react-router-dom"

const Blog = ({ title, image, info, date, id }) => {
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
        {/* <img src={image} alt="blog-image" className="blog-image" />
        <div className='blog-content'>
          <h1 className="blog-title">{title}</h1>
          <p className="blog-content">{info}</p>
          <p className="blog-date">{date}</p>
          <Link to={`/blogs/${id}`}>
            <button className="blog-button" >Read More <span>&rarr;</span></button>
          </Link>
        </div>
      </motion.div>
    </> */}

      <main className="cd__main">
          <div className="grid">
            <div className="grid__item">
              <div className="card">
              <img src={image} alt="blog-image" className="card_img" />
                <div className="card__content">
                  <h1 className="card__header">{title}</h1>
                  <p className="card__text">{info}</p>
                  <p className="card_date">{date}</p>
                  <Link to={`/blogs/${id}`}>
                    <button className="card__btn">Read More <span>&rarr;</span></button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
      </main>
    </motion.div>
  </>
  )
}

export default Blog
