import { useState } from 'react'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'
import { ThemeContext } from '../ThemeContext'
function App() {
  const [darkMode,setdarkMode]=useState(false)
  return (
    <>
    <ThemeContext.Provider value={{darkMode,setdarkMode}}>
      <ThemeBtn/>
      <Card/>
    </ThemeContext.Provider>
    </>
  )
}

export default App
