import './App.css';
import React, { useState } from 'react';


function App() {
  const [counter, setCounter] = useState(0)

  const handlePlus = ()=>{
    if(counter<20){
      setCounter(counter+1)
    }else{
      setCounter(0)
    }
  }
  const handleMinus = ()=>{
    if(counter>0){
      setCounter(counter-1)
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Custom Counter</h1>
        <h3>Counter works from 0 through 20 (above or below will reset to zero)</h3>
      </header>
      <section className="App-body">
        <button onClick={handlePlus} className="btn">+</button>
          <h2>{counter}</h2>
        <button onClick={handleMinus} className="btn">-</button>
      </section>
    </div>
  );
}

export default App;
