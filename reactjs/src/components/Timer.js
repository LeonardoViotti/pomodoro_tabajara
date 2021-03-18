import { useTimer } from 'react-timer-hook';
import { useState } from 'react'


const Timer = ({ expiryTimestamp }) => {
  
  let cycle_id = 1;
  const nextCycle = () => {
    console.warn('onExpire called');
    cycle_id = cycle_id++;

  }
  
  const {
        seconds,
        minutes,
        hours,
        days,
        isRunning,
        start,
        pause,
        resume,
        restart,
      } = useTimer({ expiryTimestamp, onExpire: () => nextCycle() });
      
    
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
    console.log(cycle_id)
      
      
      return (
        <div style={{textAlign: 'center'}}>
          <div style={{fontSize: '100px'}}>
            <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
          </div>
          <p>{isRunning ? 'Running' : 'Not running'}</p>
          <button onClick={start}>Start</button>
          <button onClick={pause}>Pause</button>
          <button onClick={resume}>Resume</button>
          <button onClick={() => {
            // Restarts to 5 minutes timer
            const time = new Date();
            time.setSeconds(time.getSeconds() + 300);
            restart(time)
          }}>Restart</button>
        </div>
      );
}

export default Timer
