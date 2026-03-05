import React, { useState } from "react";

function App() {
  /* You will need to use many state to keep the inut values and other needs */
  const [a , setA] = useState(0)
  const [b , setB] = useState(0)
  /* You will need some function to handle the key pressed and button events */
function onA (e){
  setA(e.target.value)
}

function onB (e){
  setB(e.target.value)
}
function compute(){
  if(typeof a === 'number' && typeof b === 'number'){
    return a+b
  }else{
    return "this is not a number"
  }
}
  return (
    <main>
      <h1>Calculator</h1>

      <label>A =</label>
      <input onKeyUp={onA} />

      <label>B =</label>
      <input onKeyUp={onB} />

      <label>A + B =</label>

      {/* When Compute buton is clicked, this input display the sum of the 2 numbers, or the error message in RED */}
      <input disable value={compute()}/> 
      <button onClick={compute}>Compute</button>
    </main>
  );
}

export default App;
