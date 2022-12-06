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
                {(user) && 
                <div className={style.LoginIcon} onClick={() => navigator('/userArea')}>
                    <div className={style.UserIcon}>
                        <h1>{(user.firstName[0] + user.lastName[0]).toUpperCase()}</h1>
                    </div>
                </div>}
                {(!user) && 
                    <div className={style.LoginIcon} onClick={() => navigator('/signIn')}>
                        <img alt='noUser' src='./DefaultLoginSymbolSquare.png' onClick={() => navigator('/')}/>
                    </div>}
            </div> 
        </div>

    )

}

export default Header;