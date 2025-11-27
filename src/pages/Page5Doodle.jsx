import React, { useRef, useState, useEffect } from "react";
import "../App.css";

export default function Page5Doodle() {
  const canvasRef = useRef(null);
  const [drawing, setDrawing] = useState(false);
  const [brush, setBrush] = useState(6);
  const [coords, setCoords] = useState([]);

  // Setup canvas for drawing
  // Setup canvas for drawing
  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Force correct theme color (NOT black)
    ctx.fillStyle = "#5c3e94";
    ctx.strokeStyle = "#5c3e94";
    ctx.lineWidth = brush;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    // Remove black overrides if any exist
    document.body.style.overflow = "hidden";
  }, [brush]);

  // Convert touch coordinate to canvas position
  const getCanvasPos = (touch) => {
    const rect = canvasRef.current.getBoundingClientRect();
    const scaleX = canvasRef.current.width / rect.width;
    const scaleY = canvasRef.current.height / rect.height;

    return {
      x: (touch.clientX - rect.left) * scaleX,
      y: (touch.clientY - rect.top) * scaleY,
    };
  };

  // Draw circle point
  const drawPoint = (x, y, r) => {
    const ctx = canvasRef.current.getContext("2d");

    // Force purple every point
    ctx.fillStyle = "#5c3e94";
    ctx.strokeStyle = "#5c3e94";

    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  };


  // Touch start drawing
  const handleTouchStart = (e) => {
    e.preventDefault();
    setDrawing(true);
  };

  // Touch move drawing
  const handleTouchMove = (e) => {
    e.preventDefault();
    if (!drawing || !canvasRef.current) return;

    const touch = e.touches[0];
    const pos = getCanvasPos(touch);
    const x = pos.x;
    const y = pos.y;

    drawPoint(x, y, brush);

    setCoords((prev) => [...prev, { x, y, r: brush }]);
  };

  // Touch end drawing
  const handleTouchEnd = (e) => {
    e.preventDefault();
    setDrawing(false);
  };

  // Also keep mouse support for laptops/web
  const handleMouseDown = () => setDrawing(true);
  const handleMouseUp = () => setDrawing(false);
  const handleMouseMove = (e) => {
    if (!drawing || !canvasRef.current) return;
    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;

    const ctx = canvasRef.current.getContext("2d");
    ctx.fillStyle = "#5c3e94";
    ctx.strokeStyle = "#5c3e94";
    ctx.beginPath();
    ctx.arc(x, y, brush, 0, Math.PI * 2);
    ctx.fill();

    setCoords((prev) => [...prev, { x, y, r: brush }]);
  };


  // Clear canvas
  const clearCanvas = () => {
    if (!canvasRef.current) return;
    const ctx = canvasRef.current.getContext("2d");
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    setCoords([]);
  };

  // Save art
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
      style={{ width: "100vw", height: "100dvh" }}
    >
      <div className="chat-top">
        <h2 className="title">
          <i className="bi bi-palette fs-2 px-3"></i>
          Creative Canvas
        </h2>
        <p className="subtitle">Draw / write something for her</p>
      </div>

      <div className="content-box">
        <canvas
          ref={canvasRef}
          width={500}
          height={280}
          className="canvas-board mt-4"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onTouchMove={handleTouchMove}
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

      {/* Floating highlight animation layer */}
      <div className="highlight-layer"></div>
    </section>
  );
}
