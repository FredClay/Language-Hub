import style from '../../css/TranslationPrinter.module.css';

import { useState } from 'react';
import { useEffect } from 'react';

const TranslationPrinter = ( props ) => {
    const { thisWord, indexer, sessionInfo, correcter, currentIndex } = props;
    const {english, german, solved } = thisWord;
    const { count, maxPossible, category } = sessionInfo;

    const [scoreThisRound, setScoreThisRound] = useState(0);
    const [enteredText, setEnteredText] = useState('');

    useEffect(() => {
        if (enteredText === german) {
            correcter();
            setScoreThisRound(scoreThisRound + 1)
        }
    }, [enteredText, german]);

    const indexShouldClearInput = (increment) => {
        indexer(increment);
        setEnteredText('');
    };
    
    return (
        <div className={style.TranslationZone}>
            <div className={style.ScoreSection}>
                <h2>{category.toUpperCase()}</h2>
                <h2>{scoreThisRound + '/' + maxPossible}</h2>
            </div>
            <h2>Question {currentIndex} of {count}</h2>
            <div className={style.InteractiveArea}>
                <button className={style.DirectionButton} onClick={() => indexShouldClearInput(-1)}>{'<'}</button>
                <div className={style.MiddleSection}>
                    
                    {(!solved) ? <><h1>{english}</h1>
                    <input type='text' max='20' value={enteredText} onChange={(e) => setEnteredText(e.target.value)}></input></> :
                    <p>Correct!<br />{english} is <br />{german}!</p>}

                </div>
                <button className={style.DirectionButton} onClick={() => indexShouldClearInput(+1)}>{'>'}</button>
            </div>
        </div>
    );
};

export default TranslationPrinter;