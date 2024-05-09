import { createContext } from "react";

export interface AuthContextProps {
    logged: boolean;
    token: string;
    login: (token: string) => void;
    logout: () => void;
}

export const AuthContext = createContext({} as AuthContextProps);