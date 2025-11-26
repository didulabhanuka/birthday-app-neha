/* ─────────────────────────────────────
   CONFETTI UTILITY
───────────────────────────────────── */
window.throwConfetti = function () {
  const container = document.querySelector(".confetti-container");
  if (!container) return;
  for (let i = 0; i < 18; i++) {
    const piece = document.createElement("div");
    piece.className = "confetti";
    piece.style.left = Math.random() * 100 + "%";
    piece.style.animationDuration = 0.7 + Math.random() * 0.5 + "s";
    container.appendChild(piece);
    setTimeout(() => piece.remove(), 1500);
  }
};

/* ─────────────────────────────────────
   SPARKLE FLOATING DECORATION
───────────────────────────────────── */
window.createSparkles = function () {
  const book = document.querySelector(".book");
  if (!book) return;
  for(let i=0;i<9;i++) {
    const s = document.createElement("div");
    s.className = "sparkle";
    s.style.top = Math.random()*90 + "%";
    s.style.left = Math.random()*90 + "%";
    book.appendChild(s);
    setTimeout(()=>s.remove(), 4000);
  }
};

/* ─────────────────────────────────────
   MOBILE SWIPE PAGE FLIP SUPPORT
───────────────────────────────────── */
let touchStartX = 0;
const book = document.querySelector(".book");
if(book) {
  book.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
  });

  book.addEventListener("touchend", (e) => {
    const touchEndX = e.changedTouches[0].screenX;
    const pageWidth = window.innerWidth;
    if (touchEndX < touchStartX - 50) {
      book.scrollBy({ left: pageWidth, behavior: "smooth" });
    } else if (touchEndX > touchStartX + 50) {
      book.scrollBy({ left: -pageWidth, behavior: "smooth" });
    }
  });
}
