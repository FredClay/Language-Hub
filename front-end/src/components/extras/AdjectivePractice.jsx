import axios from "axios";
import { useState } from "react";

import TranslationPrinter from "./TranslationPrinter";

const AdjectivePractice = () => {
    
    const [wordList, setWordList] = useState([]);
    
    const getAdjectives = () => {
        axios
            .get('http://localhost:5000/adjectives/getSelection')
            .then(res => {
                setWordList(res.data);
            })
            .catch(err => console.log(err));
    };


    return (
        <div>
            <button type='button' onClick={() => getAdjectives()}>CLICK ME</button>
            <button type='button' onClick={() => console.log(wordList)}>PRINT</button>
            {wordList !== [] && wordList.map(thisWord => <TranslationPrinter thisWord={thisWord} />)}
        </div>
    );

};

export default AdjectivePractice;