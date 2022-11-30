import style from '../../css/AvailableLessons.module.css';

const AvailableLessons = ( {lessonInfo, lessonStarter} ) => {

    const { title, level, description } = lessonInfo;

    return(
        <div className={style.LessonDisplay} onClick={() => lessonStarter()}>
            <div className={style.NameAndDiff}>
                <h1>{title}</h1>
                <h2>{level.toUpperCase()}</h2>
                </div>
            <p>{description}</p>
        </div>
    );

};

export default AvailableLessons;