import SocialNet from "./SocialNet";

export default function IntroSection() {
    return (
        <section className="flex flex-col-reverse md:flex-row md:items-center mt-10 gap-4 md:gap-9 px-4 ">
            <div>
                <h1 className="text-3xl md:text-5xl font-bold font-montserrat">
                    Hola, mi nombre es Alejandro y soy{" "}
                    <span className="text-dark_ocean font-black ">Desarrollador Web</span>
                </h1>
                <p className="text-xl mt-6 mb-6 font-roboto text-justify">
                    Hola, soy Alejandro Estrada Ponce. Estudiante de{" "}
                    <span className="text-dark_ocean font-bold">
                        Ingeniería en Sistemas Computacionales{" "}
                    </span>{" "}
                    apasionado por el desarrollo web. Siempre en busca de nuevas tecnologías y
                    desafíos para expandir mis habilidades.
                </p>

                <ul className="flex flex-col items-center mt-8 sm:mt-0 sm:flex-row gap-8">
                    <SocialNet
                        redUrl="https://github.com/AlexEP11"
                        icon="brand-github"
                        alt="GitHub de Alejandro"
                        label="GitHub"
                    />
                    <SocialNet
                        redUrl="https://www.linkedin.com/in/alexep11/"
                        icon="brand-linkedin"
                        alt="LinkedIn de Alejandro"
                        label="LinkedIn"
                    />

                    <SocialNet
                        redUrl="https://www.instagram.com/aleeps11/"
                        icon="brand-instagram"
                        alt="Instagram de Alejandro"
                        label="Instagram"
                    />
                </ul>
            </div>
            <img
                src="/foto-perfil.jpg"
                alt="Foto de Alejandro Estrada Ponce"
                className="w-1/2 max-w-xs rounded-full "
            />
        </section>
    );
}
