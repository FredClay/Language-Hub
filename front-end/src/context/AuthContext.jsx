import { useReducer } from "react";
import { createContext } from "react";

import { AuthReducer } from "./AuthReducer";

const InitState = {
    user: localStorage.getItem("userData") ? JSON.parse(localStorage.getItem("userData")) : null,
    isFetching: false,
    error: false
};

export const AuthContext = createContext(InitState);

export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(AuthReducer, InitState);
    return (
        <AuthContext.Provider value={{
            user: state.user,
            isFetching: state.isFetching,
            error: state.error,
            dispatch
        }} >{children}</AuthContext.Provider>
    )
}