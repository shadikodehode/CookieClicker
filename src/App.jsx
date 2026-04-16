import { useState, useEffect } from "react";
import SpiderClick from "./Components/SpiderClick.jsx";
import ScoreDisplay from "./Components/ScoreDisplay.jsx";

export default function App () {
  const [score, setScore] = useState(0)

  const [scorePerSecond, setScorePerSecond] = useState(0)
  
  const upgrades= [
    { id: 1, name: "spider-sense", cost: 10, sps: 2},
    { id: 2, name: "venom-blast", cost: 50, sps: 4}
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
      <div className="flex flex-col m-15">
        <div className="flex absolute w-64 -left-2 -top-2">
          <img src="/spiderDressing.png"/>
        </div>
        <div className="flex justify-center">
          <img 
            src="/spider-clicker-display.svg" 
            className="w-160"/>
        </div>
        
        <SpiderClick/>
        <button className="flex justify-center p-10">
            <img className="w-64 hover:drop-shadow-pink-900 hover:drop-shadow-md hover:scale-104 active:drop-shadow-blue-700 active:drop-shadow-xl active:scale-108 cursor-pointer"
              onClick={() => setScore(score + 1)}
              src="morales.png" 
              alt="miles morales icon"
          />
        </button>
        <ScoreDisplay score={score} scorePerSecond={scorePerSecond}/>
        <div className="p-5">
          {upgrades.map(upgrade => (
            <button className="cursor-pointer p-1"
              key={upgrade.id} 
              onClick={() => handleBuy(upgrade)}>
              {upgrade.name} (cost {upgrade.cost})
            </button>
          ))}
        </div>
      </div>
    </>
  )
}