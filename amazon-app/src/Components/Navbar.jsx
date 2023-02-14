import React from 'react'
import Style from '../Styles/Navbar.module.css'
import { FiShoppingCart } from 'react-icons/fi';
import { BiSearch } from 'react-icons/bi';
import { GrLocation } from 'react-icons/gr';


const Navbar = () => {
  return (
    <div className={Style.container}>
        <a href="" className={Style.image}>
      <img className={Style.img_sz} src="https://m.media-amazon.com/images/G/31/social_share/amazon_logo._CB633266945_.png" alt="logo" />
        </a>
      <div className={Style.add}>
        <div><h6>Hello </h6><GrLocation/></div>
        <h5>Select your address</h5>
      </div>
      <div className={Style.search} >
      <select className={Style.skt} name="All" id="" placeholder='^'>
        <option value="">All</option>
        <option value="">Electronics</option>
        <option value="">Deals</option>
        <option value="">Watches</option>
      </select>
      <input className={Style.ipt} type='text' placeholder="Search Amazon.in" />
      <button className={Style.btn}><BiSearch size={'25px'} /></button>
      </div>
      <select className={Style.language}  name="category" id="">
        <option value="">EN</option>
        <option value="">English</option>
        <option value="">Hindi</option>
        <option value="">Learn More</option>
      </select>
      <div>
        <p>Sign in</p>
      </div>
      <h4>Returns & Orders</h4>
      <div className={Style.cart}>
      <FiShoppingCart size="30px"/>
        {/* <div>Cart</div> */}
        <p>Cart</p>
      </div>
    </div>
  )
}

export default Navbar
