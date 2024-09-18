export default function Nav() {
    return (
        <nav className="flex gap-10 ">
            <a
                href="/"
                className="hover:text-ocean font-bold transform transition-transform duration-300 hover:scale-125 font-montserrat"
            >
                Sobre Mí
            </a>
            <a
                href="/"
                className="hover:text-ocean font-bold transform transition-transform duration-300 hover:scale-125 font-montserrat"
            >
                Skills
            </a>
            <a
                href="/"
                className="hover:text-ocean font-bold transform transition-transform duration-300 hover:scale-125 font-montserrat"
            >
                Formación
            </a>
            <a
                href="/"
                className="hover:text-ocean font-bold transform transition-transform duration-300 hover:scale-125 font-montserrat"
            >
                Proyectos
            </a>
        </nav>
    );
}
