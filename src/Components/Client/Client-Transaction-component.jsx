import React, { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
//
//
const transactionTemplate = {
  type: "",
  date: "",
  amount: "",
  sessions: 0,
  notes: "",
  id: "",
};
//
function ClientTransaction(params) {
  //
  const [transaction, setTransaction] = useState(transactionTemplate);
  const formRef = useRef();
  //
  const handleTransactionChoice = (e) => {
    // set the transaction type
    setTransaction({ ...transaction, type: e.target.dataset.tag });
    // hide amount if credit is picked

    //  make current button active with adding a style of some sort
    e.target.classList.add("bg-slate-300");
    // show the form to user
    formRef.current.classList.remove("opacity-25");
  };
  //
  const handleTransactionSubmit = (e) => {
    e.preventDefault();
    // setTransaction((prev) => {
    //   return {
    //     ...prev,
    //     id: uuidv4(),
    //   };
    // });
    console.log(transaction);
  };
  //
  return (
    <div className="bg-red-200 w-full h-full flex flex-col gap-2 p-2">
      {/* button selector.. dictates a 'type' of transaction */}
      <section className="bg-green-200 flex gap-2 text-center p-2">
        <div className="w-1/2 bg-green-300 flex justify-center p-2">
          <button
            type="button"
            onClick={handleTransactionChoice}
            data-tag="debit"
            className="bg-white p-2 text-xl underline rounded-xl"
          >
            DEBIT
          </button>
        </div>
        <div className="w-1/2 bg-green-300 flex justify-center p-2">
          <button
            type="button"
            onClick={handleTransactionChoice}
            data-tag="credit"
            className="bg-white p-2 text-xl underline rounded-xl"
          >
            CREDIT
          </button>
        </div>
      </section>
      {/* form input section. fade certain inputs based on user choice */}

      <section className="bg-green-200 h-full w-full flex p-10 flex-col gap-2">
        <h2 className="bg-green-300 text-center text-lg">
          Complete the form to{" "}
          <span className="underline">{transaction.type}</span> the client
        </h2>
        <form
          onSubmit={handleTransactionSubmit}
          ref={formRef}
          className="bg-green-300 w-full h-full p-5 flex flex-col gap-2 text-center rounded-xl border border-black opacity-25"
        >
          <div className="bg-purple-200 p-2 flex w-full">
            <label className="w-1/2">DATE:</label>
            <input className="w-1/2 p-2" />
          </div>
          <div className="bg-purple-200 p-2 flex w-full">
            <label className="w-1/2">AMOUNT:</label>
            <input className="w-1/2 p-2" />
          </div>
          <div className="bg-purple-200 p-2 flex w-full">
            <label className="w-1/2">SESSIONS:</label>
            <input className="w-1/2 p-2" />
          </div>
          <div className="bg-purple-200 p-2 flex w-full">
            <label className="w-1/2">NOTES:</label>
            <input className="w-1/2 p-2" />
          </div>
          <div className="bg-purple-200 p-2 flex justify-center">
            <button type="submit" className="bg-white p-2 rounded-xl">
              SUBMIT
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default ClientTransaction;
