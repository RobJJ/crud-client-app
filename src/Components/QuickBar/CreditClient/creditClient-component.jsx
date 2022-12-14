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
  console.log("QuickBar: Credit Client!");
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
    <div className="bg-blue-300 border-4 border-white rounded-xl max-w-lg w-full m-auto p-2">
      <form
        onSubmit={handleCredit}
        className="flex flex-col max-w-md w-full m-auto gap-2"
      >
        {/* CLIENT DIV */}
        <div className="">
          <select
            id="clients"
            required
            value={creditClient.name}
            name="name"
            onChange={handleInputChange}
            className="w-full text-center p-2 rounded-xl"
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
        <div className="">
          <input
            required
            type="date"
            value={creditClient.date}
            name="date"
            onChange={handleInputChange}
            className="w-full text-center p-2 rounded-xl"
          />
        </div>
        {/* NOTE DIV */}
        <div>
          <div className="">
            <input
              required
              type="text"
              value={creditClient.note}
              name="note"
              onChange={handleInputChange}
              placeholder="Credit note"
              className="w-full p-2 text-center rounded-xl"
            />
          </div>
        </div>
        {/* SUBMIT DIV */}

        <button
          type="submit"
          className="bg-green-500 text-white border-2 border-white rounded-xl w-1/3 m-auto"
        >
          Credit Client
        </button>
      </form>
    </div>
  );
}

export default CreditClient;

//

// NOTES :
//
// 1) Might have to change the way the client select feature is implemented. At the moment it does like the auto popup window and lets you select.. This might not work very well for mobile... Test later.

// 2) Add SEO attributes to labels and inputs etc
