import React from "react";
//

function Welcome(params) {
  //
  return (
    <div className="w-full h-3/5 p-2 bg-blue-500 border-4 border-white rounded-t-xl flex flex-col gap-5 items-center">
      <h2 className="text-white font-mainNavBar text-4xl tracking-widest underline">
        Private client tracker
      </h2>
      <p className="text-white w-full h-full text-center p-2">
        This app was designed for a specific user with the need to track private
        client information, receipts, notes, and session balances.
        <br />
        <br /> A user can create a list of clients and manage them individually.
        Use the quickBar for fast transactions. Search, click, and manage an
        individual client. Click on a receipt to view it's note.
      </p>
    </div>
  );
}

export default Welcome;
