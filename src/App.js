import React from "react";
// Components
import ReceiptList from "./Components/Receipts/Receipt-parent-component";
import AddClient from "./Components/AddClient/AddClient-component";
import Navigation from "./Components/Navigation/Navigation-parent-component";
import Log from "./Components/Log/Log-parent-component";
import HomePage from "./Pages/Home-page";
//

function App() {
  return (
    <div className="w-screen h-screen bg-blue-100 flex justify-center items-center">
      <HomePage />
    </div>
  );
}

export default App;
