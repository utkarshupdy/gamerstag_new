"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="-mt-20 flex h-screen flex-col items-center justify-center space-y-3 px-2 text-white">
      <h2 className="text-xl font-bold">
        <span className="block text-center text-7xl font-extrabold">404</span>
        Whoa! You’ve traveled too far…
      </h2>
      <p className="text-center text-[0.92rem]">
        The page you are looking for may have been removed, moved or is
        temporarily unavailable.
      </p>
      <Link
        href="/"
        className="flex items-center space-x-2 rounded-md bg-white px-3 py-1 text-black hover:bg-white/75"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
          />
        </svg>
        <span> Go To Homepage </span>
      </Link>
    </div>
  );
}
