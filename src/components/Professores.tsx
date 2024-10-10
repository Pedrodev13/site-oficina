import img1 from '../../public/imagem-informatica-basica-e-avancada.png'

const professores = [
    {
    id: 1,
    title: "Informática - Pedro Peres",
    description: "A brief description of project one.",
    imageUrl: "imagem-informatica-basica-e-avancada.png",
    download: "imagem-informatica-basica-e-avancada.png",
    },
    {
    id: 2,
    title: "Matemática - Francisco Sena",
    description: "A brief description of project two.",
    imageUrl: "image2.jpg",
    download: "image2.jpg",
    },
    {
    id: 3,
    title: "Artes - ELizânia",
    description: "A brief description of project three.",
    imageUrl: "image3.jpg",
    download: "",
    },
    {
        id: 3,
        title: "Saúde e Bem Estar - Anna Jéssica",
        description: "A brief description of project three.",
        imageUrl: "image3.jpg",
        download: "",
        },
];

export const Professores = () => (
    
    <section className="flex-grow bg-gray-100 py-8">
        <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">Professores</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {professores.map((project) => (
            <div
                key={project.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
            >
                <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover"
                />
                <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-700">{project.description}</p>
                <a href='' ><button className='mt-3 hover:bg-blue-500 p-2 rounded-md text-white bg-blue-700'>Entrar em contato!</button></a>
                </div>
            </div>
            ))}
        </div>
        </div>
    </section>
)