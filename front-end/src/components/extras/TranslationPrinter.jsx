const TranslationPrinter = ( props ) => {
    const { thisWord } = props;
    const {english, german} = thisWord;
    
    return (
        <div>
            <p>English: {english}</p>
            <p>German: {german}</p>
        </div>
    );
};

export default TranslationPrinter;