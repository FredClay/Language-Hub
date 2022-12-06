export const AuthReducer = (state, action) => {
    switch (action.type) {
        case "loginStart":
            return {user: null, isFetching: false, error: false};
        case "loginSuccess":
            return {user: action.payload, isFetching: false, error: false};
        case "loginFailure":
            return {user: null, isFetching: false, error: action.payload};
        case "logoutSuccess":
            return {user: null, isFetching: false, error: false};
        default:
            return state;
    }
}