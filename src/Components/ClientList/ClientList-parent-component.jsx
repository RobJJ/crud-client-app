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
    uid: 1,
  },
  {
    name: "Mai Jacobs",
    age: 28,
    country: "Netherlands",
    notes: "She has just run a long ass race and this text is longer",
    uid: 2,
  },
  {
    name: "Joe Soap",
    age: 24,
    country: "England",
    notes:
      "Random text that is very long so I want to see how this would wrap to a new line if that is needed",
    uid: 3,
  },
  {
    name: "Johno Potatoe",
    age: 44,
    country: "Spain",
    notes:
      "Random text that is very long so I want to see how this would wrap to a new line if that is needed",
    uid: 4,
  },
  {
    name: "Mark Shumaker",
    age: 55,
    country: "England",
    notes:
      "Random text that is very long so I want to see how this would wrap to a new line if that is needed",
    uid: 5,
  },
  {
    name: "Craig Poodle",
    age: 26,
    country: "Korea",
    notes:
      "Random text that is very long so I want to see how this would wrap to a new line if that is needed",
    uid: 6,
  },
  {
    name: "Dererk Toy",
    age: 65,
    country: "Vietnam",
    notes:
      "Random text that is very long so I want to see how this would wrap to a new line if that is needed",
    uid: 7,
  },
  {
    name: "Jamie Oraneg",
    age: 33,
    country: "South Africa",
    notes:
      "Random text that is very long so I want to see how this would wrap to a new line if that is needed",
    uid: 8,
  },
  {
    name: "Dennis Jackson",
    age: 42,
    country: "USA",
    notes:
      "Random text that is very long so I want to see how this would wrap to a new line if that is needed",
    uid: 9,
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
  // const handleTheFlip = (client) => {
  //   // console.log(`You have clicked ${client.name}`);
  //   setFlipState(!flipState);
  //   // setFlipClient()
  // };
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

      <section className="bg-orange-300 overflow-auto h-full w-full flex flex-col gap-2 p-5 mb-2 items-center">
        {clients.map((client) => (
          <ClientListItem itemObj={client} />
        ))}
      </section>
    </div>
  );
}
//
export default ClientList;
