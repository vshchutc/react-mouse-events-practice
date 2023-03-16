import { useRef, useState } from 'react';
import './App.css';

function App() {
  const counterRef = useRef(null);
  const [history, setHistory] = useState<{ x: number, y: number}[]>([])
  const [isCounterOn, setIsCounterOn] = useState(false);

  return (
    <div className="App">
      <div ref={counterRef}  onMouseMove={(e)=> {
        const position = { x: e.clientX, y: e.clientY };
        const size = 500;
        const isPositionNotNullAndInsideCurrentRef = position.x <= size && position.x !== null &&  position.y <= size && position.y !== null;
        if(isCounterOn && isPositionNotNullAndInsideCurrentRef){
            setHistory([...history, { x: e.clientX, y: e.clientY} ])
        }  
      }} onClick={() => {
        if(!isCounterOn){
          setHistory([])
        }
        setIsCounterOn(!isCounterOn)
      }} style={{width:500, height:500, backgroundColor: "#fcdcdc"}}
      ></div>
      isOn {isCounterOn + ''} {history.length}
    <br/>
      {!isCounterOn && history.map((pos) => <div><span>{pos.x}</span> <span>{pos.y}</span></div>)}
    </div>
  );
}

export default App;
