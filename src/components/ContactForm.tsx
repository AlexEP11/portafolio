import { useForm } from "react-hook-form";
import { ContactPerson } from "../types";
import ErrorForm from "./ErrorForm";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactForm() {
    const form = useRef<HTMLFormElement | null>(null);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ContactPerson>();

    const contactPerson = async () => {
        try {
            await emailjs.sendForm(
                import.meta.env.VITE_SERVICE_ID,
                import.meta.env.VITE_TEMPLATE_ID,
                form.current!,
                {
                    publicKey: import.meta.env.VITE_PUBLIC_ID,
                }
            );

            toast.success("Mensaje enviado con éxito!");
            reset();
        } catch (error) {
            toast.error("Ocurrió un error al enviar el mensaje. Intenta nuevamente más tarde.");
        }
    };

    return (
        <form
            ref={form}
            noValidate
            onSubmit={handleSubmit(contactPerson)}
            className="flex flex-col gap-8"
        >
            <div className="flex flex-col gap-2">
                <label htmlFor="name" className="font-roboto font-bold text-xl text-primary">
                    Nombre:
                </label>
                <input
                    id="name"
                    className="w-full p-3 border border-gray-100 rounded-lg"
                    type="text"
                    placeholder="Ej: Carlos Eduardo"
                    {...register("name", {
                        required: "El nombre es obligatorio",
                    })}
                />
                {errors.name && <ErrorForm>{errors.name.message}</ErrorForm>}
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="email" className="font-roboto font-bold text-xl text-primary">
                    E-mail:
                </label>
                <input
                    id="email"
                    className="w-full p-3 border border-gray-100 rounded-lg"
                    type="text"
                    placeholder="Ej: correo@correo.com"
                    {...register("email", {
                        required: "El Email es Obligatorio",
                        pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                            message: "Email No Válido",
                        },
                    })}
                />
                {errors.email && <ErrorForm>{errors.email.message}</ErrorForm>}
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="font-roboto font-bold text-xl text-primary">
                    Asunto:
                </label>
                <input
                    id="subject"
                    className="w-full p-3 border border-gray-100 rounded-lg"
                    type="text"
                    placeholder="Ej: Creacion de Pagina Web"
                    {...register("subject", {
                        required: "El asunto es obligatorio",
                    })}
                />
                {errors.subject && <ErrorForm>{errors.subject.message}</ErrorForm>}
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="msg" className="font-roboto font-bold text-xl text-primary">
                    Mensaje:
                </label>
                <textarea
                    id="msg"
                    className="w-full p-3 h-52 border border-gray-100 rounded-lg resize-none"
                    placeholder="Ej: Me gustaría una página web para mi negocio de repostería, con un diseño moderno y una sección para mostrar mis productos."
                    {...register("msg", {
                        required: "El mensaje es obligatorio",
                    })}
                />
                {errors.msg && <ErrorForm>{errors.msg.message}</ErrorForm>}
            </div>

            <input
                type="submit"
                className="bg-ocean w-full p-3 text-white uppercase font-bold hover:bg-[#008f95] cursor-pointer transition-colors rounded-lg"
                value="Enviar Mensaje"
            />
        </form>
    );
}
