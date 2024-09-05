import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Footer from './Footer';
function NavBar() {
  return (
    <>
      <div className=' h-16 bg-black text-white text-xl flex gap-10 items-center'>
        <NavLink to="/home" className={({isActive})=>{isActive?"bg-red-600":"bg-gray-200";}}>Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink> 
    </div>
      <Outlet/>
     <Footer/>
    </>
  )
}

export default NavBar
