import { useNavigate } from 'react-router-dom';
import style from '../../css/Header.module.css';

const Header = () => {

    const navigator = useNavigate();

    return (
        <div className={style.Header}>
            <div className={style.HeaderLogo}>
                <h1 onClick={() => navigator("/")}>HUBL</h1>
            </div>
            <div className={style.ButtonArea}>
                <button onClick={() => navigator("/quickVerb")}>Quick Verb</button>
                <button onClick={() => navigator("/quickVerb")}>SecondButton</button>
                <button onClick={() => navigator("/quickVerb")}>ThirdButton</button>
                <button onClick={() => navigator("/quickVerb")}>FourthButton</button>

            </div>
        </div>
    )

}

export default Header;