import React from "react";
//
import ReceiptList from "./Components/Receipts/Receipt-parent-component";
import AddClient from "./Components/AddClient/AddClient-component";

function App() {
  return (
    <div className="w-screen h-screen bg-blue-100 flex justify-center items-center">
      <AddClient></AddClient>
    </div>
  );
}

export default App;
