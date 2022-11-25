import React from "react";
// ---- Component imports
import AddClient from "./AddClient/AddClient-component";
import Log from "./Log/Log-parent-component";
//
function QuickBar(params) {
  return (
    <div className="bg-purple-300 w-full flex flex-col p-2 gap-5">
      <div className="flex justify-around">
        <div className="bg-purple-100  text-2xl ">
          <div className="border-y-2 border-black p-2">Add client</div>
        </div>
        <div className="bg-purple-100  text-2xl ">
          <div className="border-y-2 border-black p-2">Debit</div>
        </div>
        <div className="bg-purple-100  text-2xl ">
          <div className="border-y-2 border-black p-2">Credit</div>
        </div>
      </div>
      <div className="bg-purple-100">
        <h2>ADD CLIENT TRAY GOES HERE</h2>
        <br />
        <h2>DEBIT TRAY GOES HERE</h2>
        <br />
        <h2>CREDIT TRAY GOES HERE</h2>
      </div>
    </div>
  );
}

export default QuickBar;
