const VocabMidSection = ( props ) => {

    const {displaySituation, english, german, text, setText} = props;

    return (
        <>
            <h1>{english}</h1>
            {(displaySituation === 'unsolved') && <input type='text' autoFocus max='20' value={text} onChange={(e) => setText(e.target.value)}></input>}
            {(displaySituation === 'passed') && <h1 style={{'color': 'red'}}>{german}</h1>}
            {(displaySituation === 'correct') && <h1 style={{'color': 'greenyellow'}}>{german}</h1>}
        </>
    );

};

export default VocabMidSection;