import style from '../../css/LanguageCharacters.module.css';

const LanguageCharacters = ( { buttonListener } ) => {

    const germanCharacters = ['0223', '0228', '0246', '0252'];

    return (
        <div className={style.ButtonsZone}>
            <div className={style.TheButtons}>
                {germanCharacters.map(char => <button onClick={() => buttonListener(char)}>{String.fromCharCode(char)}</button>)}
            </div>
            <h3>The above buttons allow you to add special characters to your answer!</h3>
        </div>
    );

};

export default LanguageCharacters;