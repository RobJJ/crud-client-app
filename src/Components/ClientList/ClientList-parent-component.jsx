import React, { useState, useEffect } from "react";
import ClientListItem from "./ClientList-item-component";
//
//
const testListClients = [
  {
    name: "Rob Johnsen",
    age: 31,
    country: "South Africa",
    notes: "He is a dope dudeee",
  },
  {
    name: "Mai Jacobs",
    age: 28,
    country: "Netherlands",
    notes: "She has just run a long ass race and this text is longer",
  },
  {
    name: "Joe Soap",
    age: 24,
    country: "England",
    notes:
      "Random text that is very long so I want to see how this would wrap to a new line if that is needed",
  },
  {
    name: "Joe Soap",
    age: 24,
    country: "England",
    notes:
      "Random text that is very long so I want to see how this would wrap to a new line if that is needed",
  },
  {
    name: "Joe Soap",
    age: 24,
    country: "England",
    notes:
      "Random text that is very long so I want to see how this would wrap to a new line if that is needed",
  },
  {
    name: "Joe Soap",
    age: 24,
    country: "England",
    notes:
      "Random text that is very long so I want to see how this would wrap to a new line if that is needed",
  },
  {
    name: "Joe Soap",
    age: 24,
    country: "England",
    notes:
      "Random text that is very long so I want to see how this would wrap to a new line if that is needed",
  },
  {
    name: "Joe Soap",
    age: 24,
    country: "England",
    notes:
      "Random text that is very long so I want to see how this would wrap to a new line if that is needed",
  },
  {
    name: "Joe Soap",
    age: 24,
    country: "England",
    notes:
      "Random text that is very long so I want to see how this would wrap to a new line if that is needed",
  },
  // {
  //   name: "Joe Soap",
  //   age: 24,
  //   country: "England",
  //   notes:
  //     "Random text that is very long so I want to see how this would wrap to a new line if that is needed",
  // },
  // {
  //   name: "Joe Soap",
  //   age: 24,
  //   country: "England",
  //   notes:
  //     "Random text that is very long so I want to see how this would wrap to a new line if that is needed",
  // },
  // {
  //   name: "Joe Soap",
  //   age: 24,
  //   country: "England",
  //   notes:
  //     "Random text that is very long so I want to see how this would wrap to a new line if that is needed",
  // },
  // {
  //   name: "Joe Soap",
  //   age: 24,
  //   country: "England",
  //   notes:
  //     "Random text that is very long so I want to see how this would wrap to a new line if that is needed",
  // },
];

function ClientList(params) {
  const [clients, setClients] = useState(testListClients);
  const [searchedLetters, setSearchedLetters] = useState("");
  const [flipState, setFlipState] = useState(false);
  const [flipClient, setFlipClient] = useState({});
  //
  // Filter the List of Client based on searched input letters
  useEffect(() => {
    // Filter the raw list of clients... set the state
    const filter = testListClients.filter((client) =>
      client.name.toLowerCase().includes(searchedLetters.toLowerCase())
    );
    setClients(filter);
  }, [searchedLetters]);
  //
  // This is the flip function you pass down to the child element card
  const handleTheFlip = (client) => {
    // console.log(`You have clicked ${client.name}`);
    setFlipState(!flipState);
    // setFlipClient()
  };
  //
  return (
    <div className="bg-green-200 h-full flex flex-col overflow-auto p-2 gap-2">
      <div className=" flex justify-center bg-orange-300 p-5">
        <input
          type="search"
          placeholder="Search for client..."
          className="w-3/4 rounded-xl p-2 text-center text-lg"
          value={searchedLetters}
          onChange={(e) => {
            setSearchedLetters(e.target.value);
          }}
        />
      </div>
      {/* THE FLIPPED CARD SYSTEM -- NOT NEEDED IN THIS POSITION ANYMORE */}
      {!flipState && (
        <section className="bg-orange-300 overflow-auto h-full w-full flex flex-col gap-2 p-5 mb-2 items-center">
          {clients.map((client) => (
            <ClientListItem
              itemObj={client}
              flipFunction={() => handleTheFlip(client)}
            />
          ))}
        </section>
      )}

      {flipState && (
        <div className="bg-purple-300 overflow-auto h-full w-full flex flex-col gap-2 p-2 ">
          THIS IS THE HIDDEN FLIP CARD THAT WILL BE SHOWN FOR EACH CLIENT
          <button type="button" onClick={handleTheFlip} className="bg-white">
            Flip
          </button>
        </div>
      )}
    </div>
  );
}
//
export default ClientList;
