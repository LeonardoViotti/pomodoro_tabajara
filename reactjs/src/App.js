import './App.css';
import Timer from './components/Timer.js'
// import { useTimer } from 'react-timer-hook';


// function MyTimer({ expiryTimestamp }) {
//   const {
//     seconds,
//     minutes,
//     hours,
//     days,
//     isRunning,
//     start,
//     pause,
//     resume,
//     restart,
//   } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });


//   return (
//     <div style={{textAlign: 'center'}}>
//       <h1>react-timer-hook </h1>
//       <p>Timer Demo</p>
//       <div style={{fontSize: '100px'}}>
//         <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
//       </div>
//       <p>{isRunning ? 'Running' : 'Not running'}</p>
//       <button onClick={start}>Start</button>
//       <button onClick={pause}>Pause</button>
//       <button onClick={resume}>Resume</button>
//       <button onClick={() => {
//         // Restarts to 5 minutes timer
//         const time = new Date();
//         time.setSeconds(time.getSeconds() + 300);
//         restart(time)
//       }}>Restart</button>
//     </div>
//   );
// }



function App() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 600); // 10 minutes timer
  
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
