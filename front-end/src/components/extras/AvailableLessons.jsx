import { useNavigate } from 'react-router-dom';
import style from '../../css/AvailableLessons.module.css';

const AvailableLessons = ( {lessonInfo, lessonStarter} ) => {

    const { _id, title, difficulty, summary } = lessonInfo;

    return(
        <div className={style.LessonDisplay} onClick={() => lessonStarter(_id)}>
            <div className={style.NameAndDiff}>
                <h1>{title}</h1>
                <h2>{difficulty.toUpperCase()}</h2>
                </div>
            <p>{summary}</p>
        </div>
    );

};

export default AvailableLessons;