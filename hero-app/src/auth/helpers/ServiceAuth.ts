import { AuthResponse, AuthRequest, User, BadResponse } from "../data";

const BASE_AUTH_URL = 'http://localhost:8080/telco/v2/'

export async function fetchAuth(auth: AuthRequest): Promise<AuthResponse | BadResponse> {
    const response = await fetch(`${BASE_AUTH_URL}auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(auth),
    });

    return await response.json();
}

export async function registerAuth(user: User): Promise<AuthResponse | BadResponse> {
    const response = await fetch(`${BASE_AUTH_URL}auth/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    });

    return await response.json();
}

export async function fetchMyUser(token: string): Promise<User> {
    const response = await fetch(`${BASE_AUTH_URL}user/myUser`, {
        method: 'GET',
        headers: {
            'Authorization': `${token}`,
            'Content-Type': 'application/json',
        },
    });

    return await response.json();
}