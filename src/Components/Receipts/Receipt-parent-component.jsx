import React, { useState } from "react";
import ReceiptListItem from "./Receipt-item-component";

const testItemsArray = [
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
];

function ReceiptList(params) {
  //
  const [items, setItems] = useState(testItemsArray);
  //
  return (
    <div className="w-1/2 h-1/2 bg-blue-200 flex flex-col gap-1 p-2 overflow-auto">
      {items.map((item) => (
        <ReceiptListItem itemObj={item} />
      ))}
    </div>
  );
}

export default ReceiptList;
