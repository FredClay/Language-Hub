import style from '../../css/TranslationPrinter.module.css';

import { useState, useEffect} from 'react';
import VocabMidSection from './VocabMidSection';
import LanguageCharacters from './LanguageCharacters';

const TranslationPrinter = ( props ) => {
    const { thisWord, indexer, sessionInfo, correcter, passer, ender, currentIndex, fullMarks } = props;
    const {english, translation, solved, passed } = thisWord;
    const { count, category } = sessionInfo;

    const [scoreThisRound, setScoreThisRound] = useState(0);
    const [enteredText, setEnteredText] = useState('');
    const [displaySituation, setDisplaySituation] = useState('unsolved');

    useEffect(() => {
        if (!solved && !passed) {
            setDisplaySituation('unsolved');
        }
        else if (passed) {
            setDisplaySituation('passed');
        }
        else {
            setDisplaySituation('correct');
        }
    }, [solved, passed])

    useEffect(() => {
        setEnteredText('');
    }, [translation])
    
    useEffect(() => {
        if (enteredText === translation) {
            setScoreThisRound(scoreThisRound + 1);
            if (scoreThisRound === count) {
                return;
            }
            correcter();           
            setTimeout(() => {
                indexer(0);
            }, 1000)
        }
    }, [enteredText, translation]);

    const charButtonInterpreter = (input) => {
        setEnteredText(enteredText + String.fromCharCode(input));
    }
    
    if (fullMarks) {
        return (
            <div>
                <h1>Great work!</h1>
                <p>You got {scoreThisRound} / {count} right!</p>
            </div>
        )
    }
    
    return (
        <div className={style.MainZone}>
            <div className={style.TranslationZone}>
                <div className={style.ScoreSection}>
                    <h2>{category.toUpperCase()}</h2>
                    <h2>Total Score: {scoreThisRound + '/' + count}</h2>
                </div>
                <h2>Question {parseInt(currentIndex) + 1} of {count}</h2>
                <div className={style.InteractiveArea}>
                    <button className={style.DirectionButton} onClick={() => indexer(-1)}>{'<'}</button>
                    <div className={style.MiddleSection}>                   
                        <VocabMidSection displaySituation={displaySituation} text={enteredText} setText={setEnteredText} english={english} translation={translation} />
                    </div>
                    <button className={style.DirectionButton} onClick={() => indexer(1)}>{'>'}</button>
                </div>
                <div className={style.bottomSection}>
                    <button className={style.passButton} onClick={() => passer()}>Pass Question</button>
                    <button onClick={() => indexer(0)}>Find Next Unsolved</button>
                </div>
                <button className={style.sessionButton} onClick={() => ender()}>End Session</button>
            </div>
            <div className={style.charButtonSection}>
                <LanguageCharacters buttonListener={charButtonInterpreter}/>
            </div>
        </div>
    );
};

export default TranslationPrinter;