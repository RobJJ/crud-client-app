import React, { useRef, useState } from "react";
// ---- Component imports
import AddClient from "./AddClient/AddClient-component";
import DebitClient from "./DebitClient/debitClient-component";
import CreditClient from "./CreditClient/creditClient-component";
//
// An object containing components that will be rendered based on what is requested from the user
const quickOptions = {
  "quick-add": <AddClient />,
  "quick-debit": <DebitClient />,
  "quick-credit": <CreditClient />,
};
//
function QuickBar(params) {
  //
  const [quickTray, setQuickTray] = useState("");
  const quickTrayRef = useRef();
  //
  const handleQuickRequest = (e) => {
    e.preventDefault();
    const quickOptionRequested = e.target.dataset.tag;
    //
    setQuickTray(quickOptionRequested);
    // check what is requested based on click
    // set the currentPage to the correct obj.
    if (quickTrayRef.current.classList.contains("hidden")) {
      quickTrayRef.current.classList.remove("hidden");
    } else {
      quickTrayRef.current.classList.add("hidden");
    }
  };
  //
  return (
    <div className="bg-purple-300 w-full flex flex-col p-5 pb-0 ">
      {/* 3 QUICK BUTTONS */}
      <div className="grid grid-cols-3 p-2 gap-1 text-center text-xl bg-blue-800 text-white border-b-4 border-white">
        <div className=" ">
          <div
            onClick={handleQuickRequest}
            data-tag="quick-add"
            className="cursor-pointer hover:underline"
          >
            ADD CLIENT
          </div>
        </div>
        <div className="">
          <div
            onClick={handleQuickRequest}
            data-tag="quick-debit"
            className="cursor-pointer hover:underline"
          >
            DEBIT
          </div>
        </div>
        <div className="">
          <div
            onClick={handleQuickRequest}
            data-tag="quick-credit"
            className="cursor-pointer hover:underline"
          >
            CREDIT
          </div>
        </div>
      </div>
      {/* TRAY  */}
      <div
        ref={quickTrayRef}
        className="bg-blue-800 hidden p-2 border-b-4 border-white "
      >
        {quickOptions[`${quickTray}`]}
      </div>
    </div>
  );
}

export default QuickBar;
