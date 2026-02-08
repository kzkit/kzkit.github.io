import React, { useEffect, useRef } from "react";

const CursorEffect = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    // Configuration
    const gridSize = 40; // Pixel size of grid cells
    const gridColor = "rgba(0, 0, 0, 0.05)";
    const highlightColor = "rgba(0, 0, 0, 0.1)";

    let mouseX = -100;
    let mouseY = -100;

    // Resize handler
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // Init

    // Mouse move handler
    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw Grid
      ctx.lineWidth = 1;

      const cols = Math.ceil(canvas.width / gridSize);
      const rows = Math.ceil(canvas.height / gridSize);

      // Determine hovered cell
      const hoveredCol = Math.floor(mouseX / gridSize);
      const hoveredRow = Math.floor(mouseY / gridSize);

      // Draw cells
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * gridSize;
          const y = j * gridSize;

          ctx.beginPath();
          ctx.rect(x, y, gridSize, gridSize);

          // Highlight row/col or specific cell
          if (i === hoveredCol && j === hoveredRow) {
            ctx.fillStyle = highlightColor;
            ctx.fill();
            ctx.strokeStyle = "#000000"; // Brighter border for active cell
          } else if (i === hoveredCol || j === hoveredRow) {
            // Optional: Highlight entire row/col slightly
            ctx.fillStyle = "rgba(0, 0, 0, 0.02)";
            ctx.fill();
            ctx.strokeStyle = gridColor;
          } else {
            ctx.strokeStyle = gridColor;
          }

          ctx.stroke();
        }
      }
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 0, // Behind content
        pointerEvents: "none", // Let clicks pass through
      }}
    />
  );
};

export default CursorEffect;
