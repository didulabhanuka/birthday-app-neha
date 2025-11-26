import React, { useRef, useState, useEffect } from "react";
import "../App.css";

export default function Page5Doodle() {
  const canvasRef = useRef(null);
  const [drawing, setDrawing] = useState(false);
  const [brush, setBrush] = useState(6);
  const [coords, setCoords] = useState([]);

  useEffect(() => {
    spawnHighlights(); // subtle birthday highlights animation on load
  }, []);

  const draw = (e) => {
    if (!drawing || !canvasRef.current) return;
    const ctx = canvasRef.current.getContext("2d");
    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;
    ctx.fillStyle = "#5c3e94";
    ctx.beginPath();
    ctx.arc(x, y, brush, 0, Math.PI * 2);
    ctx.fill();

    setCoords((c) => [...c, { x, y, r: brush }]);
  };

  const clearCanvas = () => {
    if (!canvasRef.current) return;
    const ctx = canvasRef.current.getContext("2d");
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    setCoords([]);
  };

  const saveCanvas = () => {
    if (!coords.length) return;
    const data = canvasRef.current.toDataURL();
    const link = document.createElement("a");
    link.download = `esaliya-doodle-${Date.now()}.png`;
    link.href = data;
    link.click();
  };

  const spawnHighlights = () => {
    const layer = document.querySelector(".highlight-layer");
    if (!layer) return;
    for (let i = 0; i < 5; i++) {
      const h = document.createElement("div");
      h.className = "highlight-dot";
      h.style.left = Math.random() * 100 + "vw";
      h.style.top = Math.random() * 90 + "vh";
      layer.appendChild(h);
      setTimeout(() => h.remove(), 4500);
    }
  };

  return (
    <section className="page wish-full d-flex flex-column justify-content-center align-items-center text-center"
      style={{ width:"100vw", height:"100vh" }}>
        <h2 className="title"><i class="bi bi-palette fs-2 px-3"></i>
Creative Canvas</h2>
      <div className="content-box">
        <p className="subtitle">Draw something for her</p>

        <canvas
          ref={canvasRef}
          width={500}
          height={280}
          className="canvas-board mt-4"
          onMouseDown={() => setDrawing(true)}
          onMouseUp={() => setDrawing(false)}
          onMouseMove={draw}
        ></canvas>

        <div className="d-flex justify-content-center gap-3 flex-wrap mt-4">
          <select
            className="form-select w-auto rounded-3"
            value={brush}
            onChange={(e) => setBrush(Number(e.target.value))}
          >
            <option value="3">Thin</option>
            <option value="6">Soft</option>
            <option value="12">Bold</option>
          </select>

          <button onClick={clearCanvas} className="btn btn-modern">Clear</button>
          <button onClick={saveCanvas} className="btn btn-modern">Save Art</button>
        </div>
      </div>

      {/* Simple glowing birthday overlay */}
      <div className="highlight-layer"></div>
    </section>
  );
}
