'use client';
import React, { useState, useEffect } from 'react';

interface ButtonProps {
  color: 'main' | 'white';
  text: string;
}

const Button: React.FC<ButtonProps> = ({ color, text }) => {
  const [clickSound, setClickSound] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    const sound = new Audio('/click.wav');
    sound.preload = 'auto';
    sound.onerror = (e) => {
      console.error('Error loading sound:', e);
    };
    setClickSound(sound);

    return () => {
      sound.pause();
      setClickSound(null);
    };
  }, []);

  const handleClick = () => {
    if (clickSound) {
      clickSound.currentTime = 0; // Reset sound to the beginning
      clickSound.play().catch((err) => {
        console.error('Error playing sound:', err);
      });
    }
  };

  const bgClass = color === 'main' ? 'bg-main text-white' : 'bg-white text-black';
  const hoverClass =
    color === 'main'
      ? 'group-hover:bg-white group-hover:text-black'
      : 'group-hover:bg-main group-hover:text-white';

  return (
    <button
      className={`relative group p-2 px-8 font-bold text-white uppercase bg-transparent transition-all duration-300 border border-white hover:border-main`}
      onClick={handleClick}
      aria-label={text}
    >
      <div
        className={`absolute inset-0 border m-1 transform scale-2 ${bgClass} border-white group-hover:border-main ${hoverClass}`}
      ></div>
      <span className={`relative z-10 p-4 ${color === 'main' ? 'group-hover:text-main' : 'text-black group-hover:text-white'}`}>
        {text}
      </span>
    </button>
  );
};

export default Button;
