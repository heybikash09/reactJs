import React, { useContext } from 'react'
import { UserContext } from '../../UserContext';

function Footer() {
  const { setUser,setAge } = useContext(UserContext);
  return (
    <div>
       <h1 className=' bg-green-500 text-3xl'>Heyy there I am Footer </h1>
       <button
        onClick={() =>
          setUser("bikash")
        }
      >click me</button>
       <button
        onClick={() =>
          setAge(34)
        }
      >click me</button>
    </div>
  )
}

export default Footer
