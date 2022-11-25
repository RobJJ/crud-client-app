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
const privateClientCreditTemplate = {
  clientName: "",
  clientUID: "",
  // This is what a credit obj should look like
  creditInfo: {
    date: "",
    id: "",
    note: "",
    sessions: 1,
  },
};
//
function LogPrivate(params) {
  //
  const [privateClientCredit, setPrivateClientCredit] = useState(
    privateClientCreditTemplate
  );
  //
  const investigate = (e) => {
    e.preventDefault();
    // Everytime the select option changes...
    const clientChosenId = e.target.value;
    const findClient = clientTestArray.find(
      (client) => client.id === clientChosenId
    );

    // Find id of client that is chosen
    // console.log("e target: ", e.target);
    // console.log("e target value: ", e.target.value);
    // console.log("client name: ", findClient.name);
    // // Return the object of that client using the id : if needed
    // // At the momement this is not needed.....
    setPrivateClientCredit({
      ...privateClientCredit,
      clientName: findClient.name,
      clientUID: clientChosenId,
    });
  };
  //
  const handlePrivateLogSubmit = (e) => {
    e.preventDefault();
    // console.log(privateClientCredit);
    setPrivateClientCredit({
      ...privateClientCredit,
      creditInfo: { ...privateClientCredit.creditInfo, id: uuidv4() },
    });
    // At this point the privateClientCredit is ready to be sent to the DB
  };
  //
  return (
    <div className="flex flex-col bg-blue-300 p-2">
      {/* CLIENT DIV */}
      <div className="flex text-center bg-blue-100 p-2">
        <label className="w-1/3 underline">Client:</label>
        <select
          onChange={investigate}
          id="clients"
          className="w-full text-center p-1 mr-2"
        >
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
      {/* DATE DIV */}
      <div className="flex text-center bg-blue-100 p-2">
        <label className="w-1/3 underline">Date:</label>
        <input
          type="date"
          onChange={(e) =>
            setPrivateClientCredit({
              ...privateClientCredit,
              creditInfo: {
                ...privateClientCredit.creditInfo,
                date: e.target.value,
              },
            })
          }
          className="w-full text-center p-1 mr-2"
        />
      </div>
      {/* NOTE DIV */}
      <div>
        <div className="flex text-center bg-blue-100 p-2">
          <label className="w-1/3 underline">Note:</label>
          <textarea
            onChange={(e) =>
              setPrivateClientCredit({
                ...privateClientCredit,
                creditInfo: {
                  ...privateClientCredit.creditInfo,
                  note: e.target.value,
                },
              })
            }
            className="w-full resize-none p-1 text-center mr-2"
            rows={2}
          ></textarea>
        </div>
      </div>
      {/* SUBMIT DIV */}
      <div>
        <div className="flex text-center bg-blue-100 p-1 justify-center">
          <button
            type="button"
            onClick={handlePrivateLogSubmit}
            className="bg-white p-2 rounded-xl"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default LogPrivate;

//

// NOTES :
//
// 1) Might have to change the way the client select feature is implemented. At the moment it does like the auto popup window and lets you select.. This might not work very well for mobile... Test later.

// 2) Add SEO attributes to labels and inputs etc
