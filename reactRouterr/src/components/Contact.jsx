import React from 'react'
import { useParams } from 'react-router-dom'

function Contact() {
  const {user} = useParams();

  return (
    <div className=' mt-16'>
      Contact
      {user}
    </div>
  )
}

export default Contact
