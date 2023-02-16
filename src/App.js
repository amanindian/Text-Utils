import './App.css';
import Navbar from './Components/NavBar.js'
import Alert from './Components/Alert.js'
import TextForm from './Components/TextForm.js'
import React, { useState } from 'react'



function App() {
  //State for Light and Dark Mode
  const [Mode, setMode] = useState(`light`)
  const onModef = () => {
    if (Mode === `light`) {
      setMode(`dark`);
      document.body.style.setProperty('background-color', '#1c1d62', 'important');
      Showpopup("Dark Mode Enabled", "success")
    } else {
      setMode(`light`)
      document.body.style.setProperty('background-color', 'white', 'important');
      Showpopup("Light Mode Enabled", "success")
    }
  }

  //Control Dismissible Popup/Alert
  const [Popup, setPopup] = useState(null)
  const Showpopup = (message, type = "success") => {
    setPopup({
      type: type,
      msg: message
    })
    setTimeout(() => {
      setPopup(null)
    }, 1500)
  }

  return (
    <>
      <Navbar title="NavaBar" Mode={Mode} onMode={onModef} />
      <Alert Popup={Popup} />
      <TextForm Showpopup={Showpopup} heading="Enter the text to analyze below" Mode={Mode} />
    </>
  );
}
export default App;
