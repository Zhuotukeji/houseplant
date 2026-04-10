"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function SearchBox({
  size = "large",
}: {
  size?: "large" | "small";
}) {
  const [query, setQuery] = useState("");
  const router = useRouter();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const trimmed = query.trim();
    if (trimmed) {
      router.push(`/search?q=${encodeURIComponent(trimmed)}`);
    }
  }

  const isLarge = size === "large";

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-xl mx-auto">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a plant, problem, or care topic..."
          className={`w-full border border-border rounded-full bg-white text-text placeholder:text-text-secondary/60 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${
            isLarge ? "px-6 py-4 text-lg pr-14" : "px-4 py-2.5 text-sm pr-12"
          }`}
        />
        <button
          type="submit"
          className={`absolute right-1.5 top-1/2 -translate-y-1/2 bg-primary text-white rounded-full hover:bg-primary-light transition-colors ${
            isLarge ? "p-3" : "p-2"
          }`}
          aria-label="Search"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={isLarge ? 20 : 16}
            height={isLarge ? 20 : 16}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </button>
      </div>
    </form>
  );
}
