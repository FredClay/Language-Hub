import axios from "axios";

export const loginCall = async (userCredentials, dispatch) => {
    dispatch({type: "loginStart"});

    try {
        const response = await axios.post('http://localhost:5000/userDetails/getUser/login', userCredentials);
        dispatch({type: "loginSuccess", payload: response.data});
        localStorage.setItem("userData", JSON.stringify(response.data));
    }
    catch (error) {
        return dispatch({type:"loginFailure", payload: error})
    }

}