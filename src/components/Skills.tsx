import SkillCard from "./SkillCard";

export default function Skills() {
    return (
        <section id="skills" className="cointainer mx-auto max-w-7xl px-7 mt-9">
            <h2 className="font-black font-montserrat text-dark_ocean text-3xl mb-9 text-center">
                Skills
            </h2>

            <article className="pb-10">
                <SkillCard />
            </article>
        </section>
    );
}