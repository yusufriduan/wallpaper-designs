import React, { useState, useEffect } from 'react';
import "../App.css";

function ChatBox() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [showMessages, setShowMessages] = useState(false); // Initially hidden
  const [visibleMessageIndex, setVisibleMessageIndex] = useState(0); // Tracks the currently visible message index

  const predefinedMessages = [
    "hi!",
    "before we start, what’s the screen size that we gonna create for?",
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessages(true); // Show messages after 1 second
    }, 250);

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  useEffect(() => {
    if (showMessages && visibleMessageIndex < predefinedMessages.length) {
      const interval = setInterval(() => {
        setVisibleMessageIndex((prevIndex) => prevIndex + 1);
      }, 1000); // Show each message with a 1-second delay

      return () => clearInterval(interval); // Cleanup the interval on unmount or when the effect re-runs
    }
  }, [showMessages, visibleMessageIndex, predefinedMessages.length]);

  return (
    <div
      className="chatbox-container"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px',
        width: 'fit-content',
        padding: '10px',
      }}
    >
      {showMessages && (
        <>
          {predefinedMessages.map((message, index) => (
            <div
              key={index}
              style={{
                opacity: index < visibleMessageIndex ? 1 : 0, // Fully visible if index < visibleMessageIndex
                transition: 'opacity 0.5s ease-in-out', // Smooth fade-in effect
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontWeight: index === 0 ? 'bold' : 'normal',
                  fontSize: index === 1 ? '80%' : '100%',
                }}
              >
                {message}
              </p>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default ChatBox;