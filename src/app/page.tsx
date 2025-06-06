'use client'
import { useState, useEffect } from "react";
import Home from "./home/page"; // Import the Home component
import LoadingPage from "@/components/ui/LoadingSkeleton";

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading behavior
    const timer = setTimeout(() => {
      setIsLoading(false); // Set loading to false after 8 seconds
    }, 8000);

    return () => clearTimeout(timer); // Cleanup timeout
  }, []);

  return isLoading ? <LoadingPage /> : <Home />;
}
