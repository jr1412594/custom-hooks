import React from 'react'
import Counter from './components/Counter'

import './App.css';
import { useState } from 'react'

function App() {

  const [ showCount, setShowCount ] = useState( false )
  
  return (
    <div className="App">
        <button 
        onClick={() => setShowCount(!showCount)}>
          {showCount ? "home" : "Count"}
        </button>
        {
          showCount ? 
          <Counter />:
          <h1>
            home
          </h1>
        }
    </div>
  );
}

export default App;
