import style from '../../css/UserArea.module.css';

import { logoutUser } from '../../context/ApiCalls';
import { AuthContext } from '../../context/AuthContext';
import { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


const UserArea = () => {

    const { user, dispatch } = useContext(AuthContext);
    const navigator = useNavigate();

    const logOutDirectHome = () => {
        logoutUser(dispatch);
        navigator('/');
    }

    useEffect(() => {
        if (!localStorage.getItem("userData")) {
            navigator('/');
        }
    })

    if (user) {
        return (
            <div className={style.UserArea}>
                <div className={style.HoldingArea}>
                    <div className={style.LeftArea}>
                        <div className={style.LogoutArea}>
                            <h1>{user.username}</h1>
                            <button className={style.LogoutButton} onClick={() => logOutDirectHome()}>Logout</button>
                        </div>
                    </div>
                    <div className={style.MainBulk}>
                        <h1>Currently logged in as...<br />{(user.firstName + " " + user.lastName).toUpperCase()}</h1>
                    </div>
                </div>
            </div>
        );
    }


};

export default UserArea;