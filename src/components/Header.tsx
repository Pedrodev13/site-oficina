'use client'

import React, { useState } from 'react';
import img from '../../public/Imagem_do_WhatsApp_de_2024-09-13_à_s__14.09.46_056d64e9-removebg-preview.png'

export default function Navbar() {
const [isOpen, setIsOpen] = useState(false);

return (
    <nav className="bg-gray-800 p-4 font-montserrat-bold">
    <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
            <img className='w-16 mx-10' src={img.src} alt="" />
        </div>
        <div className="hidden md:text-xl md:flex space-x-6">
        <a href="#home" className="text-white">Home</a>
        <a href="#projects" className="text-white">Projetos</a>
        <a href="#contact" className="text-white">Contato</a>
        </div>
        <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            ☰
        </button>
        </div>
    </div>
    {isOpen && (
        <div className="md:hidden mt-4 space-y-2">
        <a href="#home" className="block text-white">Home</a>
        <a href="#projects" className="block text-white">Projetos</a>
        <a href="#contact" className="block text-white">Contato</a>
        </div>
    )}
    </nav>
);
}
