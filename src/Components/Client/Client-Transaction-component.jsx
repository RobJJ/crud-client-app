import React, { useState, useRef } from "react";
import FormRow from "../FormRow/FormRow-component";
import { useGlobalContext } from "../../Context-Reducer/Context";

//
//
//
function ClientTransaction(params) {
  // Transaction type is "" false on load in
  const [transactionType, setTransactionType] = useState("");
  //
  const {
    clients,
    handleDebit,
    debitClient,
    setDebitClient,
    creditClient,
    setCreditClient,
    handleCredit,
  } = useGlobalContext();
  //
  //
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Dynamically looks for name and value pairing from input.
    // This methods reduces clutter in the form
    if (transactionType === "debit") {
      setDebitClient({
        ...debitClient,
        [name]: value,
      });
    } else if (transactionType === "credit") {
      setCreditClient({
        ...creditClient,
        [name]: value,
      });
    }
  };
  //
  return (
    <div className="bg-blue-800 w-full h-full p-5 flex justify-center">
      <form
        onSubmit={transactionType === "debit" ? handleDebit : handleCredit}
        className="bg-blue-800 max-w-md w-full h-full flex flex-col gap-2 p-2 "
      >
        <section className="bg-blue-800 text-blue-800 font-bold text-center flex p-2 gap-1 text-xl">
          <div
            className={`w-1/2 hover:cursor-pointer rounded-xl ${
              transactionType === "debit" ? "bg-blue-200" : "bg-white"
            }`}
            onClick={() => setTransactionType("debit")}
          >
            Debit
          </div>
          <div
            className={`w-1/2 hover:cursor-pointer rounded-xl ${
              transactionType === "credit" ? "bg-blue-200" : "bg-white"
            }`}
            onClick={() => setTransactionType("credit")}
          >
            Credit
          </div>
        </section>
        {/* DEBIT SECTION */}
        {transactionType === "debit" && (
          <section className="bg-blue-300 rounded-xl border-4 border-white p-1 flex flex-col gap-1">
            {/* select client to debit / credit */}
            <div className="flex flex-col p-2 gap-1">
              <label className=" pl-2">Client</label>
              <select
                required
                id="clientList"
                value={debitClient.name}
                name="name"
                onChange={handleInputChange}
                className="w-full text-center p-1 rounded-lg"
              >
                <option value="Select client..." hidden>
                  Select client...
                </option>
                {clients.map((client) => {
                  return (
                    <option key={client.uid} value={client.name}>
                      {client.name}
                    </option>
                  );
                })}
              </select>
            </div>
            {/* date */}

            <FormRow
              type="date"
              name="date"
              labelText="Date"
              value={debitClient.date}
              handleChange={handleInputChange}
            />
            <FormRow
              type="text"
              name="amount"
              labelText="Amount"
              value={debitClient.amount}
              handleChange={handleInputChange}
            />
            <FormRow
              type="text"
              name="sessions"
              labelText="Sessions"
              value={debitClient.sessions}
              handleChange={handleInputChange}
            />
            <FormRow
              type="text"
              name="note"
              labelText="Note"
              value={debitClient.note}
              handleChange={handleInputChange}
            />
          </section>
        )}
        {/* CREDIT SECTION */}
        {transactionType === "credit" && (
          <section className="bg-blue-300 border-4 border-white rounded-xl p-1 flex flex-col gap-1">
            {/* select client to debit / credit */}
            <div className="flex flex-col  p-2 gap-1">
              <label className=" pl-2">Client</label>
              <select
                required
                id="clientList"
                value={creditClient.name}
                name="name"
                onChange={handleInputChange}
                className="w-full text-center p-1 rounded-lg"
              >
                <option value="Select client..." hidden>
                  Select client...
                </option>
                {clients.map((client) => {
                  return (
                    <option key={client.uid} value={client.name}>
                      {client.name}
                    </option>
                  );
                })}
              </select>
            </div>
            {/* date */}
            <FormRow
              type="date"
              name="date"
              labelText="Date"
              value={creditClient.date}
              handleChange={handleInputChange}
            />
            <FormRow
              type="text"
              name="note"
              labelText="Note"
              value={creditClient.note}
              handleChange={handleInputChange}
            />
          </section>
        )}
        {/* submit section */}
        {transactionType && (
          <section className="bg-blue-800 p-1">
            <div className="bg-blue-800 text-center ">
              <button
                type="submit"
                className="bg-green-500 text-white font-bold border-2 border-white p-1 rounded-xl"
              >
                {transactionType === "debit" ? "Debit Client" : "Credit Client"}
              </button>
            </div>
          </section>
        )}
      </form>
    </div>
  );
}

export default ClientTransaction;

// give the form width a max size.. and then make it cover full space if able
// with the max width set.. it will only be that big and then shrink as screen size decreases... set max width to a size... but also set w-full

// DEBIT
// name: "",
//   date: "",
//   amount: "",
//   sessions: "",
//   note: "",
//   uid: "",
