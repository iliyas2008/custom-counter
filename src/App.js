import './App.css';
import React, { useReducer }  from 'react';
import { counterReducer, initialState } from './reducer';

function App() {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Custom Counter</h1>
        <h3>Counter works from 0 through 20 (above or below will reset to zero)</h3>
      </header>
      <section className="App-body">
        <button onClick={()=>dispatch({type: "increment"})} className="btn">+</button>
          <h2>{state.counter}</h2>
        <button onClick={()=>dispatch({type: "decrement"})} className="btn">-</button>
      </section>
    </div>
  );
}

export default App;
