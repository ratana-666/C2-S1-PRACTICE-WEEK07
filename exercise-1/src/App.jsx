  import React, { useState } from "react";
  function App() {
    /* You will need to use a boolean state to manage the weather */
    const [isRaining , setweather] = useState(false)
    const [current, setCurrent] = useState(false)

    function onSunClick() {
      // Complete this code when we click on Sunny Time
      setweather(false)
    }

    function onRainClick() {
      // Complete this code when we click on Sunny Time
      setweather(true)
    }

    function getTitle() {
      // This function manage the H1 text, depending on the weather
      if (isRaining) {
        return(
          <h1>Rain Time!</h1>
        )
      }else{
        return(
          <h1>Sun Time!</h1>
        )
      }
    }

    function getBackgroundColor() {
      // This function manage the main class value, depending on the weather
      if (isRaining) {
        return "rainy"
      }else{
        return "sunny"
      }
    }
    
    return (
      <main className={getBackgroundColor()}>
        <h1>{getTitle()}</h1>
        <button onClick={onSunClick} >Sunny Time</button>
        <button onClick={onRainClick} >Rain Time</button>
      </main>
    );
  }

  export default App;
