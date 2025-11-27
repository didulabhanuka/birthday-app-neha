import React, { useRef, useState, useEffect } from "react";
import "../App.css";

export default function Page5Doodle() {
  const canvasRef = useRef(null);
  const [drawing, setDrawing] = useState(false);
  const [brush, setBrush] = useState(6);
  const [coords, setCoords] = useState([]);

  // Setup canvas and resize for mobile
  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * 2; // HiDPI scaling
      canvas.height = rect.height * 2;
      ctx.scale(2, 2);

      ctx.fillStyle = "#5c3e94";
      ctx.strokeStyle = "#5c3e94";
      ctx.lineWidth = brush;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, [brush]);

  const getCanvasPos = (touch) => {
    const rect = canvasRef.current.getBoundingClientRect();
    const scaleX = canvasRef.current.width / rect.width / 2;
    const scaleY = canvasRef.current.height / rect.height / 2;
    return {
      x: (touch.clientX - rect.left) * scaleX,
      y: (touch.clientY - rect.top) * scaleY,
    };
  };

  const drawPoint = (x, y, r) => {
    const ctx = canvasRef.current.getContext("2d");
    ctx.fillStyle = "#5c3e94";
    ctx.strokeStyle = "#5c3e94";
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  };

  const handleTouchStart = (e) => {
    e.preventDefault();
    setDrawing(true);
  };

  const handleTouchMove = (e) => {
    e.preventDefault();
    if (!drawing || !canvasRef.current) return;

    const touch = e.touches[0];
    const pos = getCanvasPos(touch);
    drawPoint(pos.x, pos.y, brush);
    setCoords((prev) => [...prev, { x: pos.x, y: pos.y, r: brush }]);
  };

  const handleTouchEnd = (e) => {
    e.preventDefault();
    setDrawing(false);
  };

  // Mouse support for desktop
  const handleMouseDown = () => setDrawing(true);
  const handleMouseUp = () => setDrawing(false);
  const handleMouseMove = (e) => {
    if (!drawing || !canvasRef.current) return;
    const rect = canvasRef.current.getBoundingClientRect();
    const x = (e.nativeEvent.offsetX || e.clientX - rect.left);
    const y = (e.nativeEvent.offsetY || e.clientY - rect.top);
    drawPoint(x, y, brush);
    setCoords((prev) => [...prev, { x, y, r: brush }]);
  };

  const clearCanvas = () => {
    if (!canvasRef.current) return;
    const ctx = canvasRef.current.getContext("2d");
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    setCoords([]);
  };

  const saveCanvas = () => {
    if (!coords.length || !canvasRef.current) return;
    const data = canvasRef.current.toDataURL();
    const link = document.createElement("a");
    link.download = `esaliya-doodle-${Date.now()}.png`;
    link.href = data;
    link.click();
  };

  return (
    <section
      className="page wish-full d-flex flex-column justify-content-center align-items-center text-center"
      style={{ width: "100vw", height: "100dvh", minHeight: "100vh", padding: "1rem" }}
    >
      <div className="chat-top" style={{ marginBottom: "1rem" }}>
        <h2 className="title" style={{ fontSize: "clamp(1.5rem, 5vw, 2rem)" }}>
          <i className="bi bi-palette fs-2 px-3"></i>
          Creative Canvas
        </h2>
        <p className="subtitle" style={{ fontSize: "clamp(0.8rem, 3vw, 1rem)" }}>Draw / write something for her</p>
      </div>

      <div className="content-box" style={{ width: "90%", maxWidth: "500px" }}>
        <canvas
          ref={canvasRef}
          className="canvas-board mt-4"
          style={{ width: "100%", height: "250px", borderRadius: "12px", touchAction: "none" }}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onTouchMove={handleTouchMove}
        ></canvas>

        <div className="d-flex justify-content-center gap-2 flex-wrap mt-3">
          <select
            className="form-select w-auto rounded-3"
            value={brush}
            onChange={(e) => setBrush(Number(e.target.value))}
            style={{ fontSize: "clamp(0.75rem, 3vw, 0.9rem)" }}
          >
            <option value="3">Thin</option>
            <option value="6">Soft</option>
            <option value="12">Bold</option>
          </select>

          <button onClick={clearCanvas} className="btn btn-modern" style={{ fontSize: "clamp(0.75rem, 3vw, 0.9rem)" }}>Clear</button>
          <button onClick={saveCanvas} className="btn btn-modern" style={{ fontSize: "clamp(0.75rem, 3vw, 0.9rem)" }}>Save Art</button>
        </div>
      </div>

      <div className="highlight-layer"></div>
    </section>
  );
}
