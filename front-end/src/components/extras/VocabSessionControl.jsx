import style from '../../css/AdjectivePractice.module.css';

import axios from "axios";
import { useState } from "react";

import TranslationPrinter from "./TranslationPrinter";
import VocabSessionSummary from './VocabSessionSummary';

const VocabSessionControl = ( props ) => {
    
    const { count, topic, category, toEnglish } = props;
    const [fullMarks, setFullMarks] = useState(false);
    const [underway, setUnderway] = useState(false);

    const [thisState, setThisState] = useState({
        currentScore: 0,
        possibleScore: 0
    });

    const [getWordsFailed, setGetWordsFailed] = useState(false);
    const [currentQ, setCurrentQ] = useState(0);
    const [wordList, setWordList] = useState([]);

    const beginExercise = () => {
        axios
        .get(axiosGetFormatter())
        .then(res => {
            const words = res.data;            
            if (category === 'nouns') {
                for (const word in words) {
                    let thisWord = words[word];
                    words[word] = formatWord(thisWord);
                }
            }            
            setWordList(words);
            setCurrentQ(0);
            setFullMarks(false);
            setThisState({...thisState, possibleScore: thisState.possibleScore + parseInt(count)});
        })
        .then(() => {
            setUnderway(true);
        })
        .catch(() => setGetWordsFailed(true));
    };

    const axiosGetFormatter = () => {
        let searchString;
        if (category === 'Nouns') {
            searchString = `http://localhost:5000/${category}/${topic}/getSelection/${count}`;
        }
        else {
            searchString = `http://localhost:5000/${category}/getSelection/${count}`;
        }
        return searchString;
    }
    
    const formatWord = (inputWord) => {
        const language = 'german';
        let translatedThe;
        if (language === 'german') {
            switch (inputWord.gender) {
                case 'm':
                    translatedThe = 'der ';
                    break;
                case 'f':
                    translatedThe = 'die ';
                    break;
                case 'n':
                    translatedThe = 'das ';
                    break;
                default:
                    translatedThe = '';
            }
        }
        inputWord.english = "the " + inputWord.english;
        inputWord.translation = translatedThe + inputWord.translation;

        if (toEnglish) {
            inputWord = {...inputWord, english: inputWord.translation, translation: inputWord.english, solved: false, passed: false}
        }
        else {
            inputWord = {...inputWord, solved: false, passed: false};
        }
        return inputWord;
    }

    const endExercise = () => {
        for (const word of wordList) {
            if (!word.solved) {
                word.passed = true;
            }
        }
        findNextUnsolved();
    };

    const setCorrect = () => {
        const focusWord = wordList[currentQ];
        focusWord['solved'] = true;
        setWordList([...wordList.slice(0, currentQ), focusWord, ...wordList.slice(currentQ + 1, wordList.length)])
    };

    const setPass = () => {
        const focusWord = wordList[currentQ];
        focusWord['passed'] = true;
        setWordList([...wordList.slice(0, currentQ), focusWord, ...wordList.slice(currentQ + 1, wordList.length)])
        setTimeout(() => {
            questionIndexer(0);
        }, 1000)
    };

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
            if (!(wordList[word].solved || wordList[word].passed)) {
                unsolved.push(word);
            }
        }
        if (unsolved.length === 0) {
            setFullMarks(true);
            return;
        }
        const maxOfArray = Math.max(...unsolved);
        if (maxOfArray < currentPos) {
            setCurrentQ(parseInt(unsolved[0]));
        }
        else {
            let gThan = unsolved.filter(num => num >= currentPos);
            setCurrentQ(parseInt(gThan[0]));
        }
    }

    return (
        <div className={style.AdjectiveZone}>
            <div className={style.topArea}>
                <div className={style.buttonArea}>
                    <button type='button' onClick={() => window.location.reload()}>Change Selection</button>
                    {(!underway) && <button type='button' onClick={() => beginExercise()}>{'Begin!'}</button>}
                    {(fullMarks) && <button type='button' onClick={() => beginExercise()}>{'Start New Round'}</button>}
                </div>
                <div className={style.infoZone}>
                    <h3><u>Current Selection</u></h3>
                    <h3>{count} {category.toUpperCase()}</h3>
                </div>
            </div>
            {getWordsFailed && <><h1>OH NO!</h1><h2 style={{'textAlign': 'center'}}>It seems like we couldn't locate the resource you've selected.<br/>Please try a different category, or get in touch to report a problem!</h2></>}
            {(fullMarks) && <VocabSessionSummary wordList={wordList}/> }
            {(!fullMarks && underway) && <TranslationPrinter indexer={questionIndexer} correcter={setCorrect} passer={setPass} ender={endExercise} toEnglish={toEnglish}
                thisWord={wordList[currentQ]} currentIndex={currentQ} sessionInfo={{count: count, category: category}}/>}
        </div>
    );

};

export default VocabSessionControl;