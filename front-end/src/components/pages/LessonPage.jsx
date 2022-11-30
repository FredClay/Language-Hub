import style from '../../css/LessonZone.module.css';

import axios from "axios";
import { useEffect, useState } from 'react';

import AvailableLessons from '../extras/AvailableLessons';
import LessonPrinter from '../extras/LessonPrinter';

const LessonPage = () => {

    const [language, setLanguage] = useState('german');
    const [lessonChosen, setLessonChosen] = useState(true);
    const [availableLessons, setAvailableLessons] = useState([
        {
            title: "Regular Verb Conjugation", level: "beginner", 
            description: "Changing the ending of a verb is essential in the German Language. This lesson will introduce you to how regular verbs are conjugated!"
        },
        {
            title: "Talking About Time", level: "beginner", 
            description: "In German, there are a few quirks to telling the time, and using it within a sentence. This lesson will give you some handy tips!"
        } 
    ]);

    const [lessonContent, setLessonContent] = useState({heading: "Lorem ipsum dolor sit amet.", introPara: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."});
    
    // below UE will be implemented once back-end is updated with Lessons.
    // useEffect(() => {
    //     axios
    //         .get(`http://localhost:5000/lessons/${language}/summaries/getAll`)
    //         .then((result) => setAvailableLessons(result))
    //         .catch((err) => console.log(err))
    // }, [language]);
    
    const startLesson = () => {
        setLessonContent({heading: "Lorem ipsum dolor sit amet.", introPara: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."});
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
                <div className={style.AvailableLessons}>
                    {availableLessons.map((lesson) => <AvailableLessons lessonInfo={lesson} lessonStarter={startLesson}/>)}
                </div>
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