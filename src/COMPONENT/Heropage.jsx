import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import '../STYLES/Heropage.css'

const Heropage = () => {
  return (
    <section className="heropage">
      <div className="intro">
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hi, I'm Vianney
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          I build <span>scalable</span> and <span>interactive</span> web applications for modern digital experiences.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
        >
          I specialize in developing full-stack applications with clean architecture,
          responsive interfaces, and performance-focused design. My goal is to turn ideas into
          reliable and visually engaging digital products.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.4 }}
        >
          <Link to="/Projects" style={{ color: "white", textDecoration: "none" }}>
            View Projects
          </Link>
        </motion.button>

      </div>
    </section>
  );
};

export default Heropage;