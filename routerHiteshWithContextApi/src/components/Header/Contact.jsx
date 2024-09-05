import React, { useContext } from "react";
 import { UserContext } from "../../UserContext";

function Contact() {
 
  const {age,setAge} = useContext(UserContext);
  return (
    <div>
      <h4 className=" bg-red-500 text-3xl font-semibold">
        Heyy there I am Contact
        {age}
      </h4>
    </div>
  );
}

export default Contact;
