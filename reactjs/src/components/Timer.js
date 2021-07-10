import { useTimer } from 'react-timer-hook';
import { useState } from 'react'


const Timer = ({ expiryTimestamp, cycles }) => {

  // // Counter to track what cycle is on.
  // const [count, setCount] = useState(1);  // Set the initial count state to 1
  
  // // Create handleIncrement event handler
  // const handleIncrement = () => {
  //   setCount(prevCount => prevCount + 1);
  // };
  
  // Cycle duration state
  // const [duration, setDuration] = useState();
  
  
  // Set initial timer
  // expiryTimestamp = expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + )
  
  // End of the cycle
  const nextCycle = () => {
    console.warn('onExpire called');
    
    // Add 1 to the counter
    // handleIncrement()
    
    expiryTimestamp = expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + 13)
    // Update cycle
    // const current_count = count
    // const sub_cycle = cycles.filter( (cycle) => cycle.id === current_count )[0]
    
    // console.log(count);
    // console.log(sub_cycle.time);
  }
  
  const {
        seconds,
        minutes,
        // hours,
        // days,
        isRunning,
        start,
        pause,
        resume,
        restart,
      } = useTimer({ expiryTimestamp, onExpire: () => nextCycle() });
  //------------------------------------------------------
  // UI
  
  function padLeadingZeros(num, size) {
    var s = num+"";
    while (s.length < 2) s = "0" + s;
    return s;
}
  
  return (
    <div style={{textAlign: 'center'}}>
      <div style={{fontSize: '100px'}}>
        <span>{padLeadingZeros(minutes)}</span>:<span>{padLeadingZeros(seconds)}</span>
      </div>
      <p>{isRunning ? 'Running' : 'Not running'}</p>
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={resume}>Resume</button>
      <button onClick={() => {
        // Restarts to 5 minutes timer
        const time = new Date();
        time.setSeconds(time.getSeconds() + 10);
        restart(time)
      }}>Restart</button>
    </div>
      );
}

export default Timer
