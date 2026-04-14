import React from "react";
import "../STYLES/About.css";
import { motion } from "framer-motion";

import {
  FaCss3Alt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";

const About = () => {
  const skills = [
    { id: 1, name: "React", icon: <FaReact color="#61DBFB" /> },
    { id: 2, name: "JavaScript", icon: <FaJs color="#F7DF1E" /> },
    { id: 3, name: "HTML5", icon: <FaHtml5 color="#E34F26" /> },
    { id: 4, name: "CSS3", icon: <FaCss3Alt color="#1572B6" /> },
    { id: 5, name: "GitHub", icon: <FaGithub color="#fff" /> },
    { id: 6, name: "Node.js", icon: <FaNodeJs color="#339933" /> },
  ];

  return (
    <div className="about">

      {/* HEADER */}
      <motion.div
        className="head"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h1>
          <span>ABOUT</span> ME
        </h1>

        <p>
          A passionate full-stack developer focused on building scalable,
          high-performance web applications with clean architecture and modern UI design.
        </p>
      </motion.div>

      {/* CONTENT */}
      <div className="abt-and-skill">

        {/* ABOUT TEXT */}
        <motion.div
          className="abt"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Who I Am</h2>

          <p>
            I design and develop full-stack web applications that combine
            functionality with smooth user experience.
            <br /><br />
            I enjoy solving real-world problems through code, building systems
            that are fast, responsive, and maintainable.
            <br /><br />
            I’m continuously improving my skills and exploring modern web
            technologies to deliver better digital solutions.
          </p>
        </motion.div>

        {/* SKILLS */}
        <motion.div
          className="skill"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>TECH STACK</h2>

          <div className="skill-grid">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.id}
                className="skill-card"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="icon">{skill.icon}</div>
                <p>{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default About;