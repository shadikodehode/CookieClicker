import { useEffect } from "react";

export function useGameLoop(scorePerSecond, setScore) {
  useEffect(() => {
    const interval = setInterval(() => {
      setScore(prev => prev + scorePerSecond)
    }, 1000)
    return () => clearInterval(interval)
  }, [scorePerSecond, setScore])
}