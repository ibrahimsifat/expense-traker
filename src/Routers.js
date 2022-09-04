import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/allTransactions" element={<Transactions />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
