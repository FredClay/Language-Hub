import style from '../../css/AboutPage.module.css';

const AboutPage = () => {

    return (
        <div className={style.AboutZone}>
            <div className={style.QuestionBlock}>
                <h1>What is HUBL?</h1>
                <p>Founded in 2022, HUBL is a free language learning platform with a focus on letting students learn via their preferred methods. HUBL's founder, Fred Clay, 
                    wanted to share his passion for learning and software development with the world, and so HUBL was born!<br /><br />Due to rising difficulties in the job market, 
                    Fred built this MERN stack web app to showcase his skills, and hopefully gain meaningful employment with a company that recognises hard work and dedication!</p>
            </div>
            <div className={style.QuestionBlock}>
                <h1>How do I use the HUBL platform?</h1>
                <p>HUBL is currently completely free to use! If you're new to a particular language, try one of our 'Intro to ...' lessons. It will introduce you to your chosen 
                    language and culture, and start you off with a few beginner questions. If you're looking for a particular lesson, simply choose the language and topic you would like 
                    to learn/revise, and HUBL will launch you straight into a lesson!<br /><br />HUBL also has great tools, such as 'QuickVerb' that can help you revise verb conjugations, 
                    or 'LingoWars' where you can try and set highscores and show off your wicked language skills to the world!<br /><br />The beauty of HUBL is that there is no wrong 
                    way to use HUBL! Simply explore the site and learn to your heart's content!</p>
            </div>
            <div className={style.QuestionBlock}>
                <h1>Do I need to pay for HUBL?</h1>
                <p>No! HUBL is completely free to use, and we have no plans to change this. Our founder believes that learning opportunities should be as widespread as possible, and 
                    not locked behind paywalls.</p>
            </div>
            <div className={style.QuestionBlock}>
                <h1>What to do if a question or exercise suggests the wrong answer?</h1>
                <p>If a question tries to offer you an incorrect solution, then firstly we would like to apologise! But secondly, there will be a small alarm bell present next to 
                    the question. If you click on it, our team will be notified of the issue and will investigate. A text box will also pop up in case you want to let us know what the 
                    issue is.<br /><br />We're always working to make HUBL a better place to learn, and your feedback is invaluable to us!</p>
            </div>
        </div>
    );

};

export default AboutPage;