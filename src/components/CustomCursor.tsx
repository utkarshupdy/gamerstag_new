"use client";

import React, { useState } from "react";

export default function CustomCursor({
  children,
}: {
  children: React.ReactNode;
}) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Scrollable Content */}
      <div
        className="relative z-0 h-full overflow-auto"
        onMouseMove={handleMouseMove}
      >
        {children}
      </div>

      {/* Cursor Effect Layer */}
      <div className="pointer-events-none fixed inset-0 z-50">
        {/* Vertical Line */}
        <div
          className="absolute h-screen w-px bg-white/10"
          style={{ left: `${position.x}px` }}
        />

        {/* Horizontal Line */}
        <div
          className="absolute h-px w-screen bg-white/10"
          style={{ top: `${position.y}px` }}
        />

        {/* Cursor Follower */}
        <div
          className="absolute size-1.5 bg-[#808080]"
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
            transform: "translate(-50%, -50%)",
          }}
        />
      </div>
    </div>
  );
}
