"use client";

import { useEffect, useState } from "react";

const GREETINGS = [
  "Halo",
  "Hello",
  "你好",
  "안녕하세요",
  "こんにちは",
];

const WORD_DURATION = 350; // ms per word (5 words * 350ms = 1750ms)
const EXIT_DURATION = 250; // ms for final splash exit fade (total = 2000ms = 2s)

export default function SplashScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  // Body scroll lock while splash screen is active
  useEffect(() => {
    if (isFinished) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isFinished]);

  // Sequential word transition timers
  useEffect(() => {
    if (isFinished || isExiting) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev < GREETINGS.length - 1) {
          return prev + 1;
        } else {
          clearInterval(interval);
          setIsExiting(true);
          return prev;
        }
      });
    }, WORD_DURATION);

    return () => clearInterval(interval);
  }, [isExiting, isFinished]);

  // Remove splash from DOM after exit animation completes
  useEffect(() => {
    if (!isExiting) return;

    const timeout = setTimeout(() => {
      setIsFinished(true);
      document.body.style.overflow = "";
    }, EXIT_DURATION);

    return () => clearTimeout(timeout);
  }, [isExiting]);

  if (isFinished) {
    return null;
  }

  const currentWord = GREETINGS[currentIndex];

  return (
    <div
      aria-label="Welcome Splash Screen"
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#07050e] overflow-hidden select-none transition-all duration-250 ease-out ${
        isExiting
          ? "opacity-0 scale-105 pointer-events-none blur-md"
          : "opacity-100 scale-100"
      }`}
    >
      {/* Ambient Radial Glowing Aura */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[420px] sm:w-[580px] h-[420px] sm:h-[580px] bg-gradient-to-tr from-purple-700/25 via-fuchsia-600/20 to-indigo-600/15 rounded-full blur-[130px] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(216,180,254,0.06)_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      {/* Pure Focal Greeting Word with Blur Fade In / Fade Out */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 max-w-2xl text-center">
        <div
          key={`word-${currentIndex}`}
          className="animate-splash-word min-h-[90px] sm:min-h-[130px] flex items-center justify-center"
        >
          <span className="text-6xl sm:text-8xl md:text-9xl font-black tracking-tight bg-gradient-to-b from-white via-neutral-100 to-purple-200 bg-clip-text text-transparent drop-shadow-[0_0_50px_rgba(168,85,247,0.45)]">
            {currentWord}
          </span>
        </div>
      </div>
    </div>
  );
}
