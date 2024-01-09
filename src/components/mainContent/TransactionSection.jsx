import React from "react";
import ButtonCard from "./cards/buttonCard";
import TableSection from "./TableSection";

const TransactionSection = () => {
  return (
    <div className="flex-1 flex flex-col  pt-8">
      <div className="flex-1 flex flex-col gap-5 ">
        <div className="flex flex-col">
          <h1 className="text-[#1A181E] font-medium text-[20px] leading-[28px] mb-6">
            Transactions | This Month
          </h1>
          <div className="flex gap-4">
            <ButtonCard title="Payouts" no={22} />
            <ButtonCard title="Refunds" no={6} />
          </div>
        </div>

        <TableSection />
      </div>
    </div>
  );
};

export default TransactionSection;
