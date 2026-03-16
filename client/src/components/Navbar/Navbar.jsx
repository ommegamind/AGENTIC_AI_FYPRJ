import { Link } from "react-router"
import styles from "./Navbar.module.css"

export const Navbar=()=>{
    return (
    <div className={styles.Navbar}>
        <Link to={"/"} className={styles.Navlogo}>Home/LOGO</Link>

        <div className={styles.Navlinkcontainer}>
            <Link to={"/privacy-policy"} className={styles.Navlink}>Privacy</Link>

            <Link to={"/contact-us"} className={styles.Navlink}>Contact</Link>

            <Link to={"/terms-of-service"} className={styles.Navlink}>Terms</Link>

            <Link to={"/prompt-page"} className={styles.Navlink}>Login</Link>
        </div>
    </div>
    )
}