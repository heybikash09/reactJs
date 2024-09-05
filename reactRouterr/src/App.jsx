import { useState } from "react";
import { Route, RouterProvider, Routes, createBrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";

function App() {
  const [count, setCount] = useState(0);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <NavBar/>,
      children:[
        {
          path:"/",
          element:<Home/>,
        },
        {
          path: "/contact/:user",
          element: <Contact/>,
        },
        {
          path: "/home",
          element: <Home/>,
        },
        {
          path: "/about",
          element: <About/>,
        },
      ]
  }]);
  return (
    <>
    <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
