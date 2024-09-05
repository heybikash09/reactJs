import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { UserContext } from "./UserContext";

function App() {
  const [user, setUser] = useState("lalit");

  const [age, setAge] = useState(20);

  return (
    <>
      <UserContext.Provider value={{ user, setUser,age,setAge }}>
          <Header />
          <Outlet />
          <Footer />
      </UserContext.Provider>
    </>
  );
}
export default App;
