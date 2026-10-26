"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "라이트 모드로 전환" : "다크 모드로 전환"}
      className="fixed right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/70 bg-white/50 text-base shadow-[0_4px_16px_-8px_rgba(120,70,40,0.3)] backdrop-blur-xl transition duration-200 hover:bg-white/70 dark:border-white/10 dark:bg-white/[0.06] dark:hover:bg-white/10"
    >
      {isDark ? "☀️" : "🌙"}
    </button>
  );
}
