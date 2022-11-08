import { useNavigate } from 'react-router-dom';
import style from '../../css/NotFoundPage.module.css';

const NotFoundPage = () => {

    const navigator =useNavigate();
    
    return (
        <div className={style.NotFound}>
            <div className={style.SadText}>
                <h1>Hmmm...</h1>
                <h2>The page you are looking for doesn't seem to exist.</h2>
            </div>
            <div className={style.ImageSection}>
                <img id='sadGaryNotFound' alt='sadRobot' src='./Gary Mk1.png' onClick={() => navigator('/')}/>
                <h2>If you click on Gary, he'll take you back to the homepage</h2>
            </div>

        </div>
    );

};

export default NotFoundPage;