import React from 'react';

export default function Home() {
return (
    <section id="home" className="h-[500px] bg-blue-500 flex items-center justify-center text-center">
    <div className="text-white font-montserrat">
        <h1 className="text-4xl md:text-6xl font-bold">Bem-vindo ao site das oficinas do CEJAAP</h1>
        <p className="mt-4 text-lg">Você verá aqui, projetos criados nas oficinas de informática e matemática.</p>
    </div>
    </section>
);
}
