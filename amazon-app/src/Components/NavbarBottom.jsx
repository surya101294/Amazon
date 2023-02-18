import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Style from '../Styles/NavbarBottom.module.css'
import {GiHamburgerMenu} from 'react-icons/gi'
import Sidebar from './Sidebar'


const NavbarBottom = () => {
  const [hide,setHide]= useState(false)
  const handleSidebar=()=>{
    setHide(true)
    console.log(hide);
    if(hide){
      return <Sidebar/>
      setHide(false)
    }
  }
  return (
      <nav className={Style.navbar}>
        <ul className={Style.links}>
            <Link>
            <li onClick={handleSidebar} > <GiHamburgerMenu/>All </li>
            </Link>
            <Link>
            <li>Amazon miniTV </li>
            </Link>
            <Link>
            <li>Best Sellers </li>
            </Link>
            <Link>
            <li>Mobiles </li>
            </Link>
            <Link>
            <li> Customer Services</li>
            </Link>
            <Link>
            <li>Today's Deals </li>
            </Link>
            <Link>
            <li className={Style.Lihide}>Electronics </li>
            </Link>
            <Link>
            <li className={Style.Lihide}>Amazon Pay </li>
            </Link>
            <Link>
            <li className={Style.Lihide}>Prime </li>
            </Link>
            <Link>
            <li className={Style.Lihide}>Fashion </li>
            </Link>
            <Link>
            <li className={Style.imageli} > 
                <img className={Style.image}  src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/Farzi-Launch/400x39-SWM_NP._CB613859124_.jpg" alt="pic" />
            </li>
            </Link>
        </ul>
      </nav>
  )
}

export default NavbarBottom
