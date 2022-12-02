import style from '../../css/SignInPage.module.css';

import axios from 'axios';

import { useState, useContext } from "react";
import { Link } from 'react-router-dom';
import { loginCall } from '../../context/ApiCalls';
import { AuthContext } from '../../context/AuthContext';

const SignInPage = () => {
    const {isFetching, dispatch, error} = useContext(AuthContext);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(isFetching);

    const sendInfo = async () => {
        setIsLoading(true);

        const userObject = {
            username: username,
            password: password
        };
        await loginCall(userObject, dispatch);
        setIsLoading(false);
    };

    return (
        <div className={style.SignInPage}>
            <div className={style.SignInForm}>
                <div className={style.FormTopText}>
                    <p>Sign into your HUBL account here</p>
                </div>
                <label htmlFor='userUsername'>Username: </label>
                <input id='userUsername' type='text' value={username} onChange={(e) => setUsername(e.target.value)}></input>
                <br />
                <label htmlFor='userPassword'>Password: </label>
                <input id='userPassword' type='text' value={password} onChange={(e) => setPassword(e.target.value)}></input>
                <div className={style.FormButton}>
                    <button type='submit' onClick={() => sendInfo()} disabled={isFetching}>{(isLoading) ? "Loading" : "Sign In"}</button>
                </div>
            </div>

            <div className={style.SignInExtras}>
                <p><Link to='/signUp'>Not a member yet? Sign up here!</Link></p>
                <p><Link to='/forgottenPassword'>Forgotten Password?</Link></p>
            </div>
        </div>
    );

};

export default SignInPage;