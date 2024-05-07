import { Hero, heroes } from '../data/Heros';

export const getHerosByPublisher = (publisher: string): Hero[] => {
    const validPublishers = ['DC Comics', 'Marvel Comics'];
    if (!validPublishers.includes(publisher)) {
        throw new Error(`Publisher "${publisher}" not found`);
    }
    return heroes.filter(hero => hero.publisher === publisher);
};