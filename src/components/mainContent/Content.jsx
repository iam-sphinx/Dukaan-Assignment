import React from "react";
import OverViewCard from "./cards/OverViewCard";
import GenCard from "./cards/GenCard";
import ProcessedCard from "./cards/ProcessedCard";
import TransactionSection from "./TransactionSection";

const Content = () => {
  return (
    <div className="flex-1 flex flex-col p-6">
      <div className="flex-1 flex flex-col">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-[#1A181E] text-[20px] leading-[28px] font-medium">
            Overview
          </h1>
          <div className="w-[137px] h-9 flex-shrink-0 border border-[#D9D9D9] flex justify-center items-center gap-[6px] rounded-[4px] bg-white cursor-pointer">
            <h1 className="text-[#4D4D4D] font-normal text-base">This Month</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M2.27748 5.77748C2.61381 5.44114 3.14013 5.41057 3.511 5.68575L3.61726 5.77748L8 10.1598L12.3827 5.77748C12.7191 5.44114 13.2454 5.41057 13.6163 5.68575L13.7225 5.77748C14.0589 6.11381 14.0894 6.64013 13.8142 7.011L13.7225 7.11726L8.66989 12.1699C8.33355 12.5062 7.80724 12.5368 7.43636 12.2616L7.33011 12.1699L2.27748 7.11726C1.90751 6.74729 1.90751 6.14745 2.27748 5.77748Z"
                fill="#4D4D4D"
              />
            </svg>
          </div>
        </div>
        <div className="flex justify-between">
          <OverViewCard />
          <GenCard />
          <ProcessedCard />
        </div>

      <TransactionSection/>
      </div>
    </div>
  );
};

export default Content;
