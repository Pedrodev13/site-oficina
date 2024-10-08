'use client'

import React, { useState } from 'react';
import img from '../../public/Imagem_do_WhatsApp_de_2024-09-13_à_s__14.09.46_056d64e9-removebg-preview.png'

export default function Navbar() {
const [isOpen, setIsOpen] = useState(false);

return (
    <nav className="bg-gray-800 p-4 font-montserrat-bold">
    <div className="container mx-auto flex justify-around items-center text-center">
        <div className="md:text-xl flex  space-x-6">
        <a href="#home" className="text-white">Home</a>
        <a href="#projects" className="text-white">Projetos</a>
        <a href="#contato" className="text-white">Contato</a>
        </div>
    </div>
    </nav>
);
}
