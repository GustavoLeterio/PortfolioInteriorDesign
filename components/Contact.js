import styles from '../styles/contact.module.css'
import Image from 'next/image'
import contactImage from '../public/contactImage.jpg'
import InstagramLogo from '../public/InstagramLogo'
import LinkedinLogo from '../public/LinkedinLogo.js'
import ResumeLogo from '../public/ResumeLogo'
import FacebookLogo from '../public/FacebookLogo'
import InstagramLogoActive from '../public/InstagramLogoActive'
import LinkedinLogoActive from '../public/LinkedinLogoActive.js'
import ResumeLogoActive from '../public/ResumeLogoActive'
import FacebookLogoActive from '../public/FacebookLogoActive'
import { useState } from 'react'
import { mask, unMask } from 'remask'

const ContactPage = () => {
    const [maskedValue, setMaskedValue] = useState("");
    function numberMask(ev) {
        const originalValue = unMask(ev.target.value);
        const maskedValue = mask(originalValue, ['(99)99999-9999']);
        setMaskedValue(maskedValue);
    }
    const [countedValue, setCount] = useState("0");
    function recalculate(ev) {
        let textAreaCount = ev.target.value.length;
        if (textAreaCount == 320) {
            document.getElementById("counter").style.color = "red";
        } else {
            document.getElementById("counter").style.color = "inherit";
        }
        setCount(textAreaCount);
    }

    return (
        <div className={styles.contactPage}>
            <div className={styles.backgroundImage}><Image src={contactImage} objectFit="cover" objectPosition="center" /></div>
            <div className={styles.contentWrapper}>
                <div className={styles.mailSenderWrapper}>
                    <h1 className={styles.title}>Entre em Contato</h1>
                    <div className={styles.formsContent}>
                        <form className={styles.form}>
                            <div className={styles.inputRows}>
                                <fieldset className={styles.fieldset}>
                                    <legend align="right" className={styles.legend}>Nome</legend>
                                    <input className={styles.input} type="text" name="firstName" placeholder="Seu Nome" required />
                                </fieldset>
                                <fieldset className={styles.fieldset}>
                                    <legend align="right" className={styles.legend}>Último Nome</legend>
                                    <input className={styles.input} type="text" name="lastName" placeholder="Seu Último Nome" required />
                                </fieldset>
                            </div>
                            <div className={styles.inputRows}>
                                <fieldset className={styles.fieldset}>
                                    <legend align="right" className={styles.legend}>Email</legend>
                                    <input className={styles.input} type="email" name="email" placeholder="Seu Email" required />
                                </fieldset>
                                <fieldset className={styles.fieldset}>
                                    <legend align="right" className={styles.legend}>Telefone</legend>
                                    <input className={styles.input} type="text" name="phoneNumber" onChange={numberMask} value={maskedValue} placeholder="(__)_____-____" required />
                                </fieldset>
                            </div>
                            <div className={styles.inputRows}>
                                <fieldset className={styles.fieldset}>
                                    <legend align="right" className={styles.legend}>Mensagem</legend>
                                    <textarea className={styles.input} type="text" onChange={recalculate} name="message" rows="6" maxLength="320" placeholder="Diga me o que pensa!" />
                                    <span className={styles.counter} id="counter">{countedValue} / 320</span>
                                </fieldset>
                            </div>
                            <div className={styles.inputRows}>
                                <input type="submit" className={styles.inputButton} value="Enviar" />
                            </div>
                        </form>
                    </div>
                </div>
                <div className={styles.socialMedia}>
                <div className={styles.socialMediasBoxes}>
                    <div className={styles.svg}><FacebookLogo /></div>
                    <div className={styles.svg}><InstagramLogo /></div>
                    <div className={styles.svg}><LinkedinLogo /></div>
                    <div className={styles.svg}><ResumeLogo /></div>
                </div>
                <div className={styles.socialMediasBoxesActive}>
                    <div className={styles.svgActive}><FacebookLogoActive /></div>
                    <div className={styles.svgActive}><InstagramLogoActive /></div>
                    <div className={styles.svgActive}><LinkedinLogoActive /></div>
                    <div className={styles.svgActive}><ResumeLogoActive /></div>
                </div>
                </div>
            </div>
        </div >
    );
}

export default ContactPage;