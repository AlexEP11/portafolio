import AcademicCards from "./AcademicCards";

export default function AcademicSection() {
    return (
        <section id="formation" className="bg-secundary py-8">
            <article className="container mx-auto px-7 max-w-7xl">
                <h2 className="text-center font-montserrat font-black text-primary text-3xl">
                    Formación Académica
                </h2>

                <div className="flex flex-col md:flex-row gap-6">
                    <AcademicCards
                        degree={"Técnico en Ofimática"}
                        duration={"2018 - 2021"}
                        imageUrl="cbta.jpg"
                        altDescription="Centro de Bachillerato Tecnológico Agropecuario"
                    />
                    <AcademicCards
                        degree={"Ingeniería en Sistemas Computacionales"}
                        duration={"2021- 2025"}
                        imageUrl="tec.png"
                        altDescription="Centro de Bachillerato Tecnológico Agropecuario"
                    />
                </div>
            </article>
        </section>
    );
}
