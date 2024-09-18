import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { cards } from "../data";
import { settings } from "../data/config";

export default function SkillCard() {
    return (
        <Slider {...settings}>
            {cards.map((card) => (
                <div
                    key={card.id}
                    className="flex flex-col items-center justify-center  slider-container text-center py-10"
                >
                    <img src={card.img} alt={`Icono ${card.tech}`} className="mx-auto" />
                    <h3 className="font-roboto text-2xl mt-2">{card.tech}</h3>
                </div>
            ))}
        </Slider>
    );
}
