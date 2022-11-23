import style from '../../css/VocabZone.module.css';

import { useState } from 'react';

import AdjectivePractice from '../extras/AdjectivePractice';

const VocabZone = () => {

    const availableCategories = ['Adjectives', 'Nouns', 'Verbs'];
    const availableQuantities = ['2', '5', '10', '15'];

    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedQuantity, setSelectedQuantity] = useState('');
    const [chosen, setChosen] = useState(false);
    const [invalidSelection, setInvalidSelection] = useState(false)

    const pressedBegin = () => {
        if (selectedCategory === '' || selectedQuantity === '') {
            console.log("FIRING!");
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
                {invalidSelection && <p className={style.ErrorMessage}>Please select a category and quantity to continue</p>}
                <button type='button' onClick={() => pressedBegin()}>Begin!</button>
            </div>
        </div>
    )};
    

    return (
        <div className={style.VocabTestZone}>
            <AdjectivePractice count={selectedQuantity} category={selectedCategory.toLowerCase()}/>
        </div>
    )

};

export default VocabZone;