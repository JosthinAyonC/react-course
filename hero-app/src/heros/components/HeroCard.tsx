import { Hero } from "../data/Heros"

import '../components/HeroComponent.css'
import { Link } from "react-router-dom";

export const HeroCard = ({ hero }: { hero: Hero }) => {

    const heroImageUrl = `/assets/heroes/${hero.id}.jpg`;

    return (
        <div className="hero-card">
            <div className="row-left">
                <img src={heroImageUrl} alt={hero.superhero} />
            </div>
            <div className="row-right">
                <h3>{hero.superhero}</h3>
                <p><strong>Alter ego: </strong>{hero.alter_ego}</p>

                <p className="card-text">
                    <small className="text-muted">{hero.first_appearance}</small>
                </p>

                <Link to={`/hero/${hero.id}`}>
                    Más...
                </Link>
            </div>
        </div>
    )
}