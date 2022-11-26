import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Components
import HomePage from "./Pages/Home-page";
//

function App() {
  return (
    <div className="w-screen h-screen bg-blue-100 flex">
      <HomePage />
    </div>
  );
}

export default App;
