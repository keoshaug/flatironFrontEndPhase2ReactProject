import React from 'react';
import "./Navbar.css";
import { Link } from 'react-router-dom';


function CustomLink({to, children,...props}){
  const path = window.location.pathname

    return(

        <li className={path === to ? "active" : ""}>
        <Link to={to} {...props}>{children}</Link>
        </li>
    )
}

const Navbar = () => {

  const path = window.location.pathname
  return (
    <>
    <nav className='navBar'>
        <Link to='./Header'>Home</Link>
        <ul className='nav-ul'>
            <div className='nav-li'>
            </div>
            <div className='nav-li'>
            <CustomLink to='./About'>About</CustomLink>
            </div>
            <div className='nav-li'>
            <CustomLink to='./Links'>Links</CustomLink>
            </div>
        </ul>
    </nav>
    </>
  )
}

export default Navbar;