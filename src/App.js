import './App.css';
import Navbar from './Components/NavBar.js'
import TextForm from './Components/TextForm.js'
import React, { useState } from 'react'



function App() {
  const [Mode, setMode] = useState(`light`)
  const onModef = () => {
    if (Mode === `light`) {
      setMode(`dark`);
      document.body.style.setProperty('background-color', '#1c1d62', 'important');
    } else {
      setMode(`light`)
      document.body.style.setProperty('background-color', 'white', 'important');
    }
  }

  return (
    <>
      <Navbar title="NavaBar" Mode={Mode} onMode={onModef} />
      <TextForm heading="Enter the text to analyze below" Mode={Mode} />
    </>
  );
}
export default App;

