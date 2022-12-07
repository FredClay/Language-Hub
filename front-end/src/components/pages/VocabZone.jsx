import style from '../../css/VocabZone.module.css';

import { useState } from 'react';

import VocabSessionControl from '../extras/VocabSessionControl';
import { useEffect } from 'react';
import axios from 'axios';

const VocabZone = () => {

    const availableCategories = ['Adjectives', 'Nouns', 'Verbs'];
    const availableQuantities = ['2', '5', '10', '15'];

    const [availableTopics, setAvailableTopics] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedQuantity, setSelectedQuantity] = useState('');
    const [displayTopicBox, setDisplayTopicBox] = useState(false);
    const [selectedTopic, setSelectedTopic] = useState('');
    const [toEnglish, setToEnglish] = useState(true);
    const [chosen, setChosen] = useState(false);
    const [invalidSelection, setInvalidSelection] = useState(false)

    useEffect(() => {
        axios
            .get('http://localhost:5000/nouns/getTopics')
            .then((res) => {setAvailableTopics(res.data)})
            .catch((err) => console.log(err));
    }, [displayTopicBox])

    const pressedBegin = () => {
        if (!selectedCategory || !selectedQuantity || (displayTopicBox && !selectedTopic)) {
            setInvalidSelection(true);
        }
        else {
            setChosen(true);
        }
    }

    const checkCaegoryDisplaysTopic = (cat) => {
        if (cat === 'Nouns') {
            setDisplayTopicBox(true);
        }
        else {
            setDisplayTopicBox(false);
        }
        setSelectedCategory(cat);
    }

    if (!chosen) {
    return (
        <div className={style.VocabZone}>
            <div className={style.IntroSection}>
                <h1>Welcome to the Vocab Zone!</h1>
                <h2>This is a great place to take quickfire vocab tests on your chosen topics.</h2>
            </div>
            <div className={style.SelectionArea}>
                <select id='chooseCategory' onChange={(e) => checkCaegoryDisplaysTopic(e.target.value)}>
                    <option value=''>Select Category</option>
                    {availableCategories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                </select>
                {(displayTopicBox) && 
                    <select id='chooseTopic' className={style.optionalSelection} onChange={(e) => setSelectedTopic(e.target.value)}>
                        <option value=''>Select Topic</option>
                        {availableTopics.map(topic => <option key={topic.topicName} value={topic.topicName}>{topic.topicName}</option>)}
                    </select>
                }
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
                            <span className={[style.slider, style.round].join(" ")} onClick={() => {setToEnglish(!toEnglish); console.log(toEnglish);}}></span>
                        </label>
                        <h3>German</h3>
                    </div>
                </div>
                {invalidSelection && <p className={style.ErrorMessage}>Please complete your selection to continue</p>}
                <button type='button' onClick={() => pressedBegin()}>Begin!</button>
            </div>
        </div>
    )};
    

    return (
        <div className={style.VocabTestZone}>            
            <VocabSessionControl count={selectedQuantity} topic={selectedTopic.toLowerCase()} category={selectedCategory.toLowerCase()} toEnglish={toEnglish}/>
        </div>
    )

};

export default VocabZone;