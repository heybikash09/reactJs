import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import About from './components/Header/About.jsx'
import Contact from './components/Header/Contact.jsx'

const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"home",
        element:<Home/>,
      },
      {
        path:"about",
        element:<About/>,
      },
      {
        path:"contact",
        element:<Contact/>,
      },
    ]
  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}/>
  </React.StrictMode>,
)
