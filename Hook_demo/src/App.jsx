import { useState } from 'react'


// function App() {

//   let [counter,setCount]=useState(10)

//   function addvalue()
//   {
//     setCount(counter+1)
//   }
//   function removevalue()
//   {
//     setCount(counter-1)
//   }

//   return (
//     <>
//      <h1>::--Its my first React Project--::</h1>
//      <h3>::----counter value:-- {counter}</h3>
//      {/* To represent a variable in we should keep that varible in dollar sign ="${}"  but in jsx we have to put it in only curlybrases */}
//      <button onClick={addvalue}>Add Value</button>
//      {/* here also addvalue() written withou bracket  */}
//      <button onClick={removevalue}>Remove Value</button>
//     </>
//   )
// }
function App()
{
  const [name,setName]=useState("")

  return(
    <div>
      <h1>Name :: {name}</h1>
  <input type="text" onChange={(e)=>{setName(e.target.value)}} placeholder='Enter Name '/>
  
    </div>
  
  )
}

export default App
