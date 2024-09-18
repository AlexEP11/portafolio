type AcademicCardsProps = {
    degree: string;
    duration: string;
    imageUrl: string;
    altDescription: string;
};

export default function AcademicCards({
    imageUrl,
    altDescription,
    degree,
    duration,
}: AcademicCardsProps) {
    return (
        <figure className="mt-10 grow-0 md:grow flex flex-col items-center justify-center text-center ">
            <img
                src={`/${imageUrl}`}
                alt={`Imagen del ${altDescription}`}
                className="rounded-lg h-72 w-72"
            />
            <figcaption className="flex flex-col font-roboto mt-5">
                <h3 className="font-bold text-xl">{degree}</h3>
                <p className="text-gray-600 font-bold">{duration}</p>
            </figcaption>
        </figure>
    );
}
