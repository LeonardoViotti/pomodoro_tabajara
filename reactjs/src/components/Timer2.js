


import React, { useState, useEffect } from "react";

// Timer function
const Timer = ({ cycles }) => {

    // Set work cycle
    const work_cycle = cycles.filter( (cycle) => cycle.id === 1 )[0];
    const break_cycle = cycles.filter( (cycle) => cycle.id === 2 )[0];
    
    // Set timer varibles
    // const [minutes, setMinutes] = useState(0);
    const [minutes, setMinutes] = useState(work_cycle.time);
    const [seconds, setSeconds] = useState(0);
    const [displayMessage, setDisplayMessage] = useState(false);
    
    // Manually programed timer that updates every 1000 milliseconds
    useEffect(() => {
      const interval = setInterval(() => {
        clearInterval(interval);
        
        // When minutes flip
        if (seconds === 0) {
          // Regular minutes decrease
          if (minutes !== 0) {
            setSeconds(59);
            setMinutes(minutes - 1);
          // Sub cycle flip 
          } else {
            const minutes = displayMessage ? work_cycle.time-1 : break_cycle.time-1;
            const seconds = 59;
            
            setSeconds(seconds);
            setMinutes(minutes);
            setDisplayMessage(!displayMessage);
          }
        // Regular second decrease
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
          {displayMessage && <div> Break time! New session starts in:</div>}
        </div>
        <div className="timer">
          {timerMinutes}:{timerSeconds}
        </div>
      </div>
    );
}   

export default Timer


// Reference: 
// https://github.com/alekspopovic/pomodoro/blob/main/pomodoro/src/Pomodoro.js
// https://www.youtube.com/watch?v=9z1qBcFwdXg