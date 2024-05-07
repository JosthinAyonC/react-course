import { Hero } from "../data/Heros"

import '../components/HeroComponent.css'

export const HeroCard = ({ hero }: { hero: Hero }) => {

    const urlImage = `./assets/heros/${hero.id}.jpg`;

    return (
        <div className="hero-card">
            <div className="row">
                <img src={urlImage} alt={hero.superhero} />
            </div>
            <div className="row">
                <h3>{hero.superhero}</h3>
                <p>{hero.alter_ego}</p>
                <p>{hero.first_appearance}</p>
            </div>
        </div>
    )
}