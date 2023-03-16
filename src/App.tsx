import { useState } from 'react';
import ContainerToTrack from './ContainerToTrack';

function App() {
  const [history, setHistory] = useState<{ x: number, y: number}[]>([])
  const [isCounterOn, setIsCounterOn] = useState(false);

  return (
    <div>
      <ContainerToTrack
        history={history}
        setHistory={setHistory}
        isCounterOn={isCounterOn}
        setIsCounterOn={setIsCounterOn}
      />
      {isCounterOn && "Calculating..."}

      {!isCounterOn && history.map((pos) => <span>[ X:{pos.x} Y:{pos.y}],</span>)}
      
    </div>
  );
}

export default App;
