import React, { useState } from "react";

const tiersData = [
  { id: 1, label: "Tier 1", info: "F0 (Rebate): 5%" },
  { id: 2, label: "Tier 2", info: "F1 (Commission): 35%" },
  { id: 3, label: "Tier 3", info: "F2 (Commission): 10%" },
  { id: 4, label: "Tier 4", info: "" },
  { id: 5, label: "Tier 5", info: "" },
  { id: 6, label: "Tier 6", info: "" },
];

export default function TiersComponent() {
  const [selectedTier, setSelectedTier] = useState(null);

  const handleTierClick = (tier) => {
    setSelectedTier(tier);
  };

  return (
    <div className="flex flex-col items-center space-y-4 p-6">
      <div className="flex space-x-4">
        {tiersData.map((tier) => (
          <div
            key={tier.id}
            className={`w-16 h-16 rounded-full flex items-center justify-center text-white cursor-pointer transition-transform 
            ${
              selectedTier?.id === tier.id
                ? "scale-125 bg-gradient-to-r from-cyan-400 to-blue-600 shadow-lg animate-glow"
                : "bg-gray-700"
            }`}
            onClick={() => handleTierClick(tier)}
          >
            <span>{tier.label}</span>
          </div>
        ))}
      </div>
      {selectedTier && (
        <div className="mt-4 bg-gray-800 p-4 rounded-lg text-white text-center">
          <p>{selectedTier.info}</p>
        </div>
      )}
    </div>
  );
}
