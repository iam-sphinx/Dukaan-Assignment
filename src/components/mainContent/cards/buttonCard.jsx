import React from "react";

const ButtonCard = ({ title, no = 0 }) => {
  return (
    <div className="py-[6px] px-4 flex justify-center items-center rounded-[40px] bg-[#E6E6E6] hover:bg-[#146EB4] cursor-pointer text-[#808080] text-[14px] leading-[20px] font-medium hover:text-[white]">
      <h1>
        {title} {`(${no})`}
      </h1>
    </div>
  );
};

export default ButtonCard;
