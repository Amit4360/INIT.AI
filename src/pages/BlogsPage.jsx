import React from 'react'
import Blogs from '../components/Blogs'
import Slider from '../components/Slider'
import styles from '../styles/aboutus.css'

const BlogsPage = () => {
  return (
    <>
      <Slider/>
      <p id='Head'>Blogs</p>
      <Blogs/>
    </>
  )
}

export default BlogsPage
