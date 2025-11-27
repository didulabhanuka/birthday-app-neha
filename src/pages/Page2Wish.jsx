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
        className="page wish-full d-flex flex-column justify-content-center align-items-center text-center"
        style={{ width: "100vw", height: "100dvh", minHeight: "100vh", position: "relative" }}
      >
        {/* Glow overlay */}
        <div className="wish-bg-animation"></div>

        {/* Title */}
        <h1
          className="wish-title"
          style={{
            fontSize: "clamp(1.8rem, 6vw, 3.6rem)",
            animationDuration: "2.2s"
          }}
        >
          Happy Birthday, Neha!
        </h1>

        {/* Subtitle */}
        <p className="wish-text-line" style={{ fontSize: "clamp(0.75rem, 3vw, 1rem)", marginTop: "0.5rem" }}>
          You are the moment
        </p>

        {/* Lottie 1 under text */}
        <div
          style={{ width: "40vw", maxWidth: 200, marginTop: "1.5rem", cursor: "pointer" }}
          onClick={() => setPlayFull(true)}
        >
          <Lottie animationData={animation1} loop={true} style={{ width: "100%", height: "auto" }} />
        </div>

        {/* Tap hint */}
        {show && (
          <p className="tap-hint" style={{ fontSize: "clamp(0.7rem, 3vw, 0.9rem)", marginTop: "1rem" }}>
            Tap the cake to celebrate
          </p>
        )}

        {/* Sparkles */}
        {[...Array(11)].map((_, i) => (
          <div key={i} className={`sparkle spark${i + 1}`}></div>
        ))}
      </section>

      {/* Fullscreen Lottie 2 */}
      {playFull && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100dvh",
            minHeight: "100vh",
            zIndex: 9999,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            animation: "fadePop 0.5s ease-out",
            background: "rgba(255, 255, 255, 0.2)",
          }}
        >
          <Lottie
            animationData={animation2}
            loop={false}
            onComplete={() => setPlayFull(false)}
            style={{
              width: "100%",
              height: "100%",
              maxWidth: "100vw",
              maxHeight: "100dvh",
              transform: "scale(2.5)",
              opacity: 0.6,
            }}
          />
        </div>
      )}
    </>
  );
}
