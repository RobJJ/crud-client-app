import React, { useState } from "react";
import { useGlobalContext } from "../../../Context-Reducer/Context";
//
// const clientTestArray = [
//   { name: "Rob Johnsen", id: "1" },
//   { name: "Mai Jacobs", id: "2" },
//   { name: "Tom Cruise", id: "3" },
//   { name: "Joe Soap", id: "4" },
//   { name: "Tim Burton", id: "5" },
//   { name: "Mike Pooperson", id: "6" },
//   { name: "Jordy Johnson", id: "7" },
//   { name: "Bill Morrison", id: "8" },
// ];
//

//

function DebitClient(params) {
  const { clients, handleDebit, debitClient, setDebitClient } =
    useGlobalContext();
  //
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Dynamically looks for name and value pairing from input.
    // This methods reduces clutter in the form
    setDebitClient({
      ...debitClient,
      [name]: value,
    });
  };
  //
  //
  return (
    <div className="bg-blue-300 border-4 border-white rounded-xl max-w-lg w-full m-auto p-2">
      <form
        onSubmit={handleDebit}
        className="flex flex-col max-w-md w-full gap-2 m-auto"
      >
        {/* Client to debit */}
        <div className="">
          <select
            required
            id="clientList"
            value={debitClient.name}
            name="name"
            onChange={handleInputChange}
            className="w-full text-center p-2 rounded-xl"
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
        {/* Date of debit */}
        <div className="">
          <input
            required
            type="date"
            value={debitClient.date}
            name="date"
            onChange={handleInputChange}
            className="w-full p-2 rounded-xl text-center"
          />
        </div>
        {/* Amount of debit */}
        <div className="">
          <input
            required
            type="text"
            value={debitClient.amount}
            name="amount"
            onChange={handleInputChange}
            placeholder="Amount: 5M VND"
            className="w-full p-2 text-center rounded-xl"
          />
        </div>
        {/* Sessions added to client from debit */}
        <div className="">
          <input
            required
            type="number"
            value={debitClient.sessions}
            name="sessions"
            onChange={handleInputChange}
            placeholder="Sessions bought"
            className="w-full p-2 rounded-xl text-center"
          />
        </div>
        {/* Note of debit */}
        <div className="">
          <input
            required
            type="text"
            value={debitClient.note}
            name="note"
            onChange={handleInputChange}
            placeholder="Debit note"
            className="w-full p-2 text-center rounded-xl"
          />
        </div>

        <button
          type="submit"
          className="bg-green-500 border-2 border-white text-white w-1/3 m-auto rounded-xl"
        >
          Debit Client
        </button>
      </form>
    </div>
  );
}

export default DebitClient;
