import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import HeroTop from "./components/HeroTop";
import DataContainer from "./components/Analytics";
import Transactions from "./components/TransactiontTable";

function App() {
  return (
    <div className="containers w-full">
      <Header />
      <HeroTop />
      <DataContainer />
      <Transactions />
    </div>
  );
}

export default App;
