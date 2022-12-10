import React from 'react';
import './App.css';
import Dinner from './dinner.js';


function App() {
  return (
    <div className="App">
      <header className="App-header">
    <Dinner dishname="Haleem" sweet="Kheer"/>
    <Dinner dishname="karhai" sweet="Jalibi"/>
    <Dinner dishname="Daal" sweet="Gajar ka Halwa"/>
      <h1>Hello World!</h1>
      </header>
    </div>
  );
}

export default App;
