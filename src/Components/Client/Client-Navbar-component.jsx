import React from "react";
import { Link } from "react-router-dom";
//
function ClientNav(params) {
  return (
    <div className="flex w-full bg-orange-200 text-center p-2">
      <Link to="info" className="w-1/3 underline">
        Info
      </Link>
      <Link to="receipts" className="w-1/3 underline">
        Receipts
      </Link>
      <Link to="transaction" className="w-1/3 underline">
        Transaction
      </Link>
    </div>
  );
}

export default ClientNav;
