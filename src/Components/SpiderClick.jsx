import { useState, useEffect, useCallback } from "react";

export default function SpiderClick () {

  const [spiders, setSpiders] = useState([])

  useEffect(() => {
    if (spiders.length === 0) return
    const timeout = setTimeout(() => setSpiders([]), 600)
    return () => clearTimeout(timeout)
  }, [spiders])


  const handleClick = useCallback((e) => {
    const spawnSpiders = Array.from({ length: 4 }, (_, i) =>  ({
      id: Date.now() + i,
      x: e.clientX,
      y: e.clientY,
      tx: `${(Math.random() - 0.5) * 160}px`,
      ty: `${(Math.random() - 0.5) * 160}px`,
    }))
    setSpiders(prev => [...prev, ...spawnSpiders])
  }, [])
    
  useEffect(() => {
    window.addEventListener('click', handleClick)
    return () => window.removeEventListener('click', handleClick)
  },)

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {spiders.map(spider => (
        <img
          key={spider.id}
          src="/spider01.png"
          className="absolute w-10 h-10 animate-spider"
          style={{ 
            left: spider.x, 
            top: spider.y,
            '--tx': spider.tx,
            '--ty': spider.ty,
          }} 
        />
      ))}
    </div>
  )

}