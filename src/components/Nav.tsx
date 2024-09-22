export default function Nav() {
    return (
        <nav className=" gap-10 hidden lg:flex">
            <a
                href="#about"
                className="hover:text-ocean font-bold transform transition-transform duration-300 hover:scale-125 font-montserrat"
            >
                Sobre Mí
            </a>
            <a
                href="#skills"
                className="hover:text-ocean font-bold transform transition-transform duration-300 hover:scale-125 font-montserrat"
            >
                Skills
            </a>
            <a
                href="#formation"
                className="hover:text-ocean font-bold transform transition-transform duration-300 hover:scale-125 font-montserrat"
            >
                Formación
            </a>
            <a
                href="#proyects"
                className="hover:text-ocean font-bold transform transition-transform duration-300 hover:scale-125 font-montserrat"
            >
                Proyectos
            </a>
            <a
                href="#contact"
                className="hover:text-ocean font-bold transform transition-transform duration-300 hover:scale-125 font-montserrat"
            >
                Contactame
            </a>
        </nav>
    );
}
