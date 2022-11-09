import style from '../../css/SignUpPage.module.css';

import { useState } from "react";
import { Link } from 'react-router-dom';

const SignUpPage = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className={style.SignUpPage}>
            <div className={style.SignUpForm}>
                <div className={style.FormTopText}>
                    <p>Join HUBL today! It's free forever!</p>
                </div>
                <label htmlFor='userFirstName'>First Name(s): </label>
                <input id='userFirstName' type='text' value={firstName} onChange={(e) => setFirstName(e.target.value)}></input>
                <br />
                <label htmlFor='userLastName'>Last Name(s): </label>
                <input id='userLastName' type='text' value={lastName} onChange={(e) => setLastName(e.target.value)}></input>
                <br />
                <label htmlFor='userEmailAddress'>Email Address: </label>
                <input id='userEmailAddress' type='text' value={emailAddress} onChange={(e) => setEmailAddress(e.target.value)}></input>
                <br />
                <label htmlFor='userUsername'>Username: </label>
                <input id='userUsername' type='text' value={password} onChange={(e) => setPassword(e.target.value)}></input>
                <br />
                <label htmlFor='userPassword'>Password (8 characters or more): </label>
                <input id='userPassword' type='text' value={username} onChange={(e) => setUsername(e.target.value)}></input>
                <div className={style.FormButton}>
                    <button type='submit'>Sign In</button>
                </div>
            </div>

            <div className={style.SignUpExtras}>
                <p><Link to='/signIn'>Already a member? Log in here!</Link></p>
                <p><Link to='/forgottenPassword'>Forgotten Password?</Link></p>
            </div>
        </div>
    );

};

export default SignUpPage;