import React, { useEffect, useState } from 'react';

export const Counter = (props) => {
  const [counter, setCounter] = useState(0);

  const style = {
    border: '1px solid grey',
    width: '50px',
    height: '50px',
  };

  const increment = () => {
    setCounter((prevCounter) => {
      return prevCounter + 1;
    });
  }

  useEffect(() => {
    console.log('MOUNT');
    return () => {
      console.log('UNMount');
    };
  },[counter])



  return(
    <div>
      <button type="button" onClick={increment} style={style}>+</button>
      <button type="button" onClick={() => setCounter(counter - 1)} style={style}>-</button>
      <p>{counter}</p>

    </div>
  )
}