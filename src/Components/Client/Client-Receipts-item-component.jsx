import React from "react";
//
//
function ReceiptItem({ receipt }) {
  const { date, amount, sessions } = receipt;
  return (
    <div className="w-full flex gap-2 bg-white text-center text-xl p-2">
      <span className="w-1/3 ">{date}</span>
      <span className="w-1/3 ">{amount}</span>
      <span className="w-1/3 ">{sessions}</span>
    </div>
  );
}

export default ReceiptItem;
