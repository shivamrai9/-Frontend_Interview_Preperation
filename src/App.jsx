import { useState } from "react";
import "./App.css";
import CardDemo from "./components/examples/CardDemo";
import TabForm from "./components/ui/TabForm/TabForm";
import { Outlet } from "react-router-dom";
import Navbar from "./components/examples/Navbar";

function App() {
  return (
    <main className="min-h-screen bg-gray-900 text-white ">

      <Navbar />
      <div className="max-w-7xl mx-auto py-3 h-[calc(100vh-60px)] overflow-y-auto p-3">

      <Outlet />
      </ div>
    </main>
  );
}

export default App;
