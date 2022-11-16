import style from '../../css/SignUpPage.module.css';

import axios from 'axios';

import { useState } from "react";
import { Link } from 'react-router-dom';

const SignUpPage = () => {

    const [userCreated, setUserCreated] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const addNewUser = (event) => {
        event.preventDefault();
        const userObject = {
            username: username,
            password: password,
            firstName: firstName,
            lastName: lastName,
            emailAddress: emailAddress,
        };

        axios
            .post('http://localhost:5000/userDetails/newUser', userObject)
            .then(res => {
                console.log(res);
                setUserCreated(true);
            })
            .catch(err => console.log(err));
    };
    
    if (!userCreated) {
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
                    <input id='userUsername' type='text' value={username} onChange={(e) => setUsername(e.target.value)}></input>
                    <br />
                    <label htmlFor='userPassword'>Password (8 characters or more): </label>
                    <input id='userPassword' type='text' min='8' value={password} onChange={(e) => setPassword(e.target.value)}></input>
                    <div className={style.FormButton}>
                        <button type='submit' onClick={(e) => addNewUser(e)}>Sign Up</button>
                    </div>
                </div>

                <div className={style.SignUpExtras}>
                    <p><Link to='/signIn'>Already a member? Log in here!</Link></p>
                    <p><Link to='/forgottenPassword'>Forgotten Password?</Link></p>
                </div>
            </div>
        );
    } else {
        return (
            <div className={style.SignedUp}>
                <p>You're all signed up!</p>
                <p><Link to='/signIn'>Click here to login for the first time - how exciting!</Link></p>
            </div>
        )
    }

};

export default SignUpPage;