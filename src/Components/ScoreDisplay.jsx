import { useState, useEffect } from "react";

export default function ScoreDisplay ({score, scorePerSecond}) {

  const [scoreFx, setScoreFX] = useState(false)

  useEffect(() => {
    if (score === 0) return
    const start = setTimeout(() => setScoreFX(true), 0)
    const end = setTimeout(() => setScoreFX(false), 80)
    return () => {
      clearTimeout(start)
      clearTimeout(end)
    }
  }, [score])

  return (
    <div>
      <p className={`text-4xl font-bold ${scoreFx ? 'scale-115' : 'scale-100'} transition-transform`}>
        {score} pts
      </p>
      <p>{scorePerSecond} pts/sec</p>
    </div>
  )}