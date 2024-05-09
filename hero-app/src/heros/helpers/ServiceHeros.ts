import { Hero } from "../data";

const BASE_HERO_URL = 'https://663aa5b1fee6744a6e9f0b47.mockapi.io/hero/list'

export async function fetchHeroes(): Promise<Hero[]> {
    const response = await fetch(BASE_HERO_URL);
    return await response.json();
}

export async function fetchHeroById(id: string): Promise<Hero | null> {
    const response = await fetch(`${BASE_HERO_URL}/${id}`);
    return await response.json();
}