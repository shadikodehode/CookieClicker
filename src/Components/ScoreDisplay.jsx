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
    <div className="mt-8 text-pink-800">
        <p className={`text-6xl font-bold ${scoreFx ? 'scale-115' : 'scale-100'} transition-transform`}>
          {score}
        </p>
        <p className="text-2xl font-bold">Spiders</p>
      <div className="text-xs text-pink-900">{scorePerSecond} sp/sec</div>
    </div>
  )}