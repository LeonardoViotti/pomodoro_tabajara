import './App.css';

import { useState } from 'react'
import Timer from './components/Timer.js'



function App() {
  
  //---------------------------------------------------------------------------
  // Default state
  
  // Set object of cycles
  const [subCycles, setSubCycles] = useState([
    {
      id: 1,
      text: 'Work',
      time: 1200
    },
    {
      id: 1,
      text: 'Break',
      time: 300
  },
  ])
  
  // Current time
  const time = new Date();
  
  //Current cycle
  // const current_cycle = Object.values(subCycles)[0].time
  const current_cycle = 10

  
  time.setSeconds(time.getSeconds() + current_cycle); // 10 minutes timer
  
  console.log(current_cycle)
  //---------------------------------------------------------------------------
  // App UI
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Pomodoro Tabajara</h1>
        <Timer expiryTimestamp={time} />
        {/* <div>
          <MyTimer expiryTimestamp={time} />
        </div> */}
      </header>
    </div>
  );
}

export default App;
