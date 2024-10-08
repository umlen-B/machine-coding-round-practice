import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="w-full pt-4 pl-4 flex justify-between">
      <Link href="/" className="block w-max" aria-label="Home">
        <svg
          className="h-8 w-8 text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      </Link>
      <div className="flex justify-items-end pr-8">
        <Link href="/dsa" className="block w-max pl-8">
          {" "}
          DSA{" "}
        </Link>
        <Link href="/leetcode" className="block w-max pl-8">
          {" "}
          Leetcode{" "}
        </Link>
        <Link href="/polyfills" className="block w-max pl-8">
          {" "}
          Polyfills{" "}
        </Link>
      </div>
    </div>
  );
};

export default Header;
