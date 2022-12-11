import React, {useState} from 'react';
import './App.css';



function App() {
  
  let [count, setCount] = useState(1);
  return (
    <div className="App">
      <header className="App-header">
  
      <h1>Value of counter variable is : {count} </h1>
      <button onClick={
        ()=> setCount(count++)
      }>
        Update counter
      </button>
      </header>
      
    </div>
  );
}

export default App;
