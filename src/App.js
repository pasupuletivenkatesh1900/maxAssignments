import "./App.css";
import React, { useState } from "react";
function App() {
  const [,setText] = useState("");
  const [msg,setMsg] =useState("");
  const [counter,setCounter]= useState(0)

  const textHandler = (event) => {
    setText(event.target.value);
    const msg = event.target.value;
    if (msg.trim().length < 3) {
      setMsg("invalid");
    } else {
      setMsg("valid");
    }
  };

  const clickHandler =()=>{
     setCounter(counter+1)
  }
  return (
    <>
    <form>
      <label> Your Message</label>
      <input type="text" onChange={textHandler} />
      <p>{msg}</p>
    </form>
    <div>
      <p id="counter" style={{color: '#d7adff', 'fontSize': '3rem' }}>{counter}</p>
      <button onClick={clickHandler}>Increment</button>
    </div>
  
    </>
    );
}

export default App;
