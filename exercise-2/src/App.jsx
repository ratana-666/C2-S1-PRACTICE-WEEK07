import { useState } from "react";
function App() {
  /* You will need to use a boolean state to keep the value of the text entered */
  const [value ,setValue] = useState('')

  /* You will need a function to handle a key pressed on the first input and update the state*/
  // const HandleChangeValue = (event) => (
  //   changeValue(event.target.value)
  // )
  function HandleChangeValue(e){
    setValue(e.target.value);
  }

  return (
    <main>
      <h1>Upper Case Converter</h1>

      <label>Enter any text !</label>
      <input onChange={HandleChangeValue} />

      <p>
        <label>Here is the text in upper case</label>

        {/* This input will need to display the text entered in lower case */}
        <input  disabled value={value.toUpperCase()}/>
      </p>
    </main>
  );
}

export default App;
