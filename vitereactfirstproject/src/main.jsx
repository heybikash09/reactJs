import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

function newApp(){
    return (
         <h2>Here is chai take it and enjoy your day</h2>
    )
}
/*const reactElement={
  type:'a',
  props:{
      href:'https://www.google.com',
      target:'_blank'
  },
  children:'click me to visit Google'
}*/

// The code written in upper is a object nut it can't render bcz all the element like type props are anonymous so ....
// If we want to render this object we have to write in following maner
 const newnelement='ugg iugik igik'
const reactElement=(
  <a href="https://www.google.com" target='_blaks'>visit me to :Google</a>
)

// If we want to write the function in object way then we have to write the code like following 

const newReactElement=React.createElement(
  'a',{href:'https://www.google.com',target:'__blanks'},'Click me to Visit BKJB',newnelement
// if we want to give varible then we should write like newnelement
)


ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
// {/*here App is a function we can render any function and we can also render any object  */}
// {/* Basically behind the scene the function store as functon in a proprer syntax  */}


// {/* Here App is a function so we have written it like   "<APP/>"  but when we render a object we have to write only object name */}

// {/* As App is a function we also can write the APP like App() but not inside SrictMode*/}
//   </React.StrictMode>,

 newReactElement
// For rendering only object written in proper syntax


// reactElement
// For rendering only object


// newApp()
// For rendering direct function in another way 
)
