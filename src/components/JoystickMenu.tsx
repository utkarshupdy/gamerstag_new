"use client";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import menuItems from "../data/menuItems.json";

export default function JoystickMenu() {
  const totalSlices = menuItems.length;
  const sliceAngle = 360 / totalSlices;

  const [centerPosition, setCenterPosition] = useState({ x: 50, y: 50 });

  const menuRef = useRef<HTMLDivElement | null>(null);
  const hoverAudioRef = useRef<HTMLAudioElement | null>(null);

  const maxRadius = 30;
  const dragResistance = 20;

  useEffect(() => {
    // Initialize and preload audio
    hoverAudioRef.current = new Audio("/click.wav");
    hoverAudioRef.current.preload = "auto";
  }, []);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const menuRect = menuRef.current!.getBoundingClientRect();
    const startX = e.clientX;
    const startY = e.clientY;

    const centerX = (centerPosition.x / 100) * menuRect.width + menuRect.left;
    const centerY = (centerPosition.y / 100) * menuRect.height + menuRect.top;

    const handleMouseMove = (moveEvent: MouseEvent) => {
      const dx = (moveEvent.clientX - startX) / dragResistance;
      const dy = (moveEvent.clientY - startY) / dragResistance;

      const newX = centerX + dx - menuRect.left;
      const newY = centerY + dy - menuRect.top;

      let percentageX = (newX / menuRect.width) * 100;
      let percentageY = (newY / menuRect.height) * 100;

      const deltaX = percentageX - 50;
      const deltaY = percentageY - 50;
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

      if (distance > maxRadius) {
        const angle = Math.atan2(deltaY, deltaX);
        percentageX = 50 + maxRadius * Math.cos(angle);
        percentageY = 50 + maxRadius * Math.sin(angle);
      }

      setCenterPosition({ x: percentageX, y: percentageY });
    };

    const handleMouseUp = () => {
      setCenterPosition({ x: 50, y: 50 });

      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseEnter = () => {
    if (hoverAudioRef.current) {
      hoverAudioRef.current.currentTime = 0; // Reset audio to the start
      hoverAudioRef.current.play();
    }
  };

  return (
    <div
      ref={menuRef}
      className="relative mx-auto mt-16 h-96 w-96 cursor-crosshair overflow-hidden rounded-full"
      style={{
        background:
          "linear-gradient(to bottom right, rgba(0, 0, 0, 0.6), rgba(169, 169, 169, 0.4))",
      }}
    >
      <div
        className="absolute z-10 flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-gray-900/80 shadow-lg"
        style={{
          top: `${centerPosition.y}%`,
          left: `${centerPosition.x}%`,
          transform: "translate(-50%, -50%)",
        }}
        onMouseDown={handleMouseDown}
      >
        <div className="flex h-8 w-8 items-center justify-center rounded-sm">
          <Image
            height={150}
            width={150}
            src="/logo.svg"
            className="size-24"
            alt="logo"
          />
        </div>
      </div>

      <div className="relative h-full w-full">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="absolute h-full w-full"
            data-url={item.url}
            style={{
              clipPath: "polygon(50% 50%, 100% 0, 100% 100%)",
              transform: `rotate(${index * sliceAngle}deg)`,
            }}
            onMouseEnter={() => handleMouseEnter()}
          >
            <div
              className="flex h-full w-full items-center justify-center text-center text-white transition-all duration-300 hover:bg-white/50 hover:text-black"
              style={{
                transform: `rotate(-${index * sliceAngle}deg)`,
              }}
            >
              <div
                className="absolute text-center"
                style={{
                  top: item.top,
                  left: item.left,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <span className="z-99 text-sm font-semibold">
                  {item.content}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
