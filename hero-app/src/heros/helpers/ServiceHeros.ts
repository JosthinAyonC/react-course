import { Hero } from "../data";

export async function fetchHeroes(): Promise<Hero[]> {
    const response = await fetch('https://663aa5b1fee6744a6e9f0b47.mockapi.io/hero/list');
    return await response.json();
}

export async function fetchHeroById(id: string): Promise<Hero | null> {
    const response = await fetch(`https://663aa5b1fee6744a6e9f0b47.mockapi.io/hero/list/${id}`);
    return await response.json();
}