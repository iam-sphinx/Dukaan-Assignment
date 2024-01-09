import React from "react";

const DetailCard = () => {
  return (
    <div className="w-full h-[40px] flex justify-between items-center px-3 py-[10px] rounded-[4px] bg-[#F2F2F2]">
      <div className="w-[151px] h-full flex justify-start items-center gap-[3px]">
        <h1 className="text-[#4D4D4D] text-[14px] leading-[20px] font-medium">
          Order ID
        </h1>
      </div>
      <div className="w-[151px] h-full flex justify-start items-center">
        <h1 className="text-[#4D4D4D] text-start text-sm font-medium">
          Status
        </h1>
      </div>
      <div className="w-[151px] h-full flex justify-end items-center">
        <h1 className="text-[#4D4D4D] text-start text-sm font-medium">
          Transaction ID
        </h1>
      </div>
      <div className="w-[151px] h-full flex justify-end items-center">
        <h1 className="text-[#4D4D4D] text-end text-sm font-medium">
          Order amount
        </h1>
      </div>
      <div className="w-[151px] h-full flex justify-end items-center">
        <h1 className="text-[#4D4D4D] text-end text-sm font-medium">
          Transaction Fees
        </h1>
      </div>
      <div className="w-[151px] h-full flex justify-end items-center">
        <h1 className="text-[#4D4D4D] text-end text-sm font-medium">Total</h1>
      </div>
    </div>
  );
};

export default DetailCard;
