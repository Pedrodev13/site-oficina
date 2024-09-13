const projects = [
    {
    id: 1,
    title: "Project 1",
    description: "A brief description of project one.",
    imageUrl: "https://via.placeholder.com/300",
    },
    {
    id: 2,
    title: "Project 2",
    description: "A brief description of project two.",
    imageUrl: "https://via.placeholder.com/300",
    },
    {
    id: 3,
    title: "Project 3",
    description: "A brief description of project three.",
    imageUrl: "https://via.placeholder.com/300",
    },
    {
    id: 4,
    title: "Project 4",
    description: "A brief description of project three.",
    imageUrl: "https://via.placeholder.com/300",
    },
    {
        id: 5,
        title: "Project 5",
        description: "A brief description of project three.",
        imageUrl: "https://via.placeholder.com/300",
        },
];

export const Psico = () => (
    
    <section className="flex-grow bg-gray-100 py-8">
        <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">Psicologia</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
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
                </div>
            </div>
            ))}
        </div>
        </div>
    </section>
)