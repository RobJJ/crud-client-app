import React from "react";
//
const clientTestArray = [
  { name: "Rob Johnsen", id: "1" },
  { name: "Mai Jacobs", id: "2" },
  { name: "Tom Cruise", id: "3" },
  { name: "Joe Soap", id: "4" },
  { name: "Tim Burton", id: "5" },
  { name: "Mike Pooperson", id: "6" },
  { name: "Jordy Johnson", id: "7" },
  { name: "Bill Morrison", id: "8" },
];
//

function DebitClient(params) {
  return (
    <div className="bg-blue-300 flex flex-col gap-1 w-full p-2">
      <div className="flex text-center bg-blue-100 p-2">
        <label className="w-1/3 underline">Client</label>
        <select id="clients" className="w-full text-center p-1 ">
          <option hidden>Select client...</option>
          {clientTestArray.map((client) => {
            return (
              <option key={client.id} value={client.id}>
                {client.name}
              </option>
            );
          })}
        </select>
      </div>
      <div className="w-full flex bg-blue-100 p-2 text-center">
        <label className="w-1/3 underline">Date</label>
        <input type="text" className="w-full p-1" />
      </div>
      <div className="w-full flex bg-blue-100 p-2 text-center">
        <label className="w-1/3 underline">Amount</label>
        <input type="text" className="w-full p-1" />
      </div>
      <div className="w-full flex bg-blue-100 p-2 text-center">
        <label className="w-1/3 underline">Sessions</label>
        <input type="text" className="w-full p-1" />
      </div>
      <div className="w-full flex bg-blue-100 p-2 text-center">
        <label className="w-1/3 underline">Note</label>
        <input type="text" className="w-full p-1" />
      </div>
      <div className="w-full flex bg-blue-100 p-2 justify-center">
        <button type="button" className="bg-white p-1 rounded-xl">
          Debit Client
        </button>
      </div>
    </div>
  );
}

export default DebitClient;
