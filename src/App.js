import "./App.css";
import Navbar from "./Components/NavBar.js";
import Alert from "./Components/Alert.js";
import TextForm from "./Components/TextForm.js";
import About from "./Components/About.js";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  //State for Light and Dark Mode
  const [Mode, setMode] = useState(`light`);
  const onModef = () => {
    if (Mode === `light`) {
      setMode(`dark`);
      document.body.style.setProperty(
        "background-color",
        "#1c1d62",
        "important"
      );
      Showpopup("Dark Mode Enabled", "success");
      document.title = "TextUtils (Dark Mode)";
      setTimeout(() => {
        document.title = "TextUtils";
      }, 1500);
    } else {
      setMode(`light`);
      document.body.style.setProperty("background-color", "white", "important");
      Showpopup("Light Mode Enabled", "success");
      document.title = "TextUtils (Light Mode)";
      setTimeout(() => {
        document.title = "TextUtils";
      }, 1500);
    }
  };

  //Control Dismissible Popup/Alert
  const [Popup, setPopup] = useState(null);
  const Showpopup = (message, type = "success") => {
    setPopup({
      type: type,
      msg: message,
    });
    setTimeout(() => {
      setPopup(null);
    }, 3000);
  };

  return (
    <Router>
      <Navbar title="NavaBar" Mode={Mode} onMode={onModef} />
      <Alert Popup={Popup} />
      <Routes>
        <Route path="/About" element={<About Mode={Mode} />} />
        <Route
          path="/"
          element={
            <TextForm
              Showpopup={Showpopup}
              heading="Enter the text to analyze below"
              Mode={Mode}
            />
          }
        />
      </Routes>
    </Router>
  );
}
export default App;
