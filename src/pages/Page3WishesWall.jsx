import React, { useEffect, useState, useRef } from "react";

const messagesScript = [
  { sender: "Zyke", text: "Happy Birthday to my girl 🥳 You’re literally the best part of every day. Stay you, because you’re doing it perfectly 😌", side: "right" },
  { sender: "Kavi", text: "Girl, if birthdays were awards, you’d win for Best Smile + Best Chaos + Best Everything 😌", side: "left" },
  { sender: "Kathy", text: "Birthday girl alert! 🚨 Hope your day is full of laughs, cake, and everything chaotic and cute… just like you.", side: "right" },
  { sender: "Farzoon", text: "Happy Birthday! If awesomeness had a name… well, it would literally be yours 😂 Stay unbeatable.", side: "left" },
];

export default function Page3WishesWall() {
  const [chat, setChat] = useState([]);

  const messageIndexRef = useRef(0);
  const messageIntervalRef = useRef(null);
  const reloadIntervalRef = useRef(null);

  const startMessageSequence = () => {
    // Clear any existing intervals before starting fresh
    clearInterval(messageIntervalRef.current);

    // Reset state
    setChat([]);
    messageIndexRef.current = 0;

    messageIntervalRef.current = setInterval(() => {
      const i = messageIndexRef.current;

      if (i < messagesScript.length) {
        setChat(prev => [...prev, messagesScript[i]]);
        messageIndexRef.current++;
      } else {
        clearInterval(messageIntervalRef.current);
      }
    }, 1100);
  };

  useEffect(() => {
    // Start first run
    startMessageSequence();

    // Auto repeat every 60 seconds
    reloadIntervalRef.current = setInterval(() => {
      startMessageSequence();
    }, 60000);

    return () => {
      clearInterval(messageIntervalRef.current);
      clearInterval(reloadIntervalRef.current);
    };
  }, []);

  return (
    <section className="page wish-full d-flex flex-column justify-content-center align-items-center text-center"
      style={{ width:"100vw", height:"100vh" }}>

      <div className="chat-header mb-4">
        <h1 className="title">
          <i class="bi bi-chat-square-heart fs-3 px-3"></i>Group Chat
        </h1>
      </div>

      <div className="content-box chat-box">
        <p className="subtitle">Birthday messages dropping in</p>

        <div className="chat-wall">
          {chat.map((m, idx) => (
            <div key={idx} className={`chat-bubble ${m.side}`}>
              <span className="chat-sender">{m.sender}</span>
              <p className="chat-text">{m.text}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
