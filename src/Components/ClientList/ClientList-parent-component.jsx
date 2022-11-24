import React, { useState } from "react";
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
  //
  return (
    <div className="bg-green-200 h-full flex flex-col overflow-auto">
      <h2 className="underline text-center p-2 font-bold">CLIENT LIST</h2>
      <section className="overflow-auto h-full w-full flex flex-col gap-2 p-2 ">
        {clients.map((client) => (
          <ClientListItem itemObj={client} />
        ))}
      </section>
    </div>
  );
}
//
export default ClientList;
