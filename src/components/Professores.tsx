import img1 from '../../public/imagem-informatica-basica-e-avancada.png'

const professores = [
    {
    id: 1,
    title: "Informática",
    description: "Professor Pedro Peres",
    imageUrl: "pedro.jpg",
    download: "https://api.whatsapp.com/send?phone=5575982782718&text=Ol%C3%A1%2C%20vim%20pelo%20site%20das%20oficinas.",
    },
    {
    id: 2,
    title: "Matemática",
    description: "Professor Francisco Xavier",
    imageUrl: "francisco.jpg",
    download: "https://api.whatsapp.com/send?phone=5575983116726&text=Ol%C3%A1%2C%20vim%20pelo%20site%20das%20oficinas.",
    },
    {
    id: 3,
    title: "Artes",
    description: "Professora Elizânia",
    imageUrl: "image3.jpg",
    download: "",
    },
    {
        id: 3,
        title: "Saude e Bem Estar",
        description: "Professora Anna Jéssica",
        imageUrl: "annaJessica.jpg",
        download: "https://api.whatsapp.com/send?phone=5575999137233&text=Ol%C3%A1%2C%20vim%20pelo%20site%20das%20oficinas.",
        },
];

export const Professores = () => (
    
    <section className="flex-grow bg-gradient-to-b from-gray-100 to-blue-700 py-8">
        <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">Professores</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {professores.map((project) => (
            <div
                key={project.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
            >
                <div className='flex justify-start items-center '>
                    <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-20 h-34 rounded-full mt-2 ml-2"
                    />
                    <h3 className="text-xl font-bold mb-2 ml-2 text-center">{project.title}</h3>
                </div>
                <div className="p-4">
                <p className="text-gray-700">{project.description}</p>
                <a href={project.download} ><button className=' mt-3 hover:bg-blue-500 p-2 rounded-md text-white bg-blue-700'>Entrar em contato!</button></a>
                </div>
            </div>
            ))}
        </div>
        </div>
    </section>
)