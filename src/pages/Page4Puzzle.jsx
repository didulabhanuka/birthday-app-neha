import React, { useEffect, useState } from "react";
import "../App.css";
import Lottie from "lottie-react";
import successAnim from "../assets/success.json";
import errorAnim from "../assets/error.json";

// 🔹 FUNNY MESSAGES
const successMessages = [
  "Hmm… whatever. You still got it right 😏",
  "Okay genius, calm down 😎",
  "You sure you're not cheating? 👀",
  "Smart move… accidentally? 😌",
  "Look at you using your brain for once 😤"
];

const errorMessages = [
  "You fool 😭 that was totally wrong!",
  "Bro… seriously? 💀",
  "This ain't it chief 😒",
  "Try again… with your eyes open this time 👁️",
  "I'm not mad… just disappointed 😔"
];

// 🧠 RIDDLES
const riddles = [
  {
    q: "I’m everywhere in the room, but nobody can find me until I’m needed. What am I?",
    options: ["The Mobile", "The TV remote", "A microwave"],
    a: "The TV remote",
  },
  {
    q: "I turn complicated things into “I’ll fix it later”. What am I?",
    options: ["Motivation", "Common sense", "Last year's calendar"],
    a: "Common sense",
  },
  {
    q: "I function 99% of the time, but stop working when someone’s watching. What am I?",
    options: ["A toaster", "Your brain", "The sound system"],
    a: "Your brain",
  },
  {
    q: "I get checked 20 times a day but never change. What am I?",
    options: ["Your phone", "Your fridge", "Your wallet"],
    a: "Your fridge",
  },
  {
    q: "I’m loud when changing, quiet when working, and terrifying when silent. What am I?",
    options: ["Kids", "Teenagers", "The printer"],
    a: "Teenagers",
  },
  {
    q: "I exist in millions, cost nothing, but one missing ruins your day. What am I?",
    options: ["Wi-Fi bars", "Passwords", "Matching socks"],
    a: "Wi-Fi bars",
  },
  {
    q: "What has 4 wheels and flies?",
    options: ["A garbage truck", "A skateboard", "A delivery van"],
    a: "A garbage truck",
  },
  {
    q: "I can be long or short, I can be grown or bought, I can be painted or bare. What am I?",
    options: ["Roads", "Nails", "Speeches"],
    a: "Nails",
  },
  {
    q: "I have a owner, but everyone else tells me what to do. What am I?",
    options: ["A mom", "A Wi-Fi router", "The dog"],
    a: "A mom",
  },
  {
    q: "I increase your stress, lower your sleep, but somehow you still carry me everywhere. What am I?",
    options: ["Your phone charger cable", "Math textbook", "House keys"],
    a: "Your phone charger cable",
  },
];

