import React, { useEffect, useState } from "react";

export default function Page1Intro() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 400);
    window.throwConfetti?.(); // greet with small confetti if script.js exists later
  }, []);

  return (
    <section
      className="page intro-full d-flex flex-column justify-content-center align-items-center text-center"
      style={{ width:"100vw", height:"100vh" }}
    >
      <div className="intro-overlay"></div>

      <h1 className="intro-name">Nehas</h1>
      <p className="intro-subtitle">Birthday Book</p>

      {show && (
        <p className="tap-hint">Scroll horizontally to open the book</p>
      )}

      <div className="sparkle spark1"></div>
      <div className="sparkle spark2"></div>
      <div className="sparkle spark3"></div>
    </section>
  );
}
