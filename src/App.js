import React from "react";
//
import ReceiptList from "./Components/Receipts/Receipt-parent-component";
import AddClient from "./Components/AddClient/AddClient-component";
import Navigation from "./Components/Navigation/Navigation-parent-component";

function App() {
  return (
    <div className="w-screen h-screen bg-blue-100 flex justify-center items-center">
      <Navigation />
    </div>
  );
}

export default App;
