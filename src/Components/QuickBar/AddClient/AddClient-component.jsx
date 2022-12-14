import React from "react";
import { useGlobalContext } from "../../../Context-Reducer/Context";
//
//
function AddClient(params) {
  //
  console.log("QuickBar: Add Client!");
  // newClient is an object with all the client properties
  const { newClient, setNewClient, submitNewClient } = useGlobalContext();
  //
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Dynamically looks for name and value pairing from input.
    // This methods reduces clutter in the form
    setNewClient({
      ...newClient,
      [name]: value,
    });
  };
  //
  return (
    <div className=" flex flex-col">
      <div className="max-w-lg w-full m-auto bg-blue-300 border-4 border-white rounded-xl flex flex-col p-2">
        <form
          onSubmit={submitNewClient}
          className="flex flex-col w-full max-w-md gap-2 text-center m-auto"
        >
          <div>
            <input
              required
              type="text"
              name="name"
              placeholder="Name"
              value={newClient.name}
              onChange={handleInputChange}
              className="w-full rounded-xl p-2 text-center"
            />
          </div>
          <div>
            <input
              type="text"
              name="contact"
              placeholder="Contact"
              value={newClient.contact}
              onChange={handleInputChange}
              className="w-full rounded-xl p-2 text-center"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={newClient.email}
              onChange={handleInputChange}
              className="w-full rounded-xl p-2 text-center"
            />
          </div>
          <div>
            <textarea
              type="text"
              name="notes"
              placeholder="Initial Note"
              value={newClient.notes}
              onChange={handleInputChange}
              className="w-full rounded-xl p-2 text-center resize-none"
            />
          </div>
          <button
            type="submit"
            className="bg-green-500 text-white w-1/3 rounded-xl m-auto border-2 border-white"
          >
            Add Client
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddClient;

// <h2
//   onClick={handleClientExpand}
//   className="w-full p-2 text-center underline font-bold"
// >
//   ADD CLIENT
// </h2>;
