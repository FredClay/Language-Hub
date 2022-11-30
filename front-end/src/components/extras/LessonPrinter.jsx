import style from '../../css/LessonPrinter.module.css';

import {useNavigate} from 'react-router-dom';

const LessonPrinter = ( {lessonContent, lessonExiter} ) => {

    const {heading, introPara} = lessonContent;
    const navigator = useNavigate();

    return (
        <div className={style.LessonPrinter}>
            <div className={style.ButtonAndHeading}>
                <button onClick={() => lessonExiter()}>{'<'}</button>
                <h1>{heading}</h1>
            </div>
            <h3>{introPara}</h3>
        </div>
    );

};

export default LessonPrinter;