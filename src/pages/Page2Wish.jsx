import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import animation1 from "../assets/lottie1.json"; // Change path if needed
import animation2 from "../assets/lottie2.json"; // Fullscreen animation

export default function Page2Wish() {
  const [show, setShow] = useState(false);
  const [playFull, setPlayFull] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 400);
  }, []);

  return (
    <>
      <section
        className="page intro-full d-flex flex-column justify-content-center align-items-center text-center"
        style={{ width: "100vw", height: "100vh", position: "relative" }}
      >
        <div className="intro-overlay"></div>

        <h1
          className="intro-name"
          style={{
            fontSize: "3.6rem",
            animationDuration: "2.2s"
          }}
        >
          Happy Birthday, Neha!
        </h1>

        <p className="intro-subtitle">You are the moment</p>

        {/* 🎀 Lottie 1 under text */}
        <div
          style={{ width: 200, marginTop: "1.5rem", cursor: "pointer" }}
          onClick={() => setPlayFull(true)}
        >
          <Lottie animationData={animation1} loop={true} />
        </div>

        {show && <p className="tap-hint">Tap the cake to celebrate</p>}

        {/* Sparkles */}
        {[...Array(11)].map((_, i) => (
          <div key={i} className={`sparkle spark${i + 1}`}></div>
        ))}
      </section>

      {/* 🎉 Fullscreen Lottie 2 */}
{playFull && (
<div
  style={{
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    zIndex: 9999,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    animation: "fadePop 0.5s ease-out",
    background: "rgba(255, 255, 255, 0.2)", // <-- transparent haze
  }}
>
  <Lottie
    animationData={animation2}
    loop={false}
    onComplete={() => setPlayFull(false)}
    style={{
      width: "100vw",
      height: "100vh",
      transform: "scale(2.5)",
      opacity: 0.6,         // soften lottie itself
    }}
  />
</div>

)}

    </>
  );
}
