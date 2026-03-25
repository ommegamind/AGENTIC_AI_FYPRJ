// import styles from "./styles/pages.module.css";

// export const ContactUsPage=()=>{
//     return(
//         <div className={styles.pageBody}>
//             <h1 className={styles.pageTitle} >Contact Us</h1>
//             <hr className={styles.separator} />
//             <p className="pageContent" ></p>
//         </div>
//     )
// }


//GENERATED CONTENT
import styles from "./styles/Contactpage.module.css";

export const ContactUsPage = () => {
    return (
        <div className={styles.pageBody}>
            <div className={styles.container}>

                <h1 className={styles.pageTitle}>Contact Us</h1>
                <hr className={styles.separator} />

                <div className={styles.contactWrapper}>

                    {/* Left Section - Info */}
                    <div className={styles.contactInfo}>

                        <h2>Get in Touch</h2>
                        <p>
                            We value clear communication and are committed to providing prompt and professional assistance. 
                            Please feel free to reach out to us through any of the following channels.
                        </p>

                        <div className={styles.contactItem}>
                            <span className={styles.label}>Phone</span>
                            <span className={styles.value}>+91 6203621161</span>
                        </div>

                        <div className={styles.contactItem}>
                            <span className={styles.label}>Email</span>
                            <span className={styles.value}>omgarg3000@gmail.com</span>
                        </div>

                        <div className={styles.contactItem}>
                            <span className={styles.label}>Address</span>
                            <span className={styles.value}>Adding Soon</span>
                        </div>

                        <div className={styles.contactItem}>
                            <span className={styles.label}>Working Hours</span>
                            <span className={styles.value}>Adding Soon</span>
                        </div>

                    </div>

                    {/* Right Section - Form */}
                    <div className={styles.contactForm}>

                        <h2>Send a Message</h2>

                        <form>
                            <input 
                                type="text" 
                                placeholder="Full Name" 
                                className={styles.inputField}
                            />

                            <input 
                                type="email" 
                                placeholder="Email Address" 
                                className={styles.inputField}
                            />

                            <textarea 
                                placeholder="Your Message" 
                                className={styles.textArea}
                            />

                            <button className={styles.submitButton}>
                                Not working
                            </button>
                        </form>

                        <p className={styles.note}>
                            For now please directly mail us as the above will be implemented soon, we regret the inconvenience.
                        </p>

                    </div>

                </div>

                {/* Social Section */}
                <div className={styles.socialSection}>
                    <h2>Connect With Us</h2>
                    <p>Twitter: Adding Soon</p>
                    <p>LinkedIn: Adding Soon</p>
                    <p>Instagram: Adding Soon</p>
                </div>

            </div>
        </div>
    );
};