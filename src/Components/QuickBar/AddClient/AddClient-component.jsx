import React, { useRef } from "react";
//
//
function AddClient(params) {
  //
  const addClientForm = useRef();
  //
  const handleClientExpand = () => {
    if (addClientForm.current.classList.contains("hidden")) {
      addClientForm.current.classList.remove("hidden");
    } else {
      addClientForm.current.classList.add("hidden");
    }
  };
  //
  const handleClientFormSubmit = (e) => {
    e.preventDefault();
    addClientForm.current.classList.add("hidden");
  };
  //
  return (
    <div className=" flex flex-col">
      <div className="w-full bg-red-200 flex flex-col">
        <h2
          onClick={handleClientExpand}
          className="w-full p-2 text-center underline font-bold"
        >
          ADD CLIENT
        </h2>
        <form
          onSubmit={handleClientFormSubmit}
          ref={addClientForm}
          className="flex flex-col gap-2 text-center hidden"
        >
          <div>
            <input
              type="text"
              placeholder="Name"
              className="w-2/3 rounded-xl p-2 text-center"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Number"
              className="w-2/3 rounded-xl p-2 text-center"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Email"
              className="w-2/3 rounded-xl p-2 text-center"
            />
          </div>
          <div>
            <textarea
              type="text"
              placeholder="Initial Note"
              className="w-2/3 rounded-xl p-2 text-center resize-none"
            />
          </div>
          <button
            type="submit"
            className="bg-red-400 text-white w-1/3 rounded-xl m-auto"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddClient;
