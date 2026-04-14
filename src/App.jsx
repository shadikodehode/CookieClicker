import { useState, useEffect } from "react";

export default function App () {
  const [score, setScore] = useState(0)
  const [scorePerSecond, setScorePerSecond] = useState(0)
  const upgrades= [
    { id: 1, name: "spider-sense", cost: 5, sps: 2},
    { id: 2, name: "venom-blast", cost: 10, sps: 4}
  ]

useEffect(() => {
  const interval = setInterval(()=> {
    setScore(prev =>  prev + scorePerSecond)
  }, 1000)

  return () => clearInterval(interval)
}, [scorePerSecond])

const handleBuy = (upgrade) => {
  if (score < upgrade.cost) return
  setScore(score - upgrade.cost)
  setScorePerSecond(scorePerSecond + upgrade.sps)
}

  return (
    <>
      <div>
        <div>{score}</div>
        <button onClick={() => setScore(score + 1)}>Press Me!</button>
        <div>
          {upgrades.map(upgrade => (
            <button key={upgrade.id} onClick={() => handleBuy(upgrade)}>
              {upgrade.name} (cost {upgrade.cost})
            </button>
          ))}
        </div>
      </div>
    </>
  )
}