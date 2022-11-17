import style from '../../css/AdjectivePractice.module.css';

import axios from "axios";
import { useState } from "react";

import TranslationPrinter from "./TranslationPrinter";

const AdjectivePractice = ( props ) => {
    
    const { count, category } = props;

    const [thisState, setThisState] = useState({
        underway: false,
        currentScore: 0,
        possibleScore: 0
    });

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
            setThisState({...thisState, underway: true, possibleScore: thisState.possibleScore+ parseInt(count)});
        })
        .catch(err => console.log(err));

    };

    const setCorrect = () => {
        const focusWord = wordList[currentQ];
        focusWord['solved'] = true;
        setWordList([...wordList.slice(0, currentQ), focusWord, ...wordList.slice(currentQ + 1, wordList.length)])
    }

    const questionIndexer = (increment) => {
        const listLen = wordList.length;
        if (currentQ + increment < 0) {
            setCurrentQ(listLen - 1);
        }
        else if (currentQ + increment > listLen - 1) {
            setCurrentQ(0);
        }
        else {
            setCurrentQ(currentQ + increment);
        }
    };

    
    return (
        <div className={style.AdjectiveZone}>
            <div>
                <button type='button' onClick={() => window.location.reload()}>Back to selection screen</button>
                <button type='button' onClick={() => beginExercise()}>Begin!</button>
            </div>
            {wordList[0] !== undefined && <TranslationPrinter indexer={questionIndexer} correcter={setCorrect} thisWord={wordList[currentQ]} currentIndex={currentQ} 
                sessionInfo={{count: count, maxPossible: thisState.possibleScore, category: category}}/>}
        </div>
    );

};

export default AdjectivePractice;