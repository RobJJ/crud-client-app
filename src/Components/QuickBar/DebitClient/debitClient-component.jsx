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
    <form
      onSubmit={handleDebit}
      className="bg-blue-300 flex flex-col gap-1 w-full p-2"
    >
      {/* Client to debit */}
      <div className="flex text-center bg-blue-100 p-2">
        <label className="w-1/3 underline">Client</label>
        <select
          required
          id="clientList"
          value={debitClient.name}
          name="name"
          onChange={handleInputChange}
          className="w-full text-center p-1 "
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
      <div className="w-full flex bg-blue-100 p-2 text-center">
        <label className="w-1/3 underline">Date</label>
        <input
          required
          type="date"
          value={debitClient.date}
          name="date"
          onChange={handleInputChange}
          className="w-full p-1"
        />
      </div>
      {/* Amount of debit */}
      <div className="w-full flex bg-blue-100 p-2 text-center">
        <label className="w-1/3 underline">Amount</label>
        <input
          required
          type="text"
          value={debitClient.amount}
          name="amount"
          onChange={handleInputChange}
          placeholder="5M VND"
          className="w-full p-1"
        />
      </div>
      {/* Sessions added to client from debit */}
      <div className="w-full flex bg-blue-100 p-2 text-center">
        <label className="w-1/3 underline">Sessions</label>
        <input
          required
          type="number"
          value={debitClient.sessions}
          name="sessions"
          onChange={handleInputChange}
          placeholder="Debited sessions"
          className="w-full p-1"
        />
      </div>
      {/* Note of debit */}
      <div className="w-full flex bg-blue-100 p-2 text-center">
        <label className="w-1/3 underline">Note</label>
        <input
          required
          type="text"
          value={debitClient.note}
          name="note"
          onChange={handleInputChange}
          placeholder="Debit note..."
          className="w-full p-1"
        />
      </div>
      <div className="w-full flex bg-blue-100 p-2 justify-center">
        <button type="submit" className="bg-white p-1 rounded-xl">
          Debit Client
        </button>
      </div>
    </form>
  );
}

export default DebitClient;
