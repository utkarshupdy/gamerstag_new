// ProgressBar.tsx
import React from 'react';

interface ProgressBarProps {
  percentage: number; // percentage should be a number between 0 and 100
}

const ProgressBar: React.FC<ProgressBarProps> = ({ percentage }) => {
  return (
    <div className="w-full bg-neutral-800 h-2 overflow-hidden">
      <div
        className="bg-blue-500 h-full transition-all duration-300"
        style={{ width: `${Math.min(Math.max(percentage, 0), 100)}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
