import React from "react";
import { useState } from "react";
import { useGlobalContext } from "../../Context-Reducer/Context";
//
function ClientInfo(params) {
  console.log("CLIENTINFO RENDERED???");
  //
  const { focusedClient, handleNoteUpdate } = useGlobalContext();
  const { email, contact, balance, uid, notes } = focusedClient;
  const [tempNoteState, setTempNoteState] = useState(notes);
  //
  const dummyHandlerForNow = (e) => {
    setTempNoteState(e.target.value);
  };
  //
  // const testingFunc = (e) => {
  //   e.preventDefault();
  //   console.log("tempNoteState is : ", tempNoteState);
  //   console.log("tempNoteState type is : ", typeof tempNoteState);
  // };
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
      <form
        // onSubmit={testingFunc}
        onSubmit={(e) => handleNoteUpdate(e, uid, tempNoteState)}
        className="bg-red-300 h-full p-5 flex flex-col gap-2"
      >
        <textarea
          value={tempNoteState}
          onChange={dummyHandlerForNow}
          className="h-full w-full resize-none rounded-xl p-5 text-lg"
        ></textarea>

        {/* update client button */}
        <div className="bg-red-200 text-center">
          <button type="submit" className="bg-white p-1 rounded-xl">
            Update Client
          </button>
        </div>
      </form>
    </div>
  );
}

export default ClientInfo;
