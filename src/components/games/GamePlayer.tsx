"use client";

import { useState, useEffect, useRef } from "react";
import { Game } from "@/lib/types";

interface GamePlayerProps {
  game: Game;
}

const GamePlayer = ({ game }: GamePlayerProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(true);
  const [key, setKey] = useState(Date.now()); // Add a key state for forcing iframe reload
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Reset iframe on game change or page refresh
    setKey(Date.now());
    setIsLoading(true);

    const logGamePlay = () => {
      console.log(`Game started: ${game.title}`);
    };

    logGamePlay();

    // Handle fullscreen changes
    const handleFullscreenChange = () => {
      const isFullscreenNow = !!document.fullscreenElement;
      setIsFullscreen(isFullscreenNow);
      setIsButtonVisible(!isFullscreenNow);
    };

    // Handle visibility change (tab switch/refresh)
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        setKey(Date.now()); // Force iframe reload when tab becomes visible
        setIsLoading(true);
      }
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [game]);

  const toggleFullscreen = async () => {
    if (!containerRef.current) return;

    try {
      if (!document.fullscreenElement) {
        await containerRef.current.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch (err) {
      console.error("Error toggling fullscreen:", err);
    }
  };

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  return (
    <div ref={containerRef} className="relative w-full h-screen">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
            <p className="mt-2 text-gray-700">Loading game...</p>
          </div>
        </div>
      )}

      <iframe
        key={key} // Add key to force reload
        src={game.gameUrl}
        className="w-full h-full border-0"
        allow="fullscreen; autoplay; clipboard-write"
        allowFullScreen
        onLoad={handleIframeLoad}
        title={`Play ${game.title}`}
        sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
      />

      {isButtonVisible && (
        <button
          onClick={toggleFullscreen}
          className={`absolute top-4 right-4 bg-indigo-600 hover:bg-indigo-700 text-white p-2 rounded-full shadow-lg transition-all ${
            isFullscreen ? "opacity-70" : "opacity-70 hover:opacity-100"
          }`}
          aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
          title={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
        >
          {isFullscreen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5"
              />
            </svg>
          )}
        </button>
      )}
    </div>
  );
};

export default GamePlayer;
