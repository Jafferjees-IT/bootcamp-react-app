import React, { useState } from 'react';
import './App.css';
import Counter from './Counter.js';


function App() {

  let [count, setCount] = useState(1);
  let [isMorning, setMorning] = useState(true)
  return (
    <div className="App">
      <header className="App-header">
        <h1 className={`App-Button ${isMorning ? 'dayLight' : 'App-Button'}`}>Number Type = {isMorning ? 'Odd' : 'Even'}</h1>
        <h1>Value of counter variable is : {count} </h1>
        <Counter countervalue={count} />
        <button className='App-Button' onClick={
          () => {
            setCount(count + 1)
            setMorning(!isMorning)
          }
        }>
          Update counter
        </button>

      </header>

    </div>
  );
}

export default App;
