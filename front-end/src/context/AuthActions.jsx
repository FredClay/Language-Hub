export const loginStart = () => ({
    type: "loginStart"
});

export const loginSuccess = (user) => ({
    type: "loginSuccess",
    payload: user
});

export const loginFail = (error) => ({
    type: "loginFailure",
    payload: error
});