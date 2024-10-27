import React, { useState } from "react";

const tiers = [
  {
    id: 1,
    name: "Tier 1",
    info: ["F0 (Rebate): 5%", "F1 (Commission): 35%", " F2 (Commission): 10%"],
    image: "/images/tier6.png",
  },
  {
    id: 2,
    name: "Tier 2",
    info: ["F0 (Rebate): 5%", "F1 (Commission): 35%", " F2 (Commission): 10%"],
    image: "/images/tier5.png",
  },
  {
    id: 3,
    name: "Tier 3",
    info: ["F0 (Rebate): 5%", "F1 (Commission): 35%", " F2 (Commission): 10%"],
    image: "/images/tier4.png",
  },
  {
    id: 4,
    name: "Tier 4",
    info: ["F0 (Rebate): 5%", "F1 (Commission): 35%", " F2 (Commission): 10%"],
    image: "/images/tier3.png",
  },
  {
    id: 5,
    name: "Tier 5",
    info: ["F0 (Rebate): 5%", "F1 (Commission): 35%", " F2 (Commission): 10%"],
    image: "/images/tier2.png",
  },
  {
    id: 6,
    name: "Tier 6",
    info: ["F0 (Rebate): 5%", "F1 (Commission): 35%", " F2 (Commission): 10%"],
    image: "/images/tier1.png",
  },
];

const CardData = [
  {
    title: "1. Two-Level Referral System",
    description:
      "Invite friends and earn from two levels: F1 (your referrals) and F2 (their referrals)",
    icon: "/icons/card1.svg",
  },
  {
    title: "2. Earn Rebates & Commissions",
    description: "Earn rebates on your trades and commissions from F1 and F2.",
    icon: "/icons/card2.svg",
  },
  {
    title: "3. Claim Daily Rewards",
    description:
      "Rewards are credited after trades close and claimable daily at 0:00 UTC.",
    icon: "/icons/card3.svg",
  },
  {
    title: "4. Referral Tier System",
    description:
      "Your tier is based on total fees paid by F0, F1, and F2 over the last 30 days.",
    icon: "/icons/card4.svg",
  },
];

const Referral = () => {
  const [selectedTier, setSelectedTier] = useState(2);

  return (
    <div className="bg-[#313856] text-white  flex flex-col min-h-screen">
      <div
        className="bg-gradient-to-r from-[#0B0E18] to-[#11142D] p-6 border-b border-gray-700 w-full flex-grow-0 lg:flex-grow-1"
        style={{ minHeight: "30vh" }}
      >
        <div className="max-w-[1180px] mx-auto">
          <div className="flex flex-col lg:flex-row items-center lg:gap-10 lg:items-start lg:justify-between space-y-4 lg:space-y-0 lg:space-x-12">
            {/* Baner Section */}
            <div className="text-center lg:text-left space-y-3 lg:w-[45%] lg:pt-14 lg:py-10">
              <h1 className="text-[24px] md:text-3xl lg:text-4xl font-bold">
                Unlock Rewards with the Copin Referral Program
              </h1>
              <p className="text-sm md:text-base text-gray-300 py-5">
                Earn rebates and commissions by inviting friends. Grow your
                network and benefit from our 6-tier reward system.
              </p>
              <a href="#" className="text-blue-400 hover:underline">
                View referral Ranking →
              </a>
            </div>

            {/* Tiers */}
            <div className="flex relative px-14 overflow-hidden pb-2 justify-center lg:justify-start items-end space-x-4  min-h-[250px] lg:min-h-[350px]">
              {tiers.map((tier) => (
                <div key={tier.id} className="relative inline-block mx-auto">
                  <div
                    className={`flex items-center justify-center rounded-full w-10 h-10 md:w-10 md:h-10 lg:w-12 lg:h-12 
              transition-transform duration-200 ease-in-out transform 
              ${selectedTier === tier.id ? "scale-110 z-20" : "z-10"} `}
                    onClick={() =>
                      setSelectedTier(tier.id === selectedTier ? null : tier.id)
                    }
                  >
                    <div className="flex flex-col items-center justify-center">
                      <div className="relative">
                        {selectedTier === tier.id && (
                          <div className="absolute top-0 transform -translate-x-1/2 -translate-y-full">
                            <div
                              className="w-5 h-20"
                              style={{
                                background:
                                  "radial-gradient(circle, #ffffff, #3b82f6, #1e3a8a)",
                              }}
                            ></div>
                          </div>
                        )}
                      </div>

                      <img
                        src={tier.image}
                        className="cursor-pointer max-md:w-7"
                      ></img>
                      <p className="cursor-pointer text-[13px] max-md:text-[12px] font-mono pt-1 w-full">
                        {tier.name}
                      </p>
                    </div>
                  </div>

                  {selectedTier === tier.id && (
                    <div
                      style={{
                        bottom: `${50 + tier.id * 10}px`,
                        left:
                          tier.id === 1
                            ? "100%"
                            : tier.id === 6
                            ? "auto"
                            : "50%",
                        right: tier.id === 1 && "auto",
                      }}
                      className="absolute border bottom-full left-1/2 bg-[#0E1328] transform -translate-x-1/2 -translate-y-4 md:w-[140px] max-md:w-[130px] font-normal text-[13px]  text-white rounded-lg shadow-lg z-30"
                    >
                      <div className="p-2 space-y-2">
                        {tier.info.map((info, idx) => (
                          <p
                            key={idx}
                            className="text-[13px] max-md:text-[12px] text-left font-thin"
                          >
                            {info}
                          </p>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="bg-gray-900 p-6 lg:p-10 space-y-3 flex-grow">
        <h2 className="flex items-center text-lg  font-medium max-w-[1180px] mx-auto">
          How It Works?
        </h2>

        <div className="max-w-[1180px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {CardData.map((item, index) => (
            <div
              key={index}
              className="border border-gray-400 p-4 rounded-md space-y-5 transition-transform transform hover:scale-105 hover:shadow-lg"
            >
              <div className="bg-gradient-to-br from-blue-500 to-green-500  w-10 h-10 flex justify-center items-center">
                <img src={item.icon}></img>
              </div>
              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-left">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-400 text-left">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div
        className="bg-[#101423] p-6 text-center flex items-center text-sm md:text-base lg:text-lg space-y-1 w-full flex-grow-0"
        style={{ minHeight: "20vh" }}
      >
        <div className="max-w-[1180px] mx-auto">
          <p className="font-bold pb-2 max-w-[320px] mx-auto">
            Apply{" "}
            <a
              href="#"
              className="bg-gradient-to-r from-[#2FB3FE] to-[#A185F4] bg-clip-text text-transparent"
            >
              Copin Affiliate Program
            </a>{" "}
            to get more benefits!
          </p>
          <a href="#" className="text-blue-400 hover:underline">
            Contact us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Referral;
