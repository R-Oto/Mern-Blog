import React from 'react'
import {Link} from 'react-router-dom'
import {FaBars} from 'react-icons/fa'
import {AiOutlineClose} from 'react-icons/ai'

const Header = () => {
  return (
    <nav className=''>
        <div className="container nav__container">
          <Link to="/" className='nav__logo'>
            {/* <img src={Logo} alt="Navbar Logo" /> */}
            <div className="logo">Logo</div>
          </Link>
          <ul className="nav__menu">
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/create">Create</Link></li>
            <li><Link to="/authors">Authors</Link></li>
            <li><Link to="/logout">Logout</Link></li>
          </ul>
          <button className="nav_toggle-btn">
            <AiOutlineClose />
          </button>
        </div>
    </nav>
  )
}

export default Header;