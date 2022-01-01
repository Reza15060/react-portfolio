import React, { useState } from 'react'
import { HiMenuAlt2 } from 'react-icons/hi'
import { RiCloseFill } from "react-icons/ri";
import { Link } from 'react-router-dom';


function Header() {
    const [showHeader, setShowHeader] = useState(false)
    
    return (
        <div className='header'> 
            {showHeader ?
                (<RiCloseFill
                    onClick={() => setShowHeader(!showHeader)}
                    className='menu-icon position-fixed top-0 end-0' />) :
                (<HiMenuAlt2
                    onClick={() => setShowHeader(!showHeader)}
                    className='menu-icon position-fixed top-0 end-0' />)}
            <ul className={`${showHeader? 'show-header' : 'hide-header'} n-box1`}>
        <li ><Link to='/'>Home</Link></li>
          <li ><Link to='/projects'>Projects</Link></li>
          <li ><Link to='/contact'>Contact</Link></li>
            </ul>


        </div>
    )
}

export default Header
