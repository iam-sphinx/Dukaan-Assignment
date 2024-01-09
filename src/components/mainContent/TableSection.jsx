import React from "react";
import SearchBar from "./tableSection/SearchBar";
import ViewTable from "./tableSection/ViewTable";

const TableSection = () => {
  return (
    <div className="flex-1 flex flex-col p-3 pb-2 ">
      <div className="flex-1 flex flex-col ">
        <SearchBar/>
        <ViewTable/>
      </div>
    </div>
  );
};

export default TableSection;
