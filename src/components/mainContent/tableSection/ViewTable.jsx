import React from "react";
import DetailCard from "../cards/DetailCard";
import TableData from "./tableData";

const tableData = [
  {
    orderID: "281209",
    status: true,
    transactionID: 131634495747,
    orderAmt: "10,125.00",
    transactionFees: "1,125.00",
    Total: "9,312",
  },
  {
    orderID: "281208",
    status: false,
    transactionID: 131634495747,
    orderAmt: "10,125.00",
    transactionFees: "1,125.00",
    Total: "9,312",
  },
  {
    orderID: "281207",
    status: true,
    transactionID: 131634495747,
    orderAmt: "10,125.00",
    transactionFees: "1,125.00",
    Total: "9,312",
  },
  {
    orderID: "281206",
    status: true,
    transactionID: 131634495747,
    orderAmt: "10,125.00",
    transactionFees: "1,125.00",
    Total: "9,312",
  },
  {
    orderID: "281205",
    status: true,
    transactionID: 131634495747,
    orderAmt: "10,125.00",
    transactionFees: "1,125.00",
    Total: "9,312",
  },
  {
    orderID: 281204,
    status: true,
    transactionID: 131634495747,
    orderAmt: "10,125.00",
    transactionFees: "1,125.00",
    Total: "9,312",
  },
];
const ViewTable = () => {
  return (
    <div className="flex-1 flex flex-col shadow-md">
      <DetailCard />
      {tableData.map((item, idx) => {
        return <TableData key={idx} {...item}></TableData>;
      })}
    </div>
  );
};

export default ViewTable;
