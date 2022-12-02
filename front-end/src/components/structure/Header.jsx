import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import style from '../../css/Header.module.css';

const Header = () => {

    const { user } = useContext(AuthContext);
    const navigator = useNavigate();

    return (
        <div className={style.Header}>
            <div className={style.HeaderLogo}>
                <img alt='logo' src='./HUBL Diamond Design White Small.png' onClick={() => navigator('/')}/>
            </div>
            <div className={style.ButtonArea}>
                <button onClick={() => navigator("/lessonZone")}>Lesson Zone</button>
                <button onClick={() => navigator("/quickVerb")}>Quick Verb</button>
                <button onClick={() => navigator("/vocabZone")}>Vocab Zone</button>
                <button onClick={() => navigator("/aboutUs")}>About HUBL</button>
            </div>
            <div className={style.LoginArea}>
                <div className={style.UserIcon} onClick={() => navigator('/signIn')}>
                    {(user) ? <p>{user.username}</p> : <p>LOG IN</p>}
                </div>
            </div>
        </div>
    )

}

export default Header;