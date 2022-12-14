import { useRef } from "react";
import React from "react";
//
//
function ReceiptItem({ receipt }) {
  const { date, amount, sessions, note } = receipt;
  const receiptNote = useRef();
  const toggleNote = () => {
    if (receiptNote.current.classList.contains("hidden")) {
      receiptNote.current.classList.remove("hidden");
    } else {
      receiptNote.current.classList.add("hidden");
    }
  };
  return (
    <div
      className={`flex flex-col p-1 ${
        amount ? "bg-blue-200" : "bg-yellow-200"
      } rounded-xl text-center border-white border-2 hover:border-black hover:cursor-pointer`}
    >
      <div
        onClick={toggleNote}
        className={`w-full flex gap-2 text-xl smlr:text-lg`}
      >
        <span className="w-1/3 smlst:hidden">{date}</span>
        <span className="w-1/3 hidden smlst:block">{date.slice(5)}</span>
        <span className="w-1/3 ">{amount ? amount : "N/A"}</span>
        <span className="w-1/3 ">{sessions}</span>
      </div>
      <span ref={receiptNote} className="hidden border-t-2 border-white p-1">
        {note}
      </span>
    </div>
  );
}

export default ReceiptItem;
