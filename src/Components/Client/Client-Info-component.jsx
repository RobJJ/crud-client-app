import React from "react";
import { useGlobalContext } from "../../Context-Reducer/Context";
//
function ClientInfo(params) {
  //
  const { focusedClient } = useGlobalContext();
  const { email, contact, balance, notes } = focusedClient;
  //
  const dummyHandlerForNow = () => {};
  //
  return (
    <div className="bg-red-200 w-full h-full flex flex-col p-2 gap-2">
      {/* basic info */}
      <section className="bg-red-300 flex gap-2 p-2 text-center text-xl">
        <div className="bg-white w-1/2">
          <div>email: {email}</div>
          <div>contact: {contact}</div>
        </div>
        <div className="bg-white w-1/2">
          <div>balance: {balance}</div>
          <div>extra space here</div>
        </div>
      </section>
      {/* notes */}
      <section className="bg-red-300 h-full p-5">
        <textarea
          value={notes}
          onChange={dummyHandlerForNow}
          className="h-full w-full resize-none rounded-xl p-5 text-lg"
        ></textarea>
      </section>
    </div>
  );
}

export default ClientInfo;
