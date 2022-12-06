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
    // console.log(typeof quickOptionRequested);
    setQuickTray(quickOptionRequested);
    // check what is requested based on click
    // set the currentPage to the correct obj.
    // quickOptionRequested === "log-private"
    //   ? setCurrentLogPage("private")
    //   : setCurrentLogPage("class");
    // //
    if (quickTrayRef.current.classList.contains("hidden")) {
      quickTrayRef.current.classList.remove("hidden");
    } else {
      quickTrayRef.current.classList.add("hidden");
    }
  };
  //
  return (
    <div className="bg-purple-300 w-full flex flex-col p-10 pb-0 gap-5">
      {/* 3 QUICK BUTTONS */}
      <div className="grid grid-cols-3 gap-1 text-center text-xl bg-blue-800 text-white">
        <div className=" ">
          <div onClick={handleQuickRequest} data-tag="quick-add" className="">
            ADD CLIENT
          </div>
        </div>
        <div className=" ">
          <div onClick={handleQuickRequest} data-tag="quick-debit" className="">
            DEBIT
          </div>
        </div>
        <div className=" ">
          <div
            onClick={handleQuickRequest}
            data-tag="quick-credit"
            className=""
          >
            CREDIT
          </div>
        </div>
      </div>
      {/* TRAY  */}
      <div ref={quickTrayRef} className="bg-purple-100 hidden">
        {quickOptions[`${quickTray}`]}
      </div>
    </div>
  );
}

export default QuickBar;
