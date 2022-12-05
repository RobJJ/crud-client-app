import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../../Context-Reducer/Context";
//
import ReceiptItem from "./Client-Receipts-item-component";
//
// const receiptTestArr = [
//   {
//     date: "22-10-2022",
//     amount: "550 usd",
//     sessions: 10,
//     id: 1,
//   },
//   {
//     date: "10-10-2022",
//     amount: "250 usd",
//     sessions: 4,
//     id: 2,
//   },
//   {
//     date: "19-09-2022",
//     amount: "100 usd",
//     sessions: 2,
//     id: 3,
//   },
//   {
//     date: "22-10-2022",
//     amount: "",
//     sessions: 3,
//     id: 4,
//   },
//   {
//     date: "22-10-2022",
//     amount: "550 usd",
//     sessions: 10,
//     id: 5,
//   },
//   {
//     date: "22-10-2022",
//     amount: "550 usd",
//     sessions: 10,
//     id: 6,
//   },
//   {
//     date: "22-10-2022",
//     amount: "550 usd",
//     sessions: 10,
//     id: 7,
//   },
//   {
//     date: "22-10-2022",
//     amount: "550 usd",
//     sessions: 10,
//     id: 8,
//   },
//   {
//     date: "22-10-2022",
//     amount: "550 usd",
//     sessions: 10,
//     id: 9,
//   },
//   {
//     date: "22-10-2022",
//     amount: "550 usd",
//     sessions: 10,
//     id: 10,
//   },
//   {
//     date: "22-10-2022",
//     amount: "550 usd",
//     sessions: 10,
//     id: 11,
//   },
//   {
//     date: "22-10-2022",
//     amount: "550 usd",
//     sessions: 10,
//     id: 12,
//   },
//   {
//     date: "22-10-2022",
//     amount: "550 usd",
//     sessions: 10,
//     id: 13,
//   },
//   {
//     date: "22-10-2022",
//     amount: "550 usd",
//     sessions: 10,
//     id: 14,
//   },
//   {
//     date: "22-10-2022",
//     amount: "550 usd",
//     sessions: 10,
//     id: 15,
//   },
// ];
//
//
function ClientReceipts(params) {
  //
  const { focusedClient } = useGlobalContext();
  const { debits, credits } = focusedClient;
  const [sortedReceipts, setSortedReceipts] = useState([]);
  //
  useEffect(() => {
    const totalReceipts = [...debits, ...credits];
    const sorted = totalReceipts.sort(
      (objA, objB) => Number(objB.date) - Number(objA.date)
    );
    setSortedReceipts([...sorted]);
  }, []);
  //
  return (
    <div className="bg-red-200 w-full h-full flex flex-col gap-2 overflow-auto">
      {/* display headers for columns */}
      <section className="bg-red-300 w-full p-2">
        <header className="w-full flex gap-5 text-center underline text-xl">
          <span className="bg-white w-1/3">Date</span>
          <span className="bg-white w-1/3">Amount</span>
          <span className="bg-white w-1/3">Sessions</span>
        </header>
      </section>
      {/* display list of receipts */}

      <section className="bg-red-300 w-full h-full flex p-2 overflow-auto">
        <div className=" bg-green-200 flex flex-col gap-2 w-full h-full overflow-auto p-2">
          {sortedReceipts.map((item) => {
            return <ReceiptItem key={item.uid} receipt={item} />;
          })}
        </div>
      </section>
    </div>
  );
}

export default ClientReceipts;
