import React from "react";
import { motion } from "framer-motion";
import '../STYLES/Footer.css'

import { BsLinkedin } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaXTwitter, FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* SOCIAL LINKS */}
      <ul className="footer-categories">
        <li>
          <a
            href="https://www.linkedin.com/in/ndunakaobodozie-29bb293a5"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin />
          </a>
        </li>

        <li>
          <a
            href="https://github.com/VIANNEY7000"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
        </li>

        <li>
          <a href="mailto:vianneyobodozie8@gmail.com">
            <MdOutlineMailOutline />
          </a>
        </li>

        <li>
          <a
            href="https://x.com/vianney7000?s=21"
            target="_blank"
            rel="noreferrer"
          >
            <FaXTwitter />
          </a>
        </li>
      </ul>

      {/* COPYRIGHT */}
      <div className="footer-copyright">
        <small>
          © {new Date().getFullYear()} VIANNEY • Built with React & Framer Motion
        </small>
      </div>
    </motion.footer>
  );
};

export default Footer;