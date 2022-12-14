import React from "react";
import { useState } from "react";
import { useGlobalContext } from "../../Context-Reducer/Context";
//
function ClientInfo(params) {
  //
  const { focusedClient, handleNoteUpdate } = useGlobalContext();
  const { email, contact, balance, uid, notes } = focusedClient;
  const [tempNoteState, setTempNoteState] = useState(notes);
  //
  const dummyHandlerForNow = (e) => {
    setTempNoteState(e.target.value);
  };
  //
  //
  return (
    <div className="bg-blue-800 w-full h-full flex flex-col p-2  gap-2">
      {/* basic info */}
      <section className="bg-blue-800 text-blue-800 font-bold flex gap-4 p-2 text-center text-xl smlr:text-lg">
        <div className="bg-white w-1/2 rounded-xl">
          <div className="overflow-auto">{email}</div>
          <div>{contact}</div>
        </div>
        <div className="bg-white w-1/2 rounded-xl">
          <div className="underline">Balance </div>
          <div>{balance}</div>
        </div>
      </section>
      {/* notes */}
      <form
        onSubmit={(e) => handleNoteUpdate(e, uid, tempNoteState)}
        className="bg-blue-800 h-full p-5 flex flex-col gap-4"
      >
        <textarea
          value={tempNoteState}
          onChange={dummyHandlerForNow}
          className="h-full w-full resize-none rounded-xl p-5 text-lg font-chivoReg smlr:text-base"
        ></textarea>

        {/* update client button */}
        <div className="bg-blue-800 text-center">
          <button
            type="submit"
            className="bg-green-500 p-1 rounded-xl text-white font-bold text-lg border-2 border-white"
          >
            Update Client
          </button>
        </div>
      </form>
    </div>
  );
}

export default ClientInfo;
