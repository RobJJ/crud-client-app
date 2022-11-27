import React from "react";
//
function ClientNav(params) {
  return (
    <div className="flex w-full bg-orange-200 text-center p-2">
      <div className="w-1/3 underline">Info</div>
      <div className="w-1/3 underline">Receipts</div>
      <div className="w-1/3 underline">Add</div>
    </div>
  );
}

export default ClientNav;
