import React from 'react';
import "./Navbar.css";


function CustomLink({href, children,...props}) {
  const path = window.location.pathname

    return(

        <li className={path === href ? "active" : ""}>
            <a hreft={href} {...props}>{children}</a>
            </li>
    )
}

const Navbar = () => {

  const path = window.location.pathname
  return (
    <>
    <nav className='navBar'>
        <a href='./Header'>Home</a>
        <ul className='nav-ul'>
            <div className='nav-li'>
            </div>
            <div className='nav-li'>
            <CustomLink  href='./About'>About</CustomLink>
            </div>
            <div className='nav-li'>
            <CustomLink href='./Links'>Links</CustomLink>
            </div>
        </ul>
    </nav>
    </>
  )
}

export default Navbar;