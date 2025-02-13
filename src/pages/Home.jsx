import React, { useState } from "react";
export default function Home() 
{

  let [name,setName] = useState("omkar")
  function printsomething()
  {
    name="hulk"
    console.log(name)
  }


    return (
      <>
        <div className="home">
          Home Page{name}
        <button onClick={printsomething}>Click</button>
        </div>
      </>
    );
  }


