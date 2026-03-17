import styles from "./styles/pages.module.css";

export const ContactUsPage=()=>{
    return(
        <div className={styles.pageBody}>
            <h1 className={styles.pageTitle} >Contact Us</h1>
            <hr className={styles.separator} />
            <p className="pageContent" ></p>
        </div>
    )
}