import React, { useState } from 'react';

function ClickableDonut(props) {
  return (
    <>
      <CounterDisplay />
    </>
  );
}

const CounterDisplay = (props) => {
  const [count, setCount] = useState(0); 

  const DonutButton = (props) => {
    const [size, setSize] = useState(100);
    return (
      <img src="https://cdn.pixabay.com/photo/2020/01/14/10/55/cartoon-4764725_1280.png" height={size} alt="donut.png" onClick={() => setCount(count + 1)} onMouseDown={() => setSize(size - 10)} onMouseUp={() => setSize(size + 10)}/>
    );
  }
  
  const EvilDonutButton = (props) => {
    const [size, setSize] = useState(100);
    return (
      <img src="https://cdn.pixabay.com/photo/2020/01/14/10/55/cartoon-4764725_1280.png" height={size} alt="donut.png" onClick={() => setCount(count - 1)} onMouseDown={() => setSize(size - 10)} onMouseUp={() => setSize(size + 10)}/>
    );
  }

  return (
      <>
      <h1>I'M A DONUT!</h1>
      <h3>Donut count: {count}</h3>
      <div>
        <column><DonutButton /></column>
        <column><EvilDonutButton /></column>
      </div>
      {count >= 10 && 
        <h1>You Win! ^.^</h1>
      }
      </>
  ); 
}


export default ClickableDonut;