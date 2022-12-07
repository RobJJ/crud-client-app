import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../../Context-Reducer/Context";
import ClientListItem from "./ClientList-item-component";
//
import {
  FaUserCheck,
  FaAngleDoubleUp,
  FaAngleDoubleDown,
} from "react-icons/fa";
//

function ClientList(params) {
  //
  const [filteredClients, setFilteredClients] = useState([]);
  const [searchedLetters, setSearchedLetters] = useState("");
  const {
    clients,
    clientAddedRef,
    clientTransactionDebit,
    clientTransactionCredit,
  } = useGlobalContext();
  //
  // Filter the List of Client based on searched input letters
  useEffect(() => {
    // Filter the raw list of clients... set the state
    const filter = clients.filter((client) =>
      client.name.toLowerCase().includes(searchedLetters.toLowerCase())
    );
    setFilteredClients(filter);
  }, [searchedLetters, clients]);
  //
  //
  return (
    <div className="bg-blue-800 w-full h-full flex flex-col overflow-auto p-5 pt-0">
      <section className=" flex justify-center items-center bg-blue-800 p-5 border-l-4 border-r-4 border-white relative">
        <input
          type="search"
          placeholder="Search for client..."
          className="w-3/4 rounded-xl p-2 text-center text-lg"
          value={searchedLetters}
          onChange={(e) => {
            setSearchedLetters(e.target.value);
          }}
        />
        <div ref={clientAddedRef} className=" hidden absolute right-10">
          <FaUserCheck className="text-green-500 text-4xl" />
        </div>
        <div ref={clientTransactionDebit} className="hidden absolute right-12">
          <FaAngleDoubleUp className="text-3xl text-green-500" />
        </div>
        <div ref={clientTransactionCredit} className="hidden absolute right-12">
          <FaAngleDoubleDown className="text-3xl text-red-500" />
        </div>
      </section>

      <section className="bg-blue-800 overflow-auto h-full w-full flex flex-col gap-3 mb-2 items-center border-l-4 border-r-4 border-b-4 border-white rounded-b-xl">
        {filteredClients.map((client) => (
          <ClientListItem key={client.uid} itemObj={client} />
        ))}
      </section>
    </div>
  );
}
//
export default ClientList;