export default function Page4Puzzle() {
  const [index, setIndex] = useState(0);
  const [popup, setPopup] = useState({ show: false, type: "", message: "" });
  const [shake, setShake] = useState(false);
  const [fade, setFade] = useState(true);

  const total = riddles.length;

  // 🌸 Petals on load
  useEffect(() => {
    createPetals();
  }, []);

  const createPetals = () => {
    const layer = document.getElementById("petal-layer");
    if (!layer) return;
    for (let i = 0; i < 8; i++) {
      const p = document.createElement("div");
      p.className = "petal";
      p.style.left = Math.random() * 100 + "vw";
      p.style.animationDuration = 3.5 + Math.random() * 2 + "s";
      layer.appendChild(p);
      setTimeout(() => p.remove(), 7000);
    }
  };

  const triggerConfetti = () => {
    const container = document.querySelector(".confetti-container");
    if (!container) return;
    for (let i = 0; i < 12; i++) {
      const c = document.createElement("div");
      c.className = "confetti";
      c.style.left = Math.random() * 100 + "%";
      c.style.animationDuration = 1.2 + Math.random() * 0.5 + "s";
      container.appendChild(c);
      setTimeout(() => c.remove(), 1400);
    }
  };

  // 🧠 ANSWER CHECK
  const check = (ans) => {
    const correct = riddles[index].a;
    const cleanAns = ans.trim().toLowerCase();
    const cleanCorrect = correct.toLowerCase();
    const isCorrect =
      cleanAns === cleanCorrect ||
      cleanAns.includes(cleanCorrect) ||
      cleanCorrect.includes(cleanAns);

    if (isCorrect) {
      const randomMsg = successMessages[Math.floor(Math.random() * successMessages.length)];

      setPopup({ show: true, type: "success", message: randomMsg });
      triggerConfetti();

      setTimeout(() => {
        setPopup({ show: false, type: "", message: "" });
        setFade(false);

        setTimeout(() => {
          setIndex((prev) => (prev + 1) % total);
          setFade(true);
        }, 200);
      }, 2500);
    } else {
      const randomMsg = errorMessages[Math.floor(Math.random() * errorMessages.length)];

      setPopup({ show: true, type: "error", message: randomMsg });
      triggerConfetti();
      setShake(true);

      setTimeout(() => {
        setPopup({ show: false, type: "", message: "" });
        setShake(false);
      }, 2500);
    }
  };

  return (
    <section
      className="page wish-full d-flex flex-column justify-content-center align-items-center text-center"
      style={{ width: "100vw", height: "100vh" }}
    >
      <h2 className="title py-5">
        Riddle Attack — Defend Yourself!
        <i className="bi bi-emoji-wink fs-2 px-3"></i>
      </h2>
      <div
        className={`content-box text-center ${fade ? "fade-in" : "fade-out"} ${
          shake ? "shake" : ""
        }`}
        style={{ transition: "0.3s" }}
      >
        <p
          className="subtitle mb-3"
          style={{
            maxWidth: "440px",
              fontWeight: "700",
            margin: "auto",
            marginTop: "100px",
            paddingBottom: "40px"
          }}
        >
          {riddles[index].q}
        </p>

        <div className="d-flex justify-content-center gap-3 flex-wrap">
          {riddles[index].options.map((opt) => (
          <button
            key={opt}
            onClick={() => check(opt)}
            className="btn btn-modern px-4"
            style={{
              color: "#5c3e94",
              borderRadius: "12px",
              fontWeight: "600",
              transition: "0.3s",
            }}
          >
            {opt.toUpperCase()}
          </button>

          ))}
        </div>
        
<div className="d-flex justify-content-center gap-3 flex-wrap"style={{ marginTop: "130px"}}>
      {/* Progress Text */}
      <p style={{ marginTop: "20px", opacity: 0.7, fontSize: "1rem" }}>
        Question {index + 1} / {total}
      </p>

      {/* Progress Bar */}
      <div style={{ width: "80%", height: "8px", background: "#e0d5ff", borderRadius: "10px", marginBottom: "20px" }}>
        <div
          style={{
            width: `${((index + 1) / total) * 100}%`,
            height: "100%",
            background: "#a78bfa",
            borderRadius: "10px",
            transition: "width 0.4s ease",
          }}
        ></div>
      </div>

</div>

      </div>

      {/* 🌸 Petal layer */}
      <div id="petal-layer" className="petal-layer"></div>

      {/* 💥 Confetti */}
      <div className="confetti-container"></div>

      {/* ⭐ LOTTIE POPUP ⭐ */}
      {popup.show && (
        <div
          className="popup-overlay"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.55)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
            backdropFilter: "blur(2px)",
          }}
        >
          <div
            style={{
              background: "white",
              padding: "25px",
              borderRadius: "12px",
              textAlign: "center",
              width: "260px",
              boxShadow: "0 0 20px rgba(0,0,0,0.2)",
            }}
          >
            <Lottie
              animationData={popup.type === "success" ? successAnim : errorAnim}
              style={{ height: 150 }}
            />
            <p style={{ marginTop: "10px", fontWeight: 600 }}>{popup.message}</p>
          </div>
        </div>
      )}
    </section>
  );
}
