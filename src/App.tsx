import { useState } from 'react';
import ContainerToTrack from './ContainerToTrack';
import './App.css';

function App() {
  const [history, setHistory] = useState<{ x: number, y: number}[]>([])
  const [isCounterOn, setIsCounterOn] = useState(false);

  return (
    <div className="App">
      <ContainerToTrack history={history} setHistory={setHistory} isCounterOn={isCounterOn} setIsCounterOn={setIsCounterOn} />
      isOn {isCounterOn + ''} {history.length}
    <br/>
      {!isCounterOn && history.map((pos) => <div><span>{pos.x}</span> <span>{pos.y}</span></div>)}
    </div>
  );
}

export default App;
