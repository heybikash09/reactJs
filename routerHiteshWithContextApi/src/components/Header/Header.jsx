import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { UserContext } from '../../UserContext'
import { AgeContext } from '../../AgeContext';
function Header() {

  const {user} = useContext(UserContext);

  return (
    <>
     <div className=' bg-gray-400 w-[100vw] h-16 grid grid-cols-3 shadow-xl'>
        <h2 className=' text-black text-2xl font-bold ml-28 flex items-center'>Heyy<span className=' text-red-600'>Logo</span ></h2>
        <div className=' flex items-center gap-16 text-xl'>
         <NavLink to="/home" >Home</NavLink>
         <NavLink to="/about" >About</NavLink>
         <NavLink to="/contact" >Contact</NavLink>
        </div>
        <div className=' flex items-center gap-4 justify-end mr-16 text-xl'>
            <button type="submit">Login</button>
            <button>Get Started</button>
            <span>{user}</span>
        </div>
    </div>
    
   </>
   
  )
}

export default Header
