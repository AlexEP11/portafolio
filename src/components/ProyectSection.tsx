import ProyectCard from "./ProyectCard";

export default function ProyectSection() {
    return (
        <main
            id="proyects"
            className=" container mx-auto max-w-7xl px-7 mt-9  flex flex-col gap-20 pb-7"
        >
            <h2 className="text-center font-montserrat font-black text-3xl">Proyectos</h2>
            <ProyectCard
                repo="https://github.com/AlexEP11/encriptador-alura"
                web="https://alexep11.github.io/encriptador-alura/"
                imgUrl="/encriptador.png"
                nameProject="Encriptador de Texto"
            />
        </main>
    );
}
