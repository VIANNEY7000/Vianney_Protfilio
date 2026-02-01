import React from 'react'
import { Link } from 'react-router-dom'


const Heropage = () => {
  return (
    <>
   <section className='heropage'>
        <div className="intro">
            <h1>Hi i'm VIANNEY</h1>
            <h2> A <span>Full-Stack</span> Developer specializing in the modern web.</h2>
            <p> I turn complex problems into simple, beautiful, and high-performing applications. Whether it’s architecting a database or crafting a responsive UI, I build with performance and accessibility in mind.</p>
            <button><Link to='/Projects' style={{color:"white", textDecoration:"none"}}>PROJECTS</Link></button>
        </div>
   </section>
   </>
  )
}

export default Heropage