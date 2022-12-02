export const loginStart = () => ({
    type: "loginStart"
});

export const loginSuccess = (user) => ({
    type: "loginSuccess",
    payload: user
});

export const loginFailure = (error) => ({
    type: "loginFailure",
    payload: error
});

export const logoutSuccess = () => ({
    type: "logoutSuccess",
    payload: null
});