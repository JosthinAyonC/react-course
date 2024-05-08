import { useReducer } from "react"
import { AuthContext } from "./AuthContext"
import { authReducer } from "./Functions"
import { types } from "../data"

const init = () => {
    const user = JSON.parse(localStorage.getItem('user')!);
    return {
        logged: user ? true : false,
        user
    };
}


export const AuthProvider = ({ children }: { children: any }) => {

    const [authState, dispatch] = useReducer(authReducer, {}, init);

    const login = (name: string = '') => {
        const user = {
            id: 123,
            name
        };

        const actionLogin = {
            type: types.login,
            payload: user
        }

        localStorage.setItem('user', JSON.stringify(user));

        dispatch(actionLogin);
    }

    const logout = () => {
        const actionLogout = {
            type: types.logout
        }

        localStorage.removeItem('user');

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