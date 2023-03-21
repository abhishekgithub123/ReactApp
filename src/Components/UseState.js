import react,{useState} from 'react';

const UseState = () => {

    const [currentValue,setValue] = useState(1);

    function Inc(){
        setValue(currentValue + 1);
        document.title = "hello";
    }

    function Dec(){
        setValue(currentValue - 1);
    }
    

    return (
        <>
    
          <h1>{currentValue}</h1>
          <button onClick={Inc}>Inc..</button>
          <button onClick={Dec}>Dec..</button>
        </>
    )
}

export default UseState;