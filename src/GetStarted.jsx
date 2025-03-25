import React, { useState } from "react"; 
import { Link } from "react-router-dom";
import ChatBox from "./static/chatbox (a).svg";
import './App.css';

function GetStarted() {
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');

  const handleWidthChange = (e) => {
    setWidth(e.target.value);
  };

  const handleHeightChange = (e) => {
    setHeight(e.target.value);
  };

  const isNextDisabled = !width || !height;

  return (
    <div className="App">
      <header className="conversation" style={{ display:"flex", flexDirection:"row-reverse", justifyContent:"space-around"}}>
        <div className="Questions" style={{ display:"flex", flexDirection:"column", alignItems:"flex-end"}}>
          <div className="greetings">
            <img src={ChatBox} alt="chatbox" />
            <h5 style={{ position:'absolute', bottom:'72.5%', left:'30%', margin:0}}>hi there!</h5>
          </div>
          <div className="1stquestion">
            <svg xmlns="http://www.w3.org/2000/svg" width="308" height="70" viewBox="0 0 308 70" fill="none">
              <path d="M295 53.225C295 65.1622 302.594 67.6728 306.391 67.4359C300.98 71.9834 288.711 65.5411 283.253 61.7516H12.7466C3.63409 61.7516 1.11865 56.0672 1 53.225V12.724C1 2.20793 5.98341 0.999997 12.7466 1H283.253C295.783 1 295 7.03963 295 12.724V53.225Z" fill="#D9D9D9" stroke="black"/>
            </svg>
            <h5 style={{ position:"absolute", bottom:"18%", left:"8%", margin:0, fontSize:"15px" }}>before we start, what’s the screen<br />size that we gonna create for?</h5>
          </div>
        </div>
        <div className="Answers" style={{ position:"relative"}}>
          <div className="1stanswer">
            <svg xmlns="http://www.w3.org/2000/svg" width="308" height="70" viewBox="0 0 308 70" fill="none">
              <path d="M13.3906 53.225C13.3906 65.1622 5.79688 67.6728 2 67.4359C7.41055 71.9834 19.6792 65.5411 25.1372 61.7516H295.644C304.757 61.7516 307.272 56.0672 307.391 53.225V12.724C307.391 2.20793 302.407 0.999997 295.644 1H25.1372C12.6075 1 13.3906 7.03963 13.3906 12.724V53.225Z" fill="#D9D9D9" stroke="black"/>
            </svg>
            <h5 style={{ position:"absolute", bottom:"61.5%", left:"12%", fontSize:"18px"}}> Pick a width (px):</h5>
            <input type="number" id="width" name="width" min="0" value={width} onChange={handleWidthChange} style={{ position:"absolute", bottom:"64.5%", left:"12%"}}/>
          </div>
          <div className="2ndanswer">
            <svg xmlns="http://www.w3.org/2000/svg" width="308" height="70" viewBox="0 0 308 70" fill="none">
              <path d="M13.3906 53.225C13.3906 65.1622 5.79688 67.6728 2 67.4359C7.41055 71.9834 19.6792 65.5411 25.1372 61.7516H295.644C304.757 61.7516 307.272 56.0672 307.391 53.225V12.724C307.391 2.20793 302.407 0.999997 295.644 1H25.1372C12.6075 1 13.3906 7.03963 13.3906 12.724V53.225Z" fill="#D9D9D9" stroke="black"/>
            </svg>
            <h5 style={{ position:"absolute", bottom:"12.5%", left:"12%", fontSize:"18px"}}> Pick a height (px):</h5>
            <input type="number" id="height" name="width" min="0" value={height} onChange={handleHeightChange} style={{ position:"absolute", bottom:"15.5%", left:"12%"}}/>
          </div>
          <Link to='/' className="next" style={{ position:"fixed", left:"75%", pointerEvents: isNextDisabled ? 'none' : 'auto'}}>Next</Link>

        </div>
      </header>
    </div>
  );
}

export default GetStarted;