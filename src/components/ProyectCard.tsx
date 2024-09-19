type ProyectCardProps = {
    repo: string;
    web: string;
    imgUrl: string;
    nameProject: string;
};

export default function ProyectCard({ repo, web, imgUrl, nameProject }: ProyectCardProps) {
    return (
        <div className="flex flex-col items-center">
            <div className="w-3/4">
                <img
                    src={imgUrl}
                    alt=""
                    className="rounded-3xl shadow-lg border-2 border-black inline-block transform transition-transform duration-300 hover:scale-105"
                />
                <h3 className="text-2xl mt-5 font-roboto font-bold">{nameProject}</h3>

                <div className="mt-5 space-x-8">
                    <a
                        className="border-2 rounded-xl inline-block border-black bg-light_dark p-3 transform transition-transform duration-300 hover:scale-125 text-primary font-bold font-roboto"
                        href={repo}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Repositório
                    </a>
                    <a
                        className="border-2 rounded-xl inline-block border-black bg-ocean p-3 transform transition-transform duration-300 hover:scale-125 text-primary font-bold font-roboto"
                        href={web}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Ver Demo
                    </a>
                </div>
            </div>
        </div>
    );
}
