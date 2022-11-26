import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route } from "react-router-dom";
//
// Components

import HomePage from "./Pages/Home-page";
import LandingPage from "./Pages/Landing-page";
import HomeHome from "./SubPages/Home-home";
import Client from "./Components/Client/Client-component";
//

function App() {
  return (
    <div className="w-screen h-screen bg-blue-100 flex">
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/home" element={<HomePage />}>
          <Route index element={<HomeHome />} />
          <Route path="client/:clientId" element={<Client />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

// Use the 'exact' param for precise matching for routes
//
