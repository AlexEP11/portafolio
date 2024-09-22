import AboutMe from "./components/AboutMe";
import AcademicSection from "./components/AcademicSection";
import ContactSection from "./components/ContactSection";
import IntroSection from "./components/IntroSection";
import Nav from "./components/Nav";
import ProyectSection from "./components/ProyectSection";
import SkillsSection from "./components/SkillsSection";
import { ToastContainer } from "react-toastify";

function App() {
    return (
        <>
            <div className="container mx-auto max-w-7xl px-4">
                <header className="flex lg:justify-between md:justify-center items-center mt-6">
                    <div className="flex items-center gap-2">
                        <img
                            src="/pod-enorme.png"
                            alt="Logo de un robot pequeño"
                            className="max-w-14"
                        />
                        <h2 className="font-bold text-xl font-montserrat">
                            Alejandro Estrada Ponce
                        </h2>
                    </div>

                    <Nav />
                </header>
                <IntroSection />
            </div>
            <AboutMe />
            <SkillsSection />
            <AcademicSection />
            <ProyectSection />
            <ContactSection />

            <footer className="container max-w-7xl px-7 mx-auto bg-primary py-3">
                <p className="font-roboto font-bold text-center">
                    Desarrollado por{" "}
                    <span className="text-ocean font-bold">Alejandro Estrada Ponce</span> &copy;
                </p>
            </footer>

            <ToastContainer />
        </>
    );
}

export default App;
