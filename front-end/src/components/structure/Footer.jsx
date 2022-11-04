import style from '../../css/Footer.module.css';

const Footer = () => {

    return (
        <div className={style.FooterArea}>
            <div className={style.Footer}>
                <div className={style.FooterLead}>
                    <h3>With HUBL, you're free to sharpen up your language skills however you want!</h3>
                </div>
                <div className={style.FooterButtonsArea}>
                    <div className={style.FooterButtons}>
                        <button>Contact</button>
                        <button>About</button>
                        <button>Careers</button>
                    </div>
                </div>
                <div className={style.FooterAddress}>
                    <p>135 Pernickety Street, London</p>
                </div>
            </div>
        </div>
    )

};

export default Footer;