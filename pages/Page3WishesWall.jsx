import React, { useEffect, useState } from "react";

const messagesScript = [
  { sender: "Nethmi", text: "You realise every year you become more impossible to replace, right?", side: "left" },
  { sender: "Sanu", text: "Some people walk in and the room just feels lighter. That’s you.", side: "left" },
  { sender: "Ravindu", text: "Not everyone gets to say they know someone like you. I’m keeping the bragging rights.", side: "right" },
  { sender: "Kavi", text: "Stay exactly this unbothered, this kind, and this loud in your own way.", side: "left" },
  { sender: "Ashen", text: "Keep this version of you. It fits perfectly.", side: "right" },
  { sender: "Sanu", text: "Some people walk in and the room just feels lighter. That’s you.", side: "left" },
];

export default function Page3WishesWall() {
  const [chat, setChat] = useState([]);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < messagesScript.length) {
        setChat(prev => [...prev, messagesScript[i]]);
        i++;
      } else clearInterval(interval);
    }, 1100);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="page wish-full d-flex flex-column justify-content-center align-items-center text-center"
      style={{ width:"100vw", height:"100vh" }}>

      {/* ✅ TITLE + SUBTITLE ARE NOW OUTSIDE */}
      <div className="chat-header">
        <h1 className="title">Group Chat</h1>
      </div>

      <div className="content-box chat-box">
        <p className="subtitle">Birthday messages dropping in</p>
        {/* Removed from here 🔼 */}

        <div className="chat-wall">
          {chat.map((m, idx) => {
            if (!m) return null;
            return (
              <div key={idx} className={`chat-bubble ${m.side === "right" ? "right" : "left"}`}>
                <span className="chat-sender">{m.sender}</span>
                <p className="chat-text">{m.text}</p>
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
}
