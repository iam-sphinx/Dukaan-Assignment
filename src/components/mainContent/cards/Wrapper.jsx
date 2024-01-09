import React from "react";

const Wrapper = ({ children }) => {
  return (
    <div
      className="w-[371px] h-[118px] rounded-lg bg-[white] p-[20px] overflow-hidden flex flex-col justify-between"
      style={{ boxShadow: "0px 2px 6px 0px rgba(26, 24, 30, 0.04)" }}
    >
      {children}
    </div>
  );
};

export default Wrapper;
