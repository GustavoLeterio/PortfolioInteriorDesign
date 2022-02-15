import styles from '../styles/contact.module.css'
import Image from 'next/image'
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
import Link from 'next/link'

const ContactPage = () => {

    const [submitStyle, setStyle] = useState(styles.inputButton);
    const [submitText, setSubmitText] = useState("Submit");
    function buttonAnimationHandlerSent() {
        setTimeout(() => {
            setStyle(styles.inputButtonClickedSent);
        }, 100);
        setTimeout(() => {
            setSubmitText("Submited!");
        }, 1100);
        setTimeout(() => {
            setStyle(styles.inputButton);
            setSubmitText("Submit");
        }, 3900);
    }
    async function handleOnSubmit(e) {

        e.preventDefault();

        const formData = {};

        Array.from(e.currentTarget.elements).forEach(field => {
            if (!field.name) return;
            formData[field.name] = field.value;
        });

        fetch('/api/mail', {
            method: 'POST',
            body: JSON.stringify(formData)

        });
        buttonAnimationHandlerSent();
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
            <div className={styles.backgroundImage}><Image src="https://res.cloudinary.com/djf0isef7/image/upload/v1635020544/public/contactImage_unuecn.jpg" quality={100} width={1920} height={1080} objectFit="cover" objectPosition="center" /></div>
            <div className={styles.contentWrapper}>
                <div className={styles.mailSenderWrapper}>
                    <h1 className={styles.title}>Contact</h1>
                    <div className={styles.formsContent}>
                        <form className={styles.form} method="post" onSubmit={handleOnSubmit}>
                            <div className={styles.inputRows}>
                                <fieldset className={styles.fieldset}>
                                    <legend align="right" className={styles.legend}>Name</legend>
                                    <input className={styles.input} type="text" name="name" placeholder="Your name" autoComplete="off" required />
                                </fieldset>
                                <fieldset className={styles.fieldset}>
                                    <legend align="right" className={styles.legend}>Last Name</legend>
                                    <input className={styles.input} type="text" name="lastName" placeholder="Your last name" autoComplete="off" required />
                                </fieldset>
                            </div>
                            <div className={styles.inputRows}>
                                <fieldset className={styles.fieldset}>
                                    <legend align="right" className={styles.legend}>Email</legend>
                                    <input className={styles.input} type="email" name="email" placeholder="Your email" autoComplete="off" required />
                                </fieldset>
                                <fieldset className={styles.fieldset}>
                                    <legend align="right" className={styles.legend}>Phone</legend>
                                    <input className={styles.input} type="text" name="phoneNumber" placeholder="Phone Number" autoComplete="off" required />
                                </fieldset>
                            </div>
                            <div className={styles.inputRows}>
                                <fieldset className={styles.fieldset}>
                                    <legend align="right" className={styles.legend}>Message</legend>
                                    <textarea className={styles.input} type="text" onChange={recalculate} name="message" maxLength="320" placeholder="Tell me what you think!" autoComplete="off" required />
                                    <span className={styles.counter} id="counter">{countedValue} / 320</span>
                                </fieldset>
                            </div>
                            <div className={styles.inputRows}>
                                <div className={styles.centerButton}>
                                    <input type="submit" href={this} className={submitStyle} value={submitText} />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className={styles.socialMedia}>
                    <div className={styles.socialMediasBoxes}>
                        <div className={styles.svg} alt="Facebook"><Link href="https://www.facebook.com/profile.php?id=100009988028985"><a target="_blank"><FacebookLogo /></a></Link></div>
                        <div className={styles.svg} alt="Instagram"><Link href="https://www.instagram.com/julia_costt/" ><a target="_blank"><InstagramLogo /></a></Link></div>
                        <div className={styles.svg} alt="Linked In"><Link href="https://www.linkedin.com/in/julia-soares-costa-37b920192/"><a target="_blank"><LinkedinLogo /></a></Link></div>
                        <div className={styles.svg} alt="Resume"><Link href=""><a target="_blank"><ResumeLogo /></a></Link></div>
                    </div>
                    <div className={styles.socialMediasBoxesActive}>
                        <div className={styles.svgActive} alt="Facebook"><FacebookLogoActive /></div>
                        <div className={styles.svgActive} alt="Instagram"><InstagramLogoActive /></div>
                        <div className={styles.svgActive} alt="Linked In"><LinkedinLogoActive /></div>
                        <div className={styles.svgActive} alt="Resume"><ResumeLogoActive /></div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default ContactPage;