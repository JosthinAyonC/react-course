import { Hero, heroes } from '../data/Heros';

export const getHerosByPublisher = (publisher: string): Hero[] => {
    const validPublishers = ['DC Comics', 'Marvel Comics'];
    if (!validPublishers.includes(publisher)) {
        throw new Error(`Publisher "${publisher}" not found`);
    }
    return heroes.filter(hero => hero.publisher === publisher);
};

export const getHeroById = (id: string): Hero | undefined => {
    return heroes.find(hero => hero.id === id);
}