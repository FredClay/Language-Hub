import style from '../../css/VocabSessionSummary.module.css';

const VocabSessionSummary = ({ wordList }) => {
    
    let score = wordList.filter(word => (!word.passed)).length;
    let maxScore = wordList.length;
    
    const displayCorrect = (word, key) => {

        return (
            <div className={style.correct} key={key}>
                <p>{`${key + 1}: ${word.english} = ${word.german}`}</p>
            </div>
        );
    };

    const displayPassed = (word, key) => {
        return (
            <div className={style.incorrect} key={key}>
                <p>{`${key + 1}: ${word.english} = ${word.german}`}</p>
            </div>
        );
    }

return (
        <div className={style.SummaryZone}>
            <div className={style.TopSection}>
                <h2><u>{score} out of {maxScore}!</u></h2>
                <h3>You can get a fresh set of words or make a new selection by using the blue buttons above.</h3>
            </div>
            <div className={style.questionSection}>
                {wordList.map((word, key) => (word.passed === true) ? displayPassed(word, key) : displayCorrect(word, key))}
            </div>
        </div>
    );

};

export default VocabSessionSummary;