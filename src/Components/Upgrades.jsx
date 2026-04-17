export default function Upgrades ({upgrade, score, onBuy}) {
  const canAfford = score >= upgrade.cost 

  return (
    <div
      onClick={() => onBuy(upgrade)}
      className={`flex items-center p-4 mb-3 
        rounded-xl transition-all duration-100
        ${canAfford
          ? 'bg-blue-600 opacity-100 hover:scale-105 hover:drop-shadow-lg cursor-pointer'
          : 'bg-gray-900 opacity-40 cursor-default'
        }`}     
    >
      <div>
        <p className="font-bold text-lg">{upgrade.name}</p>
        <p className="text-base">{upgrade.cost} spiders</p>
        <p className="text-xs">{upgrade.sps} sp/sec</p>
      </div>
    </div>
  )
}