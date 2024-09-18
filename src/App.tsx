import AboutMe from "./components/AboutMe";
import IntroSection from "./components/IntroSection";
import Nav from "./components/Nav";
import Skills from "./components/Skills";

function App() {
    return (
        <>
            {" "}
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
            <Skills />
        </>
    );
}

export default App;
