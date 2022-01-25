
/*
TO DO:
 - Find a way to run through the cycles list
 - Generalize what happens when the subcycle ends.

*/


//---------------------------------------------------------------------------
// Settings

import './App.css';
import React, { useState } from "react";

// import Timer from './components/Timer.js';
import Timer from './components/Timer2.js';


export const App = ({ }) => {

  
  //---------------------------------------------------------------------------
  // Default state
  
  // Current time
  const time = new Date();
  
  //Current cycle
  // const current_cycle = Object.values(subCycles)[0].time
  const current_cycle = 10  
  time.setSeconds(time.getSeconds() + current_cycle); 
  
  // Default state
  const cycles = [
    {
      id: 1,
      text: 'Work',
      time: 1,
    },
    {
      id: 2,
      text: 'Break',
      time: 2,
    },
    {
      id: 3,
      text: 'Long break',
      time: 15,
    },
  ];
  
  // Default list of cycles
  const [cycleList, setCycleList] = useState([1,2,1,2,3])
  
  console.log(cycleList[1])
  
  // console.log(current_cycle)
  //---------------------------------------------------------------------------
  // App UI
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Pomodoro Tabajara</h1>
        {/* <Timer expiryTimestamp={time} cycles={cycles}/> */}
        <Timer cycles={cycles}/>

      </header>
    </div>
  );
}
