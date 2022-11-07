import style from '../../css/NotFoundPage.module.css';

const NotFoundPage = () => {

    return (
        <div className={style.NotFound}>
            <div className={style.SadText}>
                <h1>Hmmm...</h1>
                <h2>The page you are looking for doesn't seem to exist.</h2>
            </div>
            <div className={style.ImageSection}>
                <img alt='sadRobot' src='./HUBL Small Design.png' />
                <h2>If you click on Gary, he'll take you back to the homepage</h2>
            </div>

        </div>
    );

};

export default NotFoundPage;