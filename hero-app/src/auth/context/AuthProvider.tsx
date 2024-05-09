import { useReducer } from "react"
import { AuthContext } from "./AuthContext"
import { authReducer } from "./Functions"
import { types } from "../data"

const init = () => {
    const user = JSON.parse(localStorage.getItem('accessToken')!);
    return {
        logged: user ? true : false
    };
}

export const AuthProvider = ({ children }: { children: any }) => {

    const [authState, dispatch] = useReducer(authReducer, {}, init);

    const login = (token: string) => {
        const actionLogin = {
            type: types.login,
            payload: { token }
        }

        localStorage.setItem('accessToken', JSON.stringify(token));
        dispatch(actionLogin);
    }

    const logout = () => {
        const actionLogout = {
            type: types.logout
        }

        localStorage.removeItem('accessToken');

        dispatch(actionLogout);
    }

    return (
        <AuthContext.Provider value={{
            ...authState,
            login,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    )
}