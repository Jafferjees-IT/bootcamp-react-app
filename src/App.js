import React, {useState} from 'react';
import './App.css';
import Counter from './Counter.js';




function App() {
  
  let [count, setCount] = useState(1);
  return (
    <div className="App">
      <header className="App-header">
  
      <h1>Value of counter variable is : {count} </h1>
      <Counter countervalue={count}/>
      <button onClick={
        ()=> setCount(count+1)
      }>
        Update counter
      </button>
      </header>
      
    </div>
  );
}

export default App;
