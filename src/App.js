import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route } from "react-router-dom";
//
// Components

import HomePage from "./Pages/Home-page";
import LandingPage from "./Pages/Landing-page";
import HomeHome from "./SubPages/Home-home";
import HomeClient from "./SubPages/Home-client";
import ClientInfo from "./Components/Client/Client-Info-component";
import ClientReceipts from "./Components/Client/Client-Receipts-component";
import ClientTransaction from "./Components/Client/Client-Transaction-component";
//

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<HomePage />}>
        <Route index element={<HomeHome />} />
        <Route path="client/:clientId" element={<HomeClient />}>
          <Route index element={<ClientInfo />} />
          <Route path="receipts" element={<ClientReceipts />} />
          <Route path="transaction" element={<ClientTransaction />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;

// Use the 'exact' param for precise matching for routes
//
