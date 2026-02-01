import React from 'react'
import Heropage from '../COMPONENT/Heropage'
import About from '../PAGES/About'
import Projects from '../PAGES/Projects'
import Contact from '../PAGES/Contact'

const Home = () => {
  return (
    <div>
      <Heropage/>
      <About/>
      <Projects/>
      <Contact/>
      
    </div>
  )
}

export default Home