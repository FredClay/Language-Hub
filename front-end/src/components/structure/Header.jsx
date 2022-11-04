import { useNavigate } from 'react-router-dom';
import style from '../../css/Header.module.css';

const Header = () => {

    const navigator = useNavigate();

    return (
        <div className={style.Header}>
            <h1 onClick={() => navigator("/")}>HUBL</h1>
            <div>
                <button onClick={() => navigator("/quickVerb")}>ConjuVerb!</button>
            </div>
        </div>
    )

}

export default Header;