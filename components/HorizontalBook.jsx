import React, { useEffect, useRef } from "react";
import "../App.css";

export default function HorizontalBook({ children }) {
  const bookRef = useRef(null);

  // Arrow key flip support
  useEffect(() => {
    const flip = (e) => {
      const el = bookRef.current;
      if (!el) return;
      const w = window.innerWidth;
      if (e.key === "ArrowRight") el.scrollBy({ left: w, behavior: "smooth" });
      if (e.key === "ArrowLeft") el.scrollBy({ left: -w, behavior: "smooth" });
    };

    window.addEventListener("keydown", flip);
    return () => window.removeEventListener("keydown", flip);
  }, []);

  return (
    <div className="book-wrapper">
      <div className="book" ref={bookRef}>
        {children}
      </div>
    </div>
  );
}
