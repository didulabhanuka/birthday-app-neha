/* ───────── Book Wrapper ───────── */
.book-wrapper {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f8f6ff;
}

/* ───────── Book Scroll ───────── */
.book {
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 95vh;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
  background: white;
}

.book::-webkit-scrollbar {
  display: none;
}

/* ───────── Individual Pages ─────── */
.page {
  width: 100vw;
  height: 100%;
  flex-shrink: 0;
  scroll-snap-align: start;
  justify-content: center;
  align-items: center;
  padding: 40px;
}

/* ───────── Content Box ───────── */
.content-box {
  padding: 32px 22px;
  background: rgba(255,255,255,0.6);
  border-radius: 16px;
  box-shadow: 0 4px 22px rgba(92,62,148,0.07);
  animation: floatIn 0.8s ease-out forwards;
  text-align: center;
}

@keyframes floatIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Mobile Swipe */
body {
  touch-action: pan-x;
}


/* ───────────────────────── Intro Page Full ───────────────────────── */
.intro-full {
  position: relative;
  background: linear-gradient(150deg, #fdfaff 0%, #f3eeff 45%, #ede7ff 100%);
  overflow: hidden;
  width:100vw;
  height:100vh;
}

/* Semi transparent overlay glow */
.intro-overlay {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at center, rgba(92,62,148,0.07), transparent 70%);
  pointer-events: none;
}

/* Name Style */
.intro-name {
  font-family: "Dancing Script", cursive;
  font-size: 4rem;
  font-weight: 700;
  color: #5c3e94;
  letter-spacing: 2px;
  animation: nameFloat 2.5s ease-in-out infinite alternate;
}

/* Subtext */
.intro-subtitle {
  font-size: 1.3rem;
  font-weight:600;
  letter-spacing: 3px;
  opacity: 0.65;
  text-transform:uppercase;
  animation: fadeSlide 1.2s ease forwards;
  margin-top: 14px;
}

/* Hint text */
.tap-hint {
  font-size: 0.9rem;
  letter-spacing: 1.5px;
  opacity: 0.52;
  margin-top: 20px;
  animation: fadeIn 1.6s ease forwards;
}

/* Floating Name Animation */
@keyframes nameFloat {
  0% { transform: translateY(4px); opacity: 0.7; }
  100% { transform: translateY(-10px); opacity: 1; }
}

/* Subtle birthday sparkles background */
.sparkle {
  position: absolute;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: rgba(92, 62, 148, 0.3);
  filter: blur(1.2px);
  animation: sparkleMove 2s infinite ease alternate;
}

.spark1 { top: 22%; left: 14%; animation-duration: 1.8s; }
.spark2 { top: 68%; left: 78%; animation-duration: 2.2s; animation-direction: alternate-reverse; }
.spark3 { top: 51%; left: 45%; animation-duration: 2s; }
.spark4 { top: 10%; left: 30%; animation-duration: 2.5s; animation-direction: alternate-reverse; }
.spark5 { top: 60%; left: 25%; animation-duration: 2.3s; }
.spark6 { top: 80%; left: 90%; animation-duration: 1.7s; }
.spark7 { top: 40%; left: 60%; animation-duration: 2.1s; }
.spark8 { top: 30%; left: 90%; animation-duration: 2.4s; animation-direction: alternate-reverse; }
.spark9 { top: 70%; left: 20%; animation-duration: 1.9s; }
.spark10 { top: 50%; left: 70%; animation-duration: 2.6s; animation-direction: alternate-reverse; }
.spark11 { top: 15%; left: 50%; animation-duration: 2.8s; }

/* sparkle motion */
@keyframes sparkleMove {
  0% { transform: translateY(0px) scale(1); opacity: 0.4; }
  100% { transform: translateY(-18px) scale(1.7); opacity: 1; }
}

/* ───────────────────────────────
   PAGE 2 STYLES (No borders, elegant)
─────────────────────────────── */
.wish-full {
  position: relative;
  background: linear-gradient(150deg, #fdfaff 0%, #f3eeff 45%, #ede7ff 100%);
  overflow: hidden;
  width:100vw;
  height:100vh;
}

.wish-title {
  font-family: "Dancing Script", cursive;
  font-size: 3.8rem;
  font-weight: 700;
  color: #5c3e94;
  letter-spacing: 2px;
  animation: softFloat 2.2s ease-in-out infinite alternate;
}

.wish-text-line {
  font-size: 1.15rem;
  opacity: 0.7;
  letter-spacing: 0.5px;
  font-weight: 500;
  margin-top: 10px;
}

.wish-bg-animation {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 50% 50%, rgba(197,179,255,0.15), transparent 65%);
  animation: bgPulse 2.8s infinite alternate ease-in-out;
  z-index: 1;
  pointer-events: none;
}

@keyframes softFloat {
  0% { transform: translateY(8px); opacity: 0.6; }
  100% { transform: translateY(-10px); opacity: 1; }
}

