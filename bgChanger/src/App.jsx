import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UseMEMO from "./components/useMemo";

function App() {
  const [color, setColor] = useState("olive");
  return (
    <div className=' w-screen h-screen flex justify-center items-center' style={{backgroundColor: color}}>
      <div className=' bg-slate-600 flex justify-center item-center gap-x-4 py-2 px-3 rounded-xl mt-[30rem]'>
        <button className=' px-5 py-2 rounded-xl ring-4 ring-rose-600 ' style={{backgroundColor: 'red'}} onClick={()=>setColor('red')}    >Red</button>
        <button className=' px-5 py-2 rounded-xl ring-4 ring-rose-600' style={{backgroundColor: 'blue'}}onClick={()=>setColor('blue')}>Blue</button>
        <button className=' px-5 py-2 rounded-xl ring-4 ring-rose-600' style={{backgroundColor: 'green'}}onClick={()=>setColor('green')}>Green</button>
        <button className=' px-5 py-2 rounded-xl ring-4 ring-rose-600' style={{backgroundColor: 'purple'}}onClick={()=>setColor('purple')}>Purple</button>
        <button className=' px-5 py-2 rounded-xl ring-4 ring-rose-600' style={{backgroundColor: 'olive'}}onClick={()=>setColor('olive')}>Olive</button>
        <button className=' px-5 py-2 rounded-xl ring-4 ring-rose-600' style={{backgroundColor: 'aqua'}}onClick={()=>setColor('aqua')}>aqua</button>
      </div>
    </div>
    // <div>
    //   <UseMEMO />
    // </div>
  );
}

export default App;

