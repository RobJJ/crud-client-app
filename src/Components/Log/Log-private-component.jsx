import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
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
const privateClientDebitTemplate = {
  clientToDebit: "",
  // This is what a debit obj should look like
  debitInfo: {
    amount: "",
    date: "",
    id: "",
    note: "",
    sessions: "",
  },
};
//
function LogPrivate(params) {
  //
  const [privateClientDebit, setPrivateClientDebit] = useState(
    privateClientDebitTemplate
  );
  //
  const investigate = (e) => {
    e.preventDefault();
    // Everytime the select option changes...
    // Find id of client that is chosen
    const clientChosenId = e.target.value;
    // Return the object of that client using the id : if needed
    const findClient = clientTestArray.find(
      (client) => client.id === clientChosenId
    );
    setPrivateClientDebit({
      ...privateClientDebit,
      clientToDebit: clientChosenId,
    });
  };
  //
  const checkSituation = (e) => {
    e.preventDefault();
    console.log(privateClientDebit);
  };
  //
  return (
    <div className="flex gap-2 p-2">
      <div className="w-1/2 bg-gray-200 flex flex-col gap-2">
        <h2>Client:</h2>
        <button type="button" onClick={checkSituation} className="bg-white">
          Check situation
        </button>
      </div>

      <div className="w-1/2 bg-gray-200">
        <select
          onChange={investigate}
          id="clients"
          className="w-full text-center p-1"
        >
          {clientTestArray.map((client) => {
            return (
              <option key={client.id} value={client.id}>
                {client.name}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}

export default LogPrivate;
