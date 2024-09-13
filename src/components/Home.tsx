import React from 'react';
import img from '../../public/Imagem_do_WhatsApp_de_2024-09-13_à_s__14.09.46_056d64e9-removebg-preview.png'

export default function Home() {
return (
    <section id="home" className="rounded-b-md h-[500px] bg-blue-700 flex items-center justify-center text-center">
    <div className="text-white font-montserrat">
        <img className='w-28 md:w-40 m-auto mb-28' src={img.src} alt="" />
        <h1 className="text-4xl md:text-6xl font-bold">Bem-vindo ao site das oficinas do CEJAAP</h1>
        <p className="mt-4 text-lg">Você verá aqui, projetos criados nas oficinas.</p>
    </div>
    </section>
);
}
