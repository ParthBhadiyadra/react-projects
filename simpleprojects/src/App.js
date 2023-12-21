import './App.css';
import {useState} from 'react';

function App() {
  const [temperature,setTemperature] = useState(10);
  const [color ,setColor] = useState("cold");
  let limit =12;
  const IncrementTemp = ()=>{
    let newTemp = temperature + 1;
    if(newTemp > limit)
    {
      setColor("hot");
    }   
    setTemperature(newTemp);
  }

  const decreaseTemp = ()=>
  {
    let newTemp = temperature -1;
    if(newTemp < limit)
    {
      setColor("cold");
    }
    setTemperature(newTemp);
  }

  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className={`temperature-display ${color}`}>{temperature} ℃</div>
      </div>
    <div className="button-container">
      <button onClick={()=>IncrementTemp()}>+</button>
      <button onClick={()=>decreaseTemp()}>-</button>
    </div>
    </div>
  );
}

export default App;
