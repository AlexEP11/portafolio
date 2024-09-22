import ContactForm from "./ContactForm";

export default function ContactSection() {
    return (
        <section id="contact" className="bg-secundary py-8">
            <div className="container mx-auto px-7 max-w-7xl">
                <h2 className=" text-center font-montserrat font-black text-3xl text-primary">
                    Contactame
                </h2>

                <div className="mt-10 flex gap-12">
                    <img
                        src="/alex-vert.jpg"
                        alt="Imagen de Alejandro"
                        className="hidden md:w-2/5 lg:flex rounded-3xl max-h-[600px]"
                    />
                    <div className="w-full">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    );
}
