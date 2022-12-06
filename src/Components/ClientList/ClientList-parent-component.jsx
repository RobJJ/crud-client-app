import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../../Context-Reducer/Context";
import ClientListItem from "./ClientList-item-component";
//
//

function ClientList(params) {
  //
  const [filteredClients, setFilteredClients] = useState([]);
  const [searchedLetters, setSearchedLetters] = useState("");
  const { clients } = useGlobalContext();
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
    <div className="bg-green-200 w-full h-full flex flex-col overflow-auto p-5 pt-0">
      <section className=" flex justify-center bg-blue-800 p-5">
        <input
          type="search"
          placeholder="Search for client..."
          className="w-3/4 rounded-xl p-2 text-center text-lg"
          value={searchedLetters}
          onChange={(e) => {
            setSearchedLetters(e.target.value);
          }}
        />
      </section>

      <section className="bg-blue-800 overflow-auto h-full w-full flex flex-col gap-3 mb-2 items-center">
        {filteredClients.map((client) => (
          <ClientListItem key={client.uid} itemObj={client} />
        ))}
      </section>
    </div>
  );
}
//
export default ClientList;
