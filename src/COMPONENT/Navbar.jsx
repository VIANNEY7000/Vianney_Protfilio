import './Navbar.css'
import profile from "../assets/myphoto.jpg"
import { IoCodeWorkingOutline, IoHomeOutline, IoMailOutline, IoPersonOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <>
    <div className='navbar'>

        <div className="profile">
            <div>
            <img src={profile} alt="" />
            </div>
            <div>
                <h3>JOHN VIANNEY</h3>
            </div>
        </div>

        <div className="menue">
            <ul>
                 <li><Link to='/' style={{textDecoration:"none", color:'black'}}>HOME</Link></li>
                <li><Link to='/About' style={{textDecoration:"none", color:'black'}}>ABOUT</Link></li>
                <li><Link to='/Projects' style={{textDecoration:"none", color:'black'}}>PROJECTS</Link></li>
                <li><Link to='/Contact' style={{textDecoration:"none", color:'black'}}>CONTACT</Link></li>
                
            </ul>
        </div>
    </div>

      {/* MONILE NAVBAR */}
        <div className="mobile-nav">
            <ul>
                <li><Link to='/' style={{textDecoration:"none", color:'black'}}><IoHomeOutline size={24}/></Link><br />
                <span>HOME</span>
                </li>
                <li><Link to='/About' style={{textDecoration:"none", color:'black'}}><IoPersonOutline size={24}/></Link>
                <span>ABOUT</span>
                </li>
                <li><Link to='/Projects' style={{textDecoration:"none", color:'black'}}><IoCodeWorkingOutline size={24}/></Link>
                <span>PROJECTS</span>
                </li>
                <li><Link to='/Contact' style={{textDecoration:"none", color:'black'}}><IoMailOutline size={24}/></Link>
                <span>CONTACT</span>
                </li>
            </ul>
        </div>
        </>
  )
}

export default Navbar