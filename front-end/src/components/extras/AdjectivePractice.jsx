import style from '../../css/AdjectivePractice.module.css';

import axios from "axios";
import { useState } from "react";

import TranslationPrinter from "./TranslationPrinter";

const AdjectivePractice = ( props ) => {
    
    const { count, category } = props;
    const [fullMarks, setFullMarks] = useState(false);

    const [thisState, setThisState] = useState({
        underway: false,
        currentScore: 0,
        possibleScore: 0
    });

    const [getWordsFailed, setGetWordsFailed] = useState(false);
    const [currentQ, setCurrentQ] = useState(0);
    const [wordList, setWordList] = useState([]);

    const beginExercise = () => {
        axios
        .get(`http://localhost:5000/${category}/getSelection/${count}`)
        .then(res => {
            const words = res.data;
            words.map((data, solved) => ({...data, solved: false}))
            setWordList(res.data);
            setCurrentQ(0);
            setFullMarks(false);
            setThisState({...thisState, underway: true, possibleScore: thisState.possibleScore+ parseInt(count)});
        })
        .catch(() => setGetWordsFailed(true));

    };

    const setCorrect = () => {
        const focusWord = wordList[currentQ];
        focusWord['solved'] = true;
        setWordList([...wordList.slice(0, currentQ), focusWord, ...wordList.slice(currentQ + 1, wordList.length)])
    }

    const questionIndexer = (increment) => {
        const listLen = wordList.length;
        if (increment !== 0){
            if (currentQ + increment < 0) {
                setCurrentQ(listLen - 1);
            }
            else if (currentQ + increment > listLen - 1) {
                setCurrentQ(0);
            }
            else {
                setCurrentQ(parseInt(currentQ) + increment);
            }
        }
        else {
            findNextUnsolved();
        }
    };

    const findNextUnsolved = () => {
        const currentPos = currentQ;
        let unsolved = [];
        for (let word in wordList) {
            if (!wordList[word].solved) {
                unsolved.push(word);
            }
        }
        if (unsolved.length === 0) {
            setFullMarks(true);
            return;
        }
        const maxOfArray = Math.max(...unsolved);
        if (maxOfArray < currentPos) {
            setCurrentQ(unsolved[0]);
        }
        else {
            let gThan = unsolved.filter(num => num > currentPos);
            console.log(gThan[0]);
            setCurrentQ(parseInt(gThan[0]));
        }
    }

    return (
        <div className={style.AdjectiveZone}>
            <div className={style.topArea}>
                <div className={style.buttonArea}>
                    <button type='button' onClick={() => window.location.reload()}>Change Selection</button>
                    <button type='button' onClick={() => beginExercise()}>{(thisState.underway) ? 'Get New Words' : 'Begin!'}</button>
                </div>
                <div className={style.infoZone}>
                    <h3><u>Current Selection</u></h3>
                    <h3>{count} {category.toUpperCase()}</h3>
                </div>
            </div>
            {getWordsFailed && <><h1>OH NO!</h1><h2 style={{'textAlign': 'center'}}>It seems like we couldn't locate the resource you've selected.<br/>Please try a different category, or get in touch to report a problem!</h2></>}
            {wordList[0] !== undefined && <TranslationPrinter indexer={questionIndexer} correcter={setCorrect} fullMarks={fullMarks} thisWord={wordList[currentQ]} 
                currentIndex={currentQ} sessionInfo={{count: count, maxPossible: thisState.possibleScore, category: category}}/>}
        </div>
    );

};

export default AdjectivePractice;