import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './compo/Card'

function App() {

  return (
    <>
      <h1 className=' text- bg-purple-700 absolute left-[33rem] top-[10rem]'>:--Props Demonstration--:</h1>
      <div className=' -mt-14 ml-24 flex gap-5'>
           <Card name='Robb' vis='Click Me'/>
           <Card name='Ned' vis='Visit me'/>
      </div>
      
    </>
  )
}

export default App
