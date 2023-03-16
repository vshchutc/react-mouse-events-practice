import { MouseEvent } from "react";

const size = 500;

function ContainerToTrack(props: {setHistory: (history: { x: number, y: number}[]) => void, history:{ x: number, y: number}[], setIsCounterOn: (isOn: boolean) => void, isCounterOn: boolean} ) {
    const {setHistory, history, setIsCounterOn, isCounterOn} = props;
    const mouseMoveCallback = (e:MouseEvent) => {
        const position = { x: e.clientX, y: e.clientY };
        const isPositionNotNullAndInsideCurrentRef = position.x <= size && position.x !== null &&  position.y <= size && position.y !== null;

        if(isCounterOn && isPositionNotNullAndInsideCurrentRef){
            setHistory([...history, position])
        }  
    };
    const clickCallback = () => {
        if(!isCounterOn){
            setHistory([])
        }
        setIsCounterOn(!isCounterOn)
    }

    return (
        <div onMouseMove={mouseMoveCallback} onClick={clickCallback} style={{width:size, height:size, backgroundColor: "#fcdcdc"}}
        ></div>
  );
}

export default ContainerToTrack;