@keyframes bgPulse {
  0% { opacity: 0.3; transform: scale(1); }
  100% { opacity: 1; transform: scale(1.15); }
}

/* ─────────────────────────
   Page 3 - Vertical Wishes Wall
───────────────────────── */
.vertical-wall {
  width: 88%;
  max-width: 640px;
  height: 48vh;
  overflow-y: auto;
  animation: fadeIn 1s ease forwards;
}

.vertical-wall::-webkit-scrollbar {
  width: 4px;
}
.vertical-wall::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: rgba(92,62,148,0.18);
}

.wish-line-card {
  background: white;
  padding: 14px 18px;
  margin-bottom: 14px;
  border-radius: 14px;
  font-weight: 600;
  font-size: 1rem;
  letter-spacing: 0.3px;
  opacity: 0.87;
  box-shadow: 0 2px 10px rgba(92,62,148,0.05);
  transition: 0.25s ease;
}

.wish-line-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 14px rgba(92,62,148,0.1);
  opacity: 1;
}

/* ─────────────────────────
   PAGE 3 — GROUP CHAT STYLE
───────────────────────── */
/* ✅ NEW HEADER SECTION STYLE */
/* ✅ keeps title/subtitle above chat */
.chat-top {
  text-align: center;
  margin-bottom: 18px;
}

.title {
  font-size: 2rem;
  font-weight: 800;
  color: #5c3e94;
  font-family: "Dancing Script", cursive;
}

.subtitle {
  font-size: 0.95rem;
  font-weight: 600;
  opacity: 0.8;
  color: #5c3e94;
}

/* ✅ Optional header animation */
@keyframes fadeInDown {
  from { opacity: 0; transform: translateY(-14px); }
  to { opacity: 1; transform: translateY(0); }
}

.chat-box {margin-left: 20px;
  text-align: left;
}

/* The chat area */
.chat-wall {
  margin-top: 20px;
  width: 100%;
  max-width: 620px;
  height: 50vh;
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow-y: auto;
  padding-right: 6px;
}

/* hide scrollbar track-ish */
.chat-wall::-webkit-scrollbar {
  width: 4px;
}
.chat-wall::-webkit-scrollbar-thumb {
  background: rgba(92,62,148,0.25);
  border-radius: 10px;
}

/* base bubble */
.chat-bubble {
  max-width: 78%;
  padding: 10px 14px;
  border-radius: 16px;
  box-shadow: 0 2px 10px rgba(92,62,148,0.08);
  position: relative;
  animation: bubbleIn 0.45s ease-out forwards;
}

/* left/right alignment */
.chat-bubble.left {
  align-self: flex-start;
  background: #ffffff;
}

.chat-bubble.right {
  align-self: flex-end;
  background: #e9e3ff;
}

/* small name in corner */
.chat-sender {
  display: block;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  opacity: 0.6;
  margin-bottom: 2px;
}

.chat-text {
  font-size: 0.95rem;
  line-height: 1.35;
}

/* little entrance animation */
@keyframes bubbleIn {
  from {
    opacity: 0;
    transform: translateY(12px) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* ─────────────────────────
   Page 4 - Minimal BD Animations
───────────────────────── */
#petal-layer {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
  z-index: 5;
}

.petal {
  position: absolute;
  top: -30px;
  width: 4px;
  height: 18px;
  background: rgba(197,179,255,0.45);
  border-radius: 10px;
  animation: petalFall linear forwards;
}

@keyframes petalFall {
  0% { transform: translateY(0) rotate(0); opacity: 0.7; }
  100% { transform: translateY(120vh) rotate(260deg); opacity: 0; }
}

/* Result box glow animation */
.result-glow {
  color: #5c3e94;
  animation: glowText 1.6s infinite alternate ease-in-out;
}

@keyframes glowText {
  0% { text-shadow: 0 0 4px rgba(92,62,148,0.08); }
  100% { text-shadow: 0 0 12px rgba(92,62,148,0.25); }
}

/* ─────────────────────────
   Page 5 - Canvas Fancy BD Vibes
───────────────────────── */
.highlight-layer {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
  z-index: 3;
}

.highlight-dot {
  position: absolute;
  width: 14px;
  height: 4px;
  background: rgba(197,179,255,0.5);
  border-radius: 10px;
  animation: highlightFloat 2s infinite alternate ease-in-out;
  opacity: 0.45;
}

@keyframes highlightFloat {
  0% { transform: translateY(0px) scale(1); }
  100% { transform: translateY(-24px) scale(1.9); opacity: 0; }
}

/* Canvas board made elegant + borderless */
.canvas-board {
  width: 100%;
  height: 280px;
  background: #ffffff;
  border-radius: 18px;
  box-shadow: 0 4px 24px rgba(92, 62, 148, 0.1);
  border: none;
  margin-top: 20px;
}

/* Canvas interaction */
canvas {
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 18px;
}
