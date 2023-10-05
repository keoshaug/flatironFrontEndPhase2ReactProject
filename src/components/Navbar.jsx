import React from 'react';
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
    <nav className='navBar'>
        <ul className='nav-ul'>
            <div className='nav-li'>
            <li className='active'><a href='./Header'>Home</a></li>
            </div>
            <div className='nav-li'>
            <li className='active'><a href='./About'>About</a></li>
            </div>
            <div className='nav-li'>
            <li className='active'><a href='./Footer'>Links</a></li>
            </div>
        </ul>
    </nav>
    </>
  )
}

export default Navbar;