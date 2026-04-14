import "../STYLES/Navbar.css";
import { motion } from "framer-motion";
import {
  IoCodeWorkingOutline,
  IoHomeOutline,
  IoMailOutline,
  IoPersonOutline,
} from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      {/* DESKTOP NAVBAR */}
      <motion.div
        className="navbar"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="logo">
          <h2>
            JOHN <span>VIANNEY</span>
          </h2>
        </div>

        <ul className="menu">
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/About">ABOUT</Link></li>
          <li><Link to="/Projects">PROJECTS</Link></li>
          <li><Link to="/Contact">CONTACT</Link></li>
        </ul>
      </motion.div>

      {/* MOBILE NAVBAR */}
      <motion.div
        className="mobile-nav"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <ul>
          <li>
            <Link to="/">
              <IoHomeOutline size={22} />
              <span>HOME</span>
            </Link>
          </li>

          <li>
            <Link to="/About">
              <IoPersonOutline size={22} />
              <span>ABOUT</span>
            </Link>
          </li>

          <li>
            <Link to="/Projects">
              <IoCodeWorkingOutline size={22} />
              <span>PROJECTS</span>
            </Link>
          </li>

          <li>
            <Link to="/Contact">
              <IoMailOutline size={22} />
              <span>CONTACT</span>
            </Link>
          </li>
        </ul>
      </motion.div>
    </>
  );
};

export default Navbar;