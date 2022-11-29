import style from '../../css/VocabZone.module.css';

import { useState } from 'react';

import VocabSessionControl from '../extras/VocabSessionControl';

const VocabZone = () => {

    const availableCategories = ['Adjectives', 'Nouns', 'Verbs'];
    const availableQuantities = ['2', '5', '10', '15'];

    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedQuantity, setSelectedQuantity] = useState('');
    const [toEnglish, setToEnglish] = useState(true);
    const [chosen, setChosen] = useState(false);
    const [invalidSelection, setInvalidSelection] = useState(false)

    const pressedBegin = () => {
        if (selectedCategory === '' || selectedQuantity === '') {
            setInvalidSelection(true);
        }
        else {
            setChosen(true);
        }
    }

    if (!chosen) {
    return (
        <div className={style.VocabZone}>
            <div className={style.IntroSection}>
                <h1>Welcome to the Vocab Zone!</h1>
                <h2>This is a great place to take quickfire vocab tests on your chosen topics.</h2>
            </div>
            <div className={style.SelectionArea}>
                <select id='chooseCategory' onChange={(e) => setSelectedCategory(e.target.value)}>
                    <option value=''>Select Category</option>
                    {availableCategories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                </select>
                <select id='chooseQuantity' onChange={(e) => setSelectedQuantity(e.target.value)}>
                    <option value=''>Question Count</option>
                    {availableQuantities.map(quant => <option key={quant} value={quant}>{quant}</option>)}
                </select>
                <div className={style.languageOptions}>
                    <h3>Translate to:</h3>
                    <div className={style.sliderArea}>
                        <h3>English</h3>
                        <label className={style.switch}>
                            <input type='checkbox'></input>
                            <span className={[style.slider, style.round].join(" ")} onClick={() => setToEnglish(!toEnglish)}></span>
                        </label>
                        <h3>German</h3>
                    </div>
                </div>
                {invalidSelection && <p className={style.ErrorMessage}>Please select a category and quantity to continue</p>}
                <button type='button' onClick={() => pressedBegin()}>Begin!</button>
            </div>
        </div>
    )};
    

    return (
        <div className={style.VocabTestZone}>
            
            <VocabSessionControl count={selectedQuantity} category={selectedCategory.toLowerCase()} toEnglish={toEnglish}/>
        </div>
    )

};

export default VocabZone;