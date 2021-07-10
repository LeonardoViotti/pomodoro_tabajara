// https://github.com/alekspopovic/pomodoro/blob/main/pomodoro/src/Pomodoro.js
// https://www.youtube.com/watch?v=9z1qBcFwdXg

import React, { useState, useEffect } from "react";

// Timer function
const Timer = ({ cycles }) => {
    
    // Draft state from App.js
    // Counter to track what cycle is on.
    const [count, setCount] = useState(1);  // Set the initial count state to 1

    // Update cycle
    const current_count = count
    const sub_cycle = cycles.filter( (cycle) => cycle.id === current_count )[0]
    
    // console.log(count);
    // console.log(sub_cycle.time);
    
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(5);
    const [displayMessage, setDisplayMessage] = useState(false);
    
    // Manually programed timer that updates every 1000 milliseconds
    useEffect(() => {
      let interval = setInterval(() => {
        clearInterval(interval);
        
        if (seconds === 0) {
          if (minutes !== 0) {
            setSeconds(59);
            setMinutes(minutes - 1);
          } else {
            let minutes = displayMessage ? 24 : 4;
            let seconds = 59;
            
            setSeconds(seconds);
            setMinutes(minutes);
            setDisplayMessage(!displayMessage);
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    }, [seconds]);
  
    // Hacky way of making sure time is displayed in double digits 
    const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;
  
    return (
      <div className="pomodoro">
        <div className="message">
          {displayMessage && <div>Break time! New session starts in:</div>}
        </div>
        <div className="timer">
          {timerMinutes}:{timerSeconds}
        </div>
      </div>
    );
}   

export default Timer
