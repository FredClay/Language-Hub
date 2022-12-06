import style from '../../css/LessonZone.module.css';

import axios from "axios";
import { useEffect, useState } from 'react';

import AvailableLessons from '../extras/AvailableLessons';
import LessonPrinter from '../extras/LessonPrinter';

const LessonPage = () => {

    const [language, setLanguage] = useState('german');
    const [lessonChosen, setLessonChosen] = useState(false);
    const [availableLessons, setAvailableLessons] = useState([]);

    const [lessonContent, setLessonContent] = useState({});
    
    useEffect(() => {
        axios
            .get(`http://localhost:5000/lessons/getByLanguage/${language}`)
            .then((result) => {setAvailableLessons(result.data)})
            .catch((err) => console.log(err))
    }, [language]);
    
    const startLesson = (lessonID) => {
        console.log(lessonID);
        axios
            .get(`http://localhost:5000/lessons/getLesson/${lessonID}`)
            .then((result) => setLessonContent(result.data))
            .catch((err) => console.log(err))
        setLessonChosen(true);
    }

    const exitLesson = () => {
        setLessonChosen(false);
        setLessonContent({});
    }

    if (!lessonChosen) {
        return (
            <div className={style.LessonZone}>
                <div className={style.IntroSection}>
                    <h1>Welcome to the Lesson Zone!</h1>
                    <h2>Here you'll find tips on grammar and culture.</h2>
                </div>
                {(availableLessons) && <div className={style.AvailableLessons}>
                    {availableLessons.map((lesson, index) => <AvailableLessons key={index} lessonInfo={lesson} lessonStarter={startLesson}/>)}
                </div>}
            </div>
        );
    } else {
        return (
            <div className={style.LessonZone}>
                <LessonPrinter lessonContent={lessonContent} lessonExiter={exitLesson}/>
            </div>
        )
    }
};

export default LessonPage;