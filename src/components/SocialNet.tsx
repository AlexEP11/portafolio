type SocialNetProps = {
    redUrl: string;
    icon: string;
    alt: string;
    label: string;
};

export default function SocialNet({ redUrl, icon, alt, label }: SocialNetProps) {
    return (
        <li>
            <a
                href={redUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transform transition-transform duration-300 hover:scale-125 font-montserrat font-bold"
            >
                <img src={`/${icon}.svg`} alt={alt} />
                <p>{label}</p>
            </a>
        </li>
    );
}
