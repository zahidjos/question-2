import React, { useState } from 'react';
import './App.css';
import AddNumber from './component/AddNumber/AddNumber';

function App() {
  const[number,setNumber]=useState(10);
  return (
    <div className="App">
      <h2>The number: {number}</h2>
     <AddNumber setNumber={setNumber}></AddNumber>
    </div>
  );
}

export default App;
