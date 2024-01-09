import React from "react";

const TableData = ({
  orderID,
  status,
  transactionID,
  orderAmt,
  transactionFees,
  Total,
}) => {
  return (
    <div className="w-full h-[48px]  px-3 pt-[14px] bg-white">
      <div className="w-full h-full border-b pb-[14px] border-b-[#E6E6E6] flex justify-between items-center">
        <div className="w-[151px] h-full flex justify-start items-center gap-[3px]">
          <h1 className="text-[#146EB4] font-medium leading-[20px] text-[14px]">
            #{orderID}
          </h1>
        </div>
        <div className="w-[151px] h-full flex justify-start items-center">
          {status ? (
            <div className="flex gap-[6px] items-center justify-center">
              <div className="w-[10px] h-[10px] rounded-[5px] bg-[#17B31B]"></div>
              <h1 className="text-[#1A181E] text-sm font-normal">Success</h1>
            </div>
          ) : (
            <div className="flex gap-[6px] items-center justify-center">
              <div className="w-[10px] h-[10px] rounded-[5px] bg-[#999]"></div>
              <h1 className="text-[#1A181E] text-sm font-normal">Processing</h1>
            </div>
          )}
        </div>
        <div className="w-[151px] h-full flex justify-end items-center">
          <h1 className="text-[#4D4D4D] text-start text-sm font-normal">
            {transactionID}
          </h1>
        </div>
        <div className="w-[151px] h-full flex justify-end items-center">
          <h1 className="text-[#4D4D4D] text-end text-sm font-normal">
            &#8377; {orderAmt}
          </h1>
        </div>
        <div className="w-[151px] h-full flex justify-end items-center">
          <h1 className="text-[#4D4D4D] text-end text-sm font-normal">
            &#8377; {transactionFees}
          </h1>
        </div>
        <div className="w-[151px] h-full flex justify-end items-center">
          <h1 className="text-[#4D4D4D] text-end text-sm font-normal">
            &#8377; {Total}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default TableData;
