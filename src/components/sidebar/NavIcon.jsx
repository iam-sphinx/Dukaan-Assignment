import React from "react";
import imgSrc from "../../icons/Image.png";

const NavIcon = () => {
  return (
    <div className="w-[192px] flex justify-between gap-[12px] items-center mb-6">
      <div className="w-[39px] h-[39px] rounded-[4px] overflow-hidden bg-white">
        <img className="w-full h-full object-cover" src={imgSrc} alt="" />
      </div>
      <div className="flex-1">
        <h1 className="self-stretch text-white text-[15px] font-medium leading-[22px] mb-1 font-inter">Nishyan</h1>
        <h3 className="self-stretch underline font-normal text-[13px] leading-[16px] text-white cursor-pointer">Visit store</h3>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        className="cursor-pointer"
      >
        <path
          d="M2.84685 7.22185C3.26727 6.80143 3.92516 6.76321 4.38876 7.10719L4.52157 7.22185L10 12.6997L15.4784 7.22185C15.8988 6.80143 16.5567 6.76321 17.0203 7.10719L17.1532 7.22185C17.5736 7.64227 17.6118 8.30016 17.2678 8.76376L17.1532 8.89657L10.8374 15.2124C10.4169 15.6328 9.75905 15.671 9.29545 15.327L9.16264 15.2124L2.84685 8.89657C2.38438 8.43411 2.38438 7.68431 2.84685 7.22185Z"
          fill="white"
        />
      </svg>
    </div>
  );
};

export default NavIcon;
