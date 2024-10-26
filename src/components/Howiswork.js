// import React from "react";

// const ReferralProgram = () => {
//   return (
//     <div className="bg-gray-900 text-white  flex flex-col min-h-screen">
//       {/* Header and Tiers Section */}
//       <div
//         className="bg-gray-800 p-6 lg:p-10 border-b border-gray-700 w-full flex-grow-0 lg:flex-grow-1"
//         style={{ minHeight: "30vh" }}
//       >
//         <div className="max-w-[1180px] mx-auto">
//           <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-4 lg:space-y-0 lg:space-x-12">
//             {/* Header Section */}
//             <div className="text-center lg:text-left space-y-3 lg:w-1/2">
//               <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
//                 Unlock Rewards with the Copin Referral Program
//               </h1>
//               <p className="text-sm md:text-base lg:text-lg text-gray-300">
//                 Earn rebates and commissions by inviting friends. Grow your
//                 network and benefit from our 6-tier reward system.
//               </p>
//               <a href="#" className="text-blue-400 hover:underline">
//                 View referral Ranking →
//               </a>
//             </div>

//             {/* Tiers Section */}
//             <div className="flex justify-center lg:justify-start space-x-4 overflow-auto">
//               {["Tier 1", "Tier 2", "Tier 3", "Tier 4", "Tier 5", "Tier 6"].map(
//                 (tier, index) => (
//                   <div key={index} className="text-center">
//                     <div className="bg-blue-500 rounded-full w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 mx-auto"></div>
//                     <p className="text-sm mt-2">{tier}</p>
//                   </div>
//                 )
//               )}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* How It Works Section */}
//       <div className="bg-gray-900 p-6 lg:p-10 space-y-3 flex-grow">
//         <h2 className="flex items-center text-lg md:text-xl lg:text-2xl font-semibold">
//           <span className="material-icons text-blue-400 mr-2">lightbulb</span>
//           How It Works?
//         </h2>
//         <div className="max-w-[1180px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//           {[
//             {
//               title: "Two-Level Referral System",
//               description:
//                 "Invite friends and earn from two levels: F1 (your referrals) and F2 (their referrals)",
//             },
//             {
//               title: "Earn Rebates & Commissions",
//               description:
//                 "Earn rebates on your trades and commissions from F1 and F2.",
//             },
//             {
//               title: "Claim Daily Rewards",
//               description:
//                 "Rewards are credited after trades close and claimable daily at 0:00 UTC.",
//             },
//             {
//               title: "Referral Tier System",
//               description:
//                 "Your tier is based on total fees paid by F0, F1, and F2 over the last 30 days.",
//             },
//           ].map((item, index) => (
//             <div
//               key={index}
//               className="bg-gray-800 p-4 rounded-lg text-center space-y-2"
//             >
//               <div className="bg-gradient-to-br from-blue-500 to-green-500 rounded-full w-10 h-10 mx-auto"></div>
//               <h3 className="text-sm font-semibold">{item.title}</h3>
//               <p className="text-xs text-gray-400">{item.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Footer Section */}
//       <div
//         className="bg-gray-800 p-6 text-center text-sm md:text-base lg:text-lg space-y-1 w-full flex-grow-0"
//         style={{ minHeight: "20vh" }}
//       >
//         <div className="max-w-[1180px] mx-auto">
//           <p>
//             Apply{" "}
//             <a href="#" className="text-blue-400 hover:underline">
//               Copin Affiliate Program
//             </a>{" "}
//             to get more benefits!
//           </p>
//           <a href="#" className="text-blue-400 hover:underline">
//             Contact us
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ReferralProgram;
import TiersComponent from "./Banner";

import React, { useState } from "react";

const tiersData = [
  { name: "Tier 1", info: "Information about Tier 1" },
  { name: "Tier 2", info: "Information about Tier 2" },
  { name: "Tier 3", info: "Information about Tier 3" },
  { name: "Tier 4", info: "Information about Tier 4" },
  { name: "Tier 5", info: "Information about Tier 5" },
  { name: "Tier 6", info: "Information about Tier 6" },
];
const CardData = [
  {
    title: "1. Two-Level Referral System",
    description:
      "Invite friends and earn from two levels: F1 (your referrals) and F2 (their referrals)",
  },
  {
    title: "2. Earn Rebates & Commissions",
    description: "Earn rebates on your trades and commissions from F1 and F2.",
  },
  {
    title: "3. Claim Daily Rewards",
    description:
      "Rewards are credited after trades close and claimable daily at 0:00 UTC.",
  },
  {
    title: "4. Referral Tier System",
    description:
      "Your tier is based on total fees paid by F0, F1, and F2 over the last 30 days.",
  },
];

const ReferralProgram = () => {
  const [selectedTier, setSelectedTier] = useState(null);

  const handleTierClick = (tier) => {
    setSelectedTier(tier);
  };

  return (
    <div className="bg-[#313856] text-white  flex flex-col min-h-screen">
      {/* Header and Tiers Section */}
      <div
        className="bg-gradient-to-r from-[#0B0E18] to-[#11142D] p-6 border-b border-gray-700 w-full flex-grow-0 lg:flex-grow-1"
        style={{ minHeight: "30vh" }}
      >
        <div className="max-w-[1180px] mx-auto">
          <div className="flex flex-col lg:flex-row items-center lg:gap-10  lg:items-start lg:justify-between space-y-4 lg:space-y-0 lg:space-x-12">
            {/* Header Section */}
            <div className="text-center lg:text-left space-y-3 lg:w-[45%] pt-14 py-10">
              <h1 className="text-[24px] md:text-3xl lg:text-4xl font-bold">
                Unlock Rewards with the Copin Referral Program
              </h1>
              <p className="text-sm md:text-base  text-gray-300 py-5">
                Earn rebates and commissions by inviting friends. Grow your
                network and benefit from our 6-tier reward system.
              </p>
              <a href="#" className="text-blue-400 hover:underline">
                View referral Ranking →
              </a>
            </div>

            {/* Tiers Section */}
            <div className="flex justify-center lg:justify-start items-end space-x-4 overflow-auto min-h-[250px] lg:min-h-[350px]">
              {tiersData.map((tier, index) => (
                <div
                  key={index}
                  className="text-center cursor-pointer"
                  onClick={() => handleTierClick(tier)}
                >
                  <div className="bg-blue-500 rounded-full w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 mx-auto"></div>
                  <p className="text-sm mt-2">{tier.name}</p>
                </div>
              ))}
              {/* <TiersComponent /> */}
            </div>
          </div>
        </div>
      </div>

      {/* Card for selected Tier */}
      {/* {selectedTier && (
        <div className="bg-gray-800 p-6 lg:p-10 mt-4 rounded-lg max-w-[1180px] mx-auto">
          <h2 className="text-lg font-semibold">{selectedTier.name}</h2>
          <p className="text-sm text-gray-300">{selectedTier.info}</p>
        </div>
      )} */}

      {/* How It Works Section */}
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
              <div className="bg-gradient-to-br from-blue-500 to-green-500  w-10 h-10"></div>
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

      {/* Footer Section */}
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

export default ReferralProgram;
