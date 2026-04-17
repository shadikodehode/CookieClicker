import { useState, useEffect } from "react";
import SpiderClick from "./Components/SpiderClick.jsx";
import ScoreDisplay from "./Components/ScoreDisplay.jsx";
import Upgrades from "./Components/Upgrades.jsx";
import { upgradeList } from "./data/upgradeList.js";
import spiderDressing from "/spiderDressing.png";
import spiderDisplay from "/spider-clicker-display.svg";
import miles from "/morales.png";


export default function App () {

  const [score, setScore] = useState(0)

  const [scorePerSecond, setScorePerSecond] = useState(0)

  useEffect(() => {
      const interval = setInterval(() => {
        setScore(prev => prev + scorePerSecond)
      }, 1000)
      return () => clearInterval(interval)
    }, [scorePerSecond])
  
  const handleBuy = (upgrade) => {
      if(score < upgrade.cost) return
      setScore( prev => prev - upgrade.cost)
      setScorePerSecond(prev => prev + upgrade.sps)
    }

  return (
      <>
        <div className="flex flex-col m-15">
          <div className="flex absolute w-64 -left-2 -top-2">
            <img src={spiderDressing}/>
          </div>
          <div className="flex justify-center">
            <img 
              src={spiderDisplay} 
              className="w-160"/>
          </div>
          
          <SpiderClick/>
          <ScoreDisplay 
            score={score} 
            scorePerSecond={scorePerSecond}
          />
          <div className="flex justify-center m-8">
              <img className="w-64 hover:drop-shadow-pink-900 hover:drop-shadow-md hover:scale-104 
              active:drop-shadow-blue-700 active:drop-shadow-xl active:scale-108 cursor-pointer"
                onClick={() => setScore(score + 1)}
                src={miles}
                alt="miles morales icon"
                draggable="false"
            />
          </div>
          
          <div className="flex flex-row justify-center p-5 gap-4">
            {upgradeList.map(upgrade => (
              <Upgrades
                key={upgrade.id}
                upgrade={upgrade}
                score={score}
                onBuy={handleBuy}
              />
            ))}
          </div>
        </div>
      </>
    )
}