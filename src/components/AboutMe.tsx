export default function AboutMe() {
    return (
        <section id="about" className="bg-secundary mt-9 py-16">
            <div className="container mx-auto max-w-7xl px-7">
                <h2 className="font-black font-montserrat text-dark_ocean text-3xl mb-4 text-center md:text-start">
                    Sobre Mi
                </h2>

                <article className="flex flex-col md:flex-row text-justify ">
                    <div className="lg:w-4/5 md:text-justify">
                        <p className="text-xl font-roboto mb-4">
                            ¡Hola! Soy Alejandro Estrada Ponce, estudiante de Ingeniería en Sistemas
                            Computacionales con una pasión creciente por el desarrollo web. Aunque
                            actualmente no tengo experiencia laboral formal, he estado trabajando en
                            pequeños proyectos que me han permitido explorar y aplicar tecnologías
                            como React, HTML, CSS y JavaScript.
                        </p>
                        <p className="text-xl font-roboto">
                            Soy una persona empática y tolerante, comprometido con el aprendizaje
                            constante y siempre busco hacer las cosas de la mejor manera posible.
                            Estoy emocionado por seguir aprendiendo y creciendo en el campo del
                            desarrollo web, enfrentando nuevos desafíos y mejorando mis habilidades
                            para contribuir positivamente al mundo digital.
                        </p>
                    </div>
                </article>
            </div>
        </section>
    );
}
