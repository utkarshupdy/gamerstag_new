"use client";
import React, { useEffect, useRef, useState } from "react";

interface CounterProps {
  target: number; // Target value can be an integer or decimal
}

const Counter: React.FC<CounterProps> = ({ target }) => {
  const [count, setCount] = useState<number>(0);
  const counterRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCount(); // Start counting animation when in view
            observer.unobserve(entry.target); // Stop observing after animation starts
          }
        });
      },
      { threshold: 0.5 }, // Trigger when 50% of the component is in view
    );

    const currentCounterRef = counterRef.current; // Copy the ref value to a variable inside the effect

    if (currentCounterRef) {
      observer.observe(currentCounterRef);
    }

    return () => {
      if (currentCounterRef) observer.unobserve(currentCounterRef); // Use the copied variable in the cleanup function
    };
  }, []);

  const animateCount = () => {
    const increment = target / 100; // Adjust for speed
    let currentCount = 0;

    const updateCount = () => {
      currentCount += increment;
      if (currentCount < target) {
        setCount(currentCount);
        requestAnimationFrame(updateCount);
      } else {
        setCount(target);
      }
    };

    updateCount();
  };

  // Determine the number of decimal places in the target dynamically
  const decimalPlaces =
    target % 1 !== 0 ? target.toString().split(".")[1].length : 0;

  return (
    <div ref={counterRef} className="counter">
      {count.toFixed(decimalPlaces)}
    </div>
  );
};

export default Counter;
