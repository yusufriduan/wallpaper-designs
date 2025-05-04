import React, { useEffect, useState } from "react"; 
import { Link } from "react-router-dom";
import ChatBox from "./components/chatbox.jsx";
import Popup from "./components/popup.jsx";
import './App.css';

function GetStarted() {
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleWidthChange = (e) => {
    setWidth(e.target.value);
  };

  const handleHeightChange = (e) => {
    setHeight(e.target.value);
  };

  const isNextDisabled = !width || !height;

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true); // Show popup after 1 second
    }, 5000);

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  return (
    <div className="App">
      <header className="conversation">
        <ChatBox />
      </header>
      {showPopup && <Popup />}
    </div>
  );
}

export default GetStarted;