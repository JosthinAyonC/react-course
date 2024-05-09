import { types } from "../data";

export const authReducer = (state: {}, action: any) => {
    switch (action.type) {
        case types.login:
            return {
                ...state,
                logged: true,
                token: action.payload.token,
            }
        case types.logout:
            return {
                ...state,
                logged: false,
                token: '',
            }
        default:
            return state;
    }
}