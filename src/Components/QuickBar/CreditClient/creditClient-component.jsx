import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
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
function CreditClient(params) {
  //
  const { clients, creditClient, setCreditClient, handleCredit } =
    useGlobalContext();
  //
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Dynamically looks for name and value pairing from input.
    // This methods reduces clutter in the form
    setCreditClient({
      ...creditClient,
      [name]: value,
    });
  };
  //
  //
  return (
    <form onSubmit={handleCredit} className="flex flex-col bg-blue-300 p-2">
      {/* CLIENT DIV */}
      <div className="flex text-center bg-blue-100 p-2">
        <label className="w-1/3 underline">Client:</label>
        <select
          id="clients"
          required
          value={creditClient.name}
          name="name"
          onChange={handleInputChange}
          className="w-full text-center p-1 mr-2"
        >
          <option hidden>Select client...</option>
          {clients.map((client) => {
            return (
              <option key={client.uid} value={client.name}>
                {client.name}
              </option>
            );
          })}
        </select>
      </div>
      {/* DATE DIV */}
      <div className="flex text-center bg-blue-100 p-2">
        <label className="w-1/3 underline">Date:</label>
        <input
          required
          type="date"
          value={creditClient.date}
          name="date"
          onChange={handleInputChange}
          className="w-full text-center p-1 mr-2"
        />
      </div>
      {/* NOTE DIV */}
      <div>
        <div className="flex text-center bg-blue-100 p-2">
          <label className="w-1/3 underline">Note:</label>
          <textarea
            required
            type="text"
            value={creditClient.note}
            name="note"
            onChange={handleInputChange}
            placeholder="Credit note..."
            className="w-full resize-none p-1 text-center mr-2"
            rows={2}
          ></textarea>
        </div>
      </div>
      {/* SUBMIT DIV */}
      <div>
        <div className="flex text-center bg-blue-100 p-1 justify-center">
          <button type="submit" className="bg-white p-2 rounded-xl">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default CreditClient;

//

// NOTES :
//
// 1) Might have to change the way the client select feature is implemented. At the moment it does like the auto popup window and lets you select.. This might not work very well for mobile... Test later.

// 2) Add SEO attributes to labels and inputs etc
