import Navbar from "@/components/Header";
import Header from "@/components/Header";
import Home from "@/components/Home";
import { Informatica } from "@/components/Informatica";
import { Matematica } from "@/components/Matematica";
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
      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; 2024 Meus Projetos. Criado por Pedro Peres, professor de informática.</p>
      </footer>
    </div>
  );
}

export default App;
