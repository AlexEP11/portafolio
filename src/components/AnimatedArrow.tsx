import { motion } from "framer-motion";

export default function AnimatedArrow() {
    return (
        <div className=" md:flex flex-col hidden md:items-center">
            <motion.div
                className="arrow"
                initial={{ y: -10 }} // Posición inicial
                animate={{ y: 10 }} // Posición final
                transition={{
                    repeat: Infinity, // Hace que se repita la animación
                    repeatType: "reverse", // Reversa la animación
                    duration: 1, // Duración de cada ciclo
                }}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="3"
                    stroke="currentColor"
                    className="w-6 h-6 text-black"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 19V6m-7 7l7-7 7 7" />
                </svg>
            </motion.div>
            <p className="mt-4 font-roboto font-bold">¡Aquí estoy!</p>
        </div>
    );
}
