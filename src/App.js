import { useEffect, useState } from "react";
import './App.css';

function App() {

  const [timer, setTimer] = useState(0);

  useEffect(() => {
    if(timer < 10){
      setTimeout(() => {
        setTimer(timer + 1);
      }, 1000)
    }
  }, [timer])

  return (
    <div className="App">
      <h1>Count Down Timer</h1>
      <div className={timer < 10 ? 'timer' : 'timeOut'}>
        <h4>{timer}</h4>
      </div>
    </div>
  );
}

export default App;
