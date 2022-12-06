import style from '../../css/LessonPrinter.module.css';

import { useState } from 'react';
import { useEffect } from 'react';

const LessonPrinter = ( {lessonContent, lessonExiter} ) => {

    const {title, mainBody} = lessonContent;
    const [content, setContent] = useState(mainBody);

    useEffect(() => {
        setContent(mainBody);
    }, [mainBody])
    
    const buildComponent = (element) => {
            let thisComponent;
            const text = element[1];
            switch (element[0]) {
                case "h":
                    thisComponent = makeHeader(text);
                    break;
                case "p":
                    thisComponent = makeParagraph(text);
                    break;
                case "e":
                    thisComponent = makeExample(text);
                    break;
                default:
                    thisComponent = null;
            }
            return thisComponent;
    }

    const makeHeader = (input) => {
        return <h2><u>{input}</u></h2>
    }

    const makeParagraph = (input) => {
        return <h3>{input}</h3>
    }

    const makeExample = (input) => {
        return <div className={style.ExampleBlock}>{input.split("/").map(ex => <h4>{ex}</h4>)}</div>
    }

    return (
        <div className={style.LessonPrinter}>
            <div className={style.ButtonAndHeading}>
                <button onClick={() => lessonExiter()}>{'<'}</button>
                <h1>{title}</h1>
            </div>
            <div className={style.BodyComponents}>
                {(content) && content.map((element) => buildComponent(element))}
            </div>
        </div>
    );

};

export default LessonPrinter;