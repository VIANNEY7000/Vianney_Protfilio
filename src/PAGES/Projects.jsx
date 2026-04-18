import React from "react";
import cloth from "../assets/vfh.png";
import car from "../assets/carwebsite.png";
import { motion } from "framer-motion";
import '../STYLES/Projects.css'

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Fashion Platform",
      desc:
        "A scalable e-commerce web application built with modular React architecture. It demonstrates dynamic state management, responsive UI design, and a seamless shopping experience optimized for performance.",
      image: cloth,
      live: "https://vianney-fashion-home.vercel.app/",
      github: "https://github.com/VIANNEY7000/VianneyFashionHome",
    },
    {
      title: "Automotive Showcase Platform",
      desc:
        "A modern car brand display system focused on clean UI presentation and structured product visualization. Built to highlight premium automotive designs with smooth navigation and responsive layout.",
      image: car,
      live: "https://car-brand-project-22qx.vercel.app/",
      github: "https://github.com/VIANNEY7000/BACKEND-api",
    },
  ];

  return (
    <section className="projects">
      <h1>PROJECTS</h1>

      <div className="project-container">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {/* IMAGE */}
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>

            {/* CONTENT */}
            <div className="abt-product">
              <h2>{project.title}</h2>
              <p>{project.desc}</p>

              {/* TECH TAGS */}
              <div className="project-links">
                <div className="dom-con">
                  <div className="dom">React</div>
                  <div className="dom">CSS</div>
                  <div className="dom">JavaScript</div>
                </div>

                {/* BUTTONS */}
                <div className="project-btn">
                  <a href={project.live} target="_blank" rel="noreferrer">
                    View Live
                  </a>
                  <a href={project.github} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;