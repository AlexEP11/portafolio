import IntroSection from "./components/IntroSection";
import Nav from "./components/Nav";

function App() {
    return (
        <>
            <header className="flex justify-between items-center mt-6">
                <div className="flex items-center gap-2">
                    <img
                        src="/pod-enorme.png"
                        alt="Logo de un robot pequeño"
                        className="max-w-14"
                    />
                    <h2 className="font-bold text-xl font-montserrat">Alejandro Estrada Ponce</h2>
                </div>

                <Nav />
            </header>

            <IntroSection />
        </>
    );
}

export default App;
