import React, { useState } from 'react';
import './App.css';
import Counter from './Counter.js';


function App() {

  let [count, setCount] = useState(1);
  let [isMorning, setMorning] = useState(true)
  return (
    <div className={`App ${isMorning ? 'dayLight' : ' '}`}>
      <header className="App-header">
        <h1>Day time = {isMorning ? 'Morning' : 'Night'}</h1>
        <h1>Value of counter variable is : {count} </h1>
        <Counter countervalue={count} />
        <button className="App-Button" onClick={
          () => setCount(count + 1)
        }>
          Update counter
        </button>
      </header>

    </div>
  );
}

export default App;
