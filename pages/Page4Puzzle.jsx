import React, { useEffect, useState } from "react";
import "../App.css";

// ✅ 10 adult-ish riddles
const riddles = [
  {
    q: "I’m everywhere in the room, but nobody can find me until I’m needed. What am I?",
    options: ["The TV", "The TV remote", "A microwave"],
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

// 🎉 5 bonus adult humor lines
const bonusJokes = [
  "Why do adults exercise? Staying young mentally is free, physically is subscription-based.",
  "I tried to adult today… 0/10, needs more naps.",
  "Adulthood is a software update that happens at the worst time.",
  "What gets wet while drying?… Also the symbol of adult life: a towel.",
  "I do everything and still don’t know what to cook. That’s adulthood boss level.",
];

export default function Page4Puzzle() {
  const [index, setIndex] = useState(0);
  const [result, setResult] = useState("");
  const [showBonus, setShowBonus] = useState(false);

  // 🌸 Load petals on open
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

  const check = (ans) => {
    const correct = riddles[index].a;
    const cleanAns = ans.trim().toLowerCase();
    const cleanCorrect = correct.toLowerCase();

    if (cleanAns === cleanCorrect || cleanAns.includes(cleanCorrect) || cleanCorrect.includes(cleanAns)) {
      setResult("✅ Correct — Mind unlocked!");
    } else {
      setResult("❌ Nope, try again!");
    }

    triggerConfetti();
  };

  const next = () => {
    if (index < riddles.length - 1) {
      setIndex(index + 1);
      setResult("");
    } else {
      setShowBonus(true);
      setResult("");
      setIndex(0);
    }
  };

  const prev = () => {
    if (index > 0) {
      setIndex(index - 1);
      setResult("");
    }
  };

  return (
    <section className="page wish-full d-flex flex-column justify-content-center align-items-center text-center"
      style={{ width:"100vw", height:"100vh" }}>
      {/* Move the title and subtitle outside the content box */}
      <h2 className="title"><i class="bi bi-question-diamond fs-2 px-3"></i>
Quick Game</h2>

      <div className="content-box justify-content-center align-items-center text-center">
      <p className="subtitle mt-2 mb-3" style={{ opacity: 0.65, maxWidth: "440px", margin: "auto" }}>
        {riddles[index].q}
      </p>
        {!showBonus && (
          <>
            <div
              style={{
                width: "80px",
                height: "2.6px",
                background: "#c5b3ff",
                margin: "12px auto 20px auto",
                borderRadius: "10px",
                opacity: 0.35,
              }}
            />
            <div className="d-flex justify-content-center gap-3 flex-wrap">
              {riddles[index].options.map((opt) => (
                <button
                  key={opt}
                  onClick={() => check(opt)}
                  className="btn btn-modern px-4 py-2"
                >
                  {opt.toUpperCase()}
                </button>
              ))}
            </div>

            {result && (
              <div className="result-glow mt-4" style={{ fontSize: "1.2rem", fontWeight: 600, opacity: 0.82 }}>
                {result}
              </div>
            )}

            <div className="mt-4 d-flex justify-content-center gap-2">
              <button onClick={prev} className="btn btn-soft px-3">← Prev</button>
              <button onClick={next} className="btn btn-soft px-3">Next →</button>
            </div>
          </>
        )}

        {showBonus && (
          <>
            <h3 className="title mt-3">🎉 Bonus Joke Time 🎉</h3>
            <div className="mt-3" style={{ maxWidth: "450px", margin: "auto", opacity: 0.8 }}>
              {bonusJokes.map((j, i) => (
                <p key={i} style={{ marginBottom: "12px", fontSize: "1rem" }}>
                  {i + 1}) {j}
                </p>
              ))}
            </div>

            <button onClick={() => setShowBonus(false)} className="btn btn-modern mt-3 px-4 py-2">
              Back to Riddles 🔁
            </button>
          </>
        )}
      </div>

      {/* 🌸 Petal layer */}
      <div id="petal-layer" className="petal-layer"></div>
      {/* 💥 Confetti layer */}
      <div className="confetti-container"></div>
    </section>
  );
}
