import style from '../../css/TranslationPrinter.module.css';

import { useState } from 'react';
import { useEffect } from 'react';

const TranslationPrinter = ( props ) => {
    const { thisWord, indexer, sessionInfo, correcter, currentIndex, fullMarks } = props;
    const {english, german, solved } = thisWord;
    const { count, maxPossible, category } = sessionInfo;

    const [scoreThisRound, setScoreThisRound] = useState(0);
    const [enteredText, setEnteredText] = useState('');

    useEffect(() => {
        setEnteredText('');
    }, [german])
    
    useEffect(() => {
        if (enteredText === german) {
            setScoreThisRound(scoreThisRound + 1);
            if (scoreThisRound === count) {
                return;
            }
            correcter();           
            setTimeout(() => {
                indexer(0);
            }, 1000)
        }
    }, [enteredText, german]);
    
    if (fullMarks) {
        return (
            <div>
                <p>Great work!</p>
            </div>
        )
    }
    
    return (
        <div className={style.TranslationZone}>
            <div className={style.ScoreSection}>
                <h2>{category.toUpperCase()}</h2>
                <h2>Total Score: {scoreThisRound + '/' + maxPossible}</h2>
            </div>
            <h2>Question {parseInt(currentIndex) + 1} of {count}</h2>
            <div className={style.InteractiveArea}>
                <button className={style.DirectionButton} onClick={() => indexer(-1)}>{'<'}</button>
                <div className={style.MiddleSection}>
                    {(!solved) ? 
                    //if unsolved ->
                    <>
                        <h1>{english}</h1>
                        <input type='text' autoFocus max='20' value={enteredText} onChange={(e) => setEnteredText(e.target.value)}></input>
                    </> :
                    // if solved ->    
                    <>
                        <h1>{english}</h1>
                        <h1 style={{'color': 'greenyellow'}}>{german}</h1>
                    </>}

                </div>
                <button className={style.DirectionButton} onClick={() => indexer(1)}>{'>'}</button>
            </div>
        </div>
    );
};

export default TranslationPrinter;