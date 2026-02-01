import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";

import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
      <footer>
      <ul className='footer-categories'>
        <li><a href="https://www.linkedin.com/in/ndunakaobodozie-29bb293a5"> <BsLinkedin /> </a></li>
        <li><a href="https://github.com/VIANNEY7000"> <FaGithub /> </a></li>
        <li><a href="vianneyobodozie8@gmail.com"> <MdOutlineMailOutline /> </a></li>
        <li><a href="https://x.com/vianney7000?s=21"> <FaXTwitter /> </a></li>
      </ul>

      <div className="footer-copyright">
        <small>All Rights Reserved &copy; Copyright, VIANNEY_PROTFOLIO</small>
      </div>
    </footer>
  )
}

export default Footer