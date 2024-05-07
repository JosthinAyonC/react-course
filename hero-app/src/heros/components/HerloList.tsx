import { HeroCard } from './HeroCard';
import { getHerosByPublisher } from '../helpers'

import '../components/HeroComponent.css'

export const HerloList = ({ publisher }: { publisher: string }) => {

    const heros = getHerosByPublisher(publisher);

    return (
        <>
            <h1>{publisher}</h1>
            <hr />
            <div className="grid">
                {
                    heros.map(hero => (
                        <HeroCard
                            key={hero.id}
                            hero={hero}
                        />
                    ))
                }
            </div>
        </>
    )
}