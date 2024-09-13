import { Artes } from "@/components/Artes";
import Navbar from "@/components/Header";
import Header from "@/components/Header";
import Home from "@/components/Home";
import { Informatica } from "@/components/Informatica";
import { Matematica } from "@/components/Matematica";
import { Psico } from "@/components/Psico";
import React from "react";



function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Navbar/>
      <Home />
      {/* Projects Section */}
      <Informatica />
      <Matematica />
      <Psico />
      <Artes />
      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy;</p>
      </footer>
    </div>
  );
}

export default App;
