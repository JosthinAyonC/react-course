import { useState, useEffect } from 'react';
import { HeroCard } from './HeroCard';
import { Hero } from '../data';

import { fetchHeroes } from '../helpers';

import '../components/HeroComponent.css'

export const HerloList = ({ publisher }: { publisher: string }) => {

    const [heroes, setHeroes] = useState<Hero[]>([]);

    const getHerosByPublisher = (publisher: string, heros: Hero[]): Hero[] => {
        return heros.filter(hero => hero.publisher === publisher);
    };

    useEffect(() => {
        const fetchAndSetHeroes = async () => {
            try {
                const fetchedHeroes: Hero[] = await fetchHeroes();
                setHeroes(fetchedHeroes);
            } catch (error) {
                console.error('Error fetching heroes:', error);
            }
        };

        fetchAndSetHeroes();
    }, []);

    const filteredHeroes = getHerosByPublisher(publisher, heroes);

    return (
        <>
            <h1>{publisher}</h1>
            <hr />
            <div className="grid">
                {filteredHeroes.map(hero => (
                    <HeroCard
                        key={hero.id}
                        hero={hero}
                    />
                ))}
            </div>
        </>
    );
};
