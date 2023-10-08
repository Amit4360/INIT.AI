import React from 'react'
import Home from './pages/Home'
import ContactUs from './pages/ContactUs'
import Team from './pages/Team'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import NavBar from './components/NavBar'
import BlogsPage from './pages/BlogsPage'
import SingleBlog from './pages/SingleBlog'

const App = () => {
  return (
    <>
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/blogs" element={<BlogsPage/>}/>
          <Route path="/blogs/:id" element={<SingleBlog/>}/>
          <Route path="/team" element={<Team/>}/>
          <Route path="/contact" element={<ContactUs/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App