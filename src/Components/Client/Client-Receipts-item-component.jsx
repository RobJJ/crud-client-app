import React from "react";
//
//
function ReceiptItem({ receipt }) {
  const { date, amount, sessions } = receipt;
  return (
    <div
      className={`w-full flex gap-2 ${
        amount ? "bg-blue-200" : "bg-yellow-200"
      } text-center text-xl p-2 rounded-xl`}
    >
      <span className="w-1/3 ">{date}</span>
      <span className="w-1/3 ">{amount ? amount : "N/A"}</span>
      <span className="w-1/3 ">{sessions}</span>
    </div>
  );
}

export default ReceiptItem;
