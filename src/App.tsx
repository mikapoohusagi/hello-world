import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  const [count,setCount]=useState(0)

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p data-testid="count">{count}</p>
        <button type='button' data-testid="count-up-button" onClick={()=>setCount((count)=>count+1)}>countUp</button>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
