import React, { useRef, useState } from "react";
// Component imports
import LogClass from "./Log-class-component";
import LogPrivate from "../CreditClient/creditClient-component";
//
const privateInfo = {
  name: "private",
  info: "private stuff here",
};
const classInfo = {
  name: "class",
  info: "class stuff here",
};
const LogPage = {
  private: <LogPrivate />,
  class: <LogClass />,
};

function Log(params) {
  //
  const [currentLogPage, setCurrentLogPage] = useState("");

  const tray = useRef();
  //
  const handleLogClick = (e) => {
    e.preventDefault();
    const pageRequested = e.target.dataset.tag;
    // check what is requested based on click
    // set the currentPage to the correct obj.
    pageRequested === "log-private"
      ? setCurrentLogPage("private")
      : setCurrentLogPage("class");
    //
    if (tray.current.classList.contains("hidden")) {
      tray.current.classList.remove("hidden");
    } else {
      tray.current.classList.add("hidden");
    }
  };
  //
  return (
    <div className="w-full bg-orange-200 p-2">
      {/* Parent container that expands onClick. No height set */}
      <div className="w-full  flex flex-col">
        {/* Top level bar display to handle clicks and guidance */}
        <div className="w-full h-12 flex text-center items-center gap-2">
          <div
            data-tag="log-private"
            onClick={handleLogClick}
            className="w-1/3 bg-slate-200"
          >
            PRIVATE
          </div>
          <div className="w-1/3 bg-slate-200">LOG</div>
          <div
            data-tag="log-class"
            onClick={handleLogClick}
            className="w-1/3 bg-slate-200"
          >
            CLASS
          </div>
        </div>
        {/* The expandable section of the div.. The contents depends on the click */}
        <div ref={tray} className="hidden ">
          {LogPage[`${currentLogPage}`]}
        </div>
      </div>
    </div>
  );
}

export default Log;
