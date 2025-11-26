import React, { useEffect, useState } from "react";

export default function Page2Wish() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 400);
  }, []);

  return (
    <section
      className="page intro-full d-flex flex-column justify-content-center align-items-center text-center"
      style={{ width:"100vw", height:"100vh" }}
    >
      <div className="intro-overlay"></div>

      <h1
        className="intro-name"
        style={{
          fontSize: "3.6rem",      /* Slight size difference for variation but same aesthetic */
          animationDuration: "2.2s"
        }}
      >
        Happy Birthday, Neha!
      </h1>

      <p className="intro-subtitle">You are the moment</p>

      {show && (
        <p className="tap-hint">Flip through the pages</p>
      )}


<div className="sparkle spark1"></div>
<div className="sparkle spark2"></div>
<div className="sparkle spark3"></div>
<div className="sparkle spark4"></div>
<div className="sparkle spark5"></div>
<div className="sparkle spark6"></div>
<div className="sparkle spark7"></div>
<div className="sparkle spark8"></div>
<div className="sparkle spark9"></div>
<div className="sparkle spark10"></div>
<div className="sparkle spark11"></div>

    </section>
  );
}
