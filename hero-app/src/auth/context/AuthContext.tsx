import { createContext } from "react";

export interface AuthContextProps {
    logged: boolean;
    user: any;
    login: (name: string) => void;
    logout: () => void;
}

export const AuthContext = createContext({} as AuthContextProps);