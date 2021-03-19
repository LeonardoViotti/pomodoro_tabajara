import './App.css';
import React, { useState } from "react";

import Timer from './components/Timer.js';

function App() {
  
  //---------------------------------------------------------------------------
  // Default state
  
  // Current time
  const time = new Date();
  
  //Current cycle
  // const current_cycle = Object.values(subCycles)[0].time
  const current_cycle = 10  
  time.setSeconds(time.getSeconds() + current_cycle); 
  
  // Default state

  const [cycles, setCycles] = useState([
    {
      id: 1,
      text: 'Work',
      time: 25,
    },
    {
      id: 2,
      text: 'Rest',
      time: 5,
    },
  ])
  
  
  // console.log(current_cycle)
  //---------------------------------------------------------------------------
  // App UI
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Pomodoro Tabajara</h1>
        <Timer expiryTimestamp={time} cycles={cycles}/>
      </header>
    </div>
  );
}

export default App;
