import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  const [length, setLength] = useState(0)
  const [number,numberAllowed]=useState(false)
  const [character,characterAllowed]=useState(false)
  const [password,setPassword]=useState("")

  const passwordGenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    const num='0123456789'
    const spclChar="~`!@#$%^&*()_\|:;<>?/"
    if(number) str+=num
    if(character) str+=spclChar
    for(let i=1;i<=length;i++)
      {
        const charInd=Math.floor(Math.random()*str.length+1)
        pass+=str.charAt(charInd)
      }
      setPassword(pass)
  },[number,character,length,setPassword])
useEffect(()=>{
  passwordGenerator()
},[number,character,length,passwordGenerator])

const passwordRef=useRef(null)
const copyPasswordClipBoard=useCallback(()=>{    
passwordRef.current?.select()
// In React, the useRef hook is used to create a mutable reference that persists across re-renders. The current property of the object returned by useRef is used to hold a mutable value, which can be any value like a DOM element, a number, an object, etc.
window.navigator.clipboard.writeText(password)
},[password])
  return (
    <>
      <div className=' flex flex-col justify-center  w-[80vw] h-[17vh]  bg-slate-600 mx-auto mt-20 rounded-3xl'>
        <h1 className=' text-white text-4xl mx-auto '>Password Generator</h1>
        <div className='mt-2'>
        <input className=' outline-none rounded-xl h-11 w-[90%]' type="text" placeholder='password' ref={passwordRef} readOnly value={password} />
        <button className=' bg-blue-600 h-11 w-[10%] rounded-xl cursor-pointer hover:bg-blue-800' onClick={copyPasswordClipBoard}>copy</button>
        </div>
        <div className=' py-2 flex gap-2 text-orange-600 text-xl'>
          <input className=' ml-5 cursor-pointer' type="range" onChange={(e)=>{setLength(e.target.value)}} min={8} max={100} value={length}/>
          <h3>Length: {length}</h3>
          <input className='ml-9 w-5 cursor-pointer' type="checkbox" defaultChecked={false} onChange={()=>{numberAllowed(numberalw=>!numberalw)}} name="Num" id="num" />
          <label htmlFor="num">Numbers</label>
          <input className='ml-9 w-5 cursor-pointer' defaultChecked={character} onChange={()=>{characterAllowed(charalw=>!charalw)}} type="checkbox" name="char" id="char" />
          <label htmlFor="char">Characters</label>
        </div>
      </div>
    </>
  )
}

export default App
