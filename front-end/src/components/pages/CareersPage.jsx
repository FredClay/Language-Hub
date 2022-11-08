import style from '../../css/CareersPage.module.css';

const CareersPage = () => {

    return (
        <div className={style.CareersPage}>
            <div className={style.CareersText}>
                <h1>You probably expected to see some job listings here, but actually it's a job appeal!</h1>
                <h2>Our founder, Fred Clay, is currently seeking employment!</h2>
                <p>Fred began his adventure into the IT sector in the summer of 2021, when he got his first book on programming. That book was
                    <a href='https://nostarch.com/pythoncrashcourse2e'> Python Crash Course - by Eric Matthes</a>. And it was solving problems in this book that confirmed Fred's desire to 
                    pursue a career in programming. Since then, Fred has sought out official ways of making this dream a reality. He took part in a <b>software engineering bootcamp</b> over 
                    the Christmas 2021 period, and upon completing that, he managed to gain employment as a <b>Technical Specialist</b> with QA Ltd.<br /><br />Fred has always <b>received 
                    excellent reviews from his colleagues and trainers</b>, gaining perfect marks troughout his time in training.<br />(Scroll down for a list of Fred's skills...)
                    <br /><br />Fred is now looking to make that final jump into 
                    the industry, by gaining meaningful employment with a company that recognises hard-work and talent.<br /> <b>If you are one of these companies, then why not consider 
                    Fred Clay!</b></p>
            </div>
            <div className={style.Skills}>
                <p>Skills:<br /> Python, Java, JavaScript, React.js, Express.js, Node.js, MySQL, MongoDB, Git, HTML, CSS</p>
            </div>
        </div>
    )

}

export default CareersPage;