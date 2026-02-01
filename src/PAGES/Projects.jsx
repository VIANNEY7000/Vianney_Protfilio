import React from 'react'
import cloth from '../assets/clothwbs.png'
import car from '../assets/carwebsite.png'
import { color } from 'framer-motion'

const Projects = () => {
  return (
   <section className='projects'>
      <h1>PROJECTS</h1>

    <div className="project-container">
      <div className="project-image">
         <img src={cloth} alt="" />
      </div>

      <div className="abt-product">
          <h2>Cloth E-shoping</h2>
          <p>A high-performance e-commerce application built to demonstrate complex state management and a modular component architecture. This project showcases the integration of dynamic data fetching, secure checkout simulations, and an optimized UI/UX tailored for the modern fashion retail industry.</p>
          <div className="project-links">
              <div className="dom-con">
                  <div className="dom">React</div>
                  <div className="dom"> Css</div>
                  <div className="dom">JavaScript</div>
               </div >   
                <div className='project-btn'>
                  <button><a href="https://vianney-fashion-home.vercel.app/" style={{color:"white", textDecoration:"none"}}>View</a></button> <button><a href="https://github.com/VIANNEY7000/VianneyFashionHome" style={{color:"white", textDecoration:"none"}}>GitHub</a></button>
                </div>
                </div>
          </div>
    </div>
                                    {/* 2 */}
    <div className="project-container">
      <div className="project-image">
         <img src={car} alt="" />
      </div>

      <div className="abt-product">
          <h2>Car Brand Display</h2>
          <p>An alite automative aggregator where premium car brands dubt their flagship models. built with a focus on visual storytelling and precies market valuation, it serves as a bridge between world-class engineering and prospective owners</p>
          <div className="project-links">
              <div className="dom-con">
                  <div className="dom">React</div>
                  <div className="dom"> Css</div>
                  <div className="dom">JavaScript</div>
               </div >   
                <div className='project-btn'>
                  <button><a href="https://car-brand-project-22qx.vercel.app/" style={{color:"white", textDecoration:"none"}}>View</a></button> <button><a href="https://github.com/VIANNEY7000/BACKEND-api" style={{color:"white", textDecoration:"none"}}>GitHub</a></button>
                </div>
                </div>
          </div>
    </div>

   </section>
  )
}

export default Projects