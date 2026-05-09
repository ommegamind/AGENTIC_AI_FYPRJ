// import { Link } from "react-router"
// import styles from "./Navbar.module.css"

// export const Navbar=()=>{
//     return (
//     <div className={styles.Navbar}>
//         <Link to={"/"} className={styles.Navlogo}>Home/LOGO</Link>

//         <div className={styles.Navlinkcontainer}>
//             <Link to={"/privacy-policy"} className={styles.Navlink}>Privacy</Link>

//             <Link to={"/contact-us"} className={styles.Navlink}>Contact</Link>

//             <Link to={"/terms-of-service"} className={styles.Navlink}>Terms</Link>

//             <Link to={"/prompt-page"} className={styles.Navlink}>Login</Link>
//         </div>
//     </div>
//     )
// }

//GENERATED CODE 
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const btnRef = useRef(null);

  // Close on outside click
  useEffect(() => {
    const handleClick = (e) => {
      if (
        menuRef.current?.contains(e.target) ||
        btnRef.current?.contains(e.target)
      ) {
        return;
      }
      setOpen(false);
    };

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div className={styles.Navbar}>
      
      {/* LEFT */}
      <div className={styles.left}>
        <Link to="/" className={styles.Navlogo}>Cerbi</Link>
      </div>

      {/* RIGHT */}
      <div className={styles.right}>
        
        {/* Desktop links */}
        <div className={styles.Navlinkcontainer}>
          <Link to="/privacy-policy" className={styles.Navlink}>Privacy</Link>
          <Link to="/contact-us" className={styles.Navlink}>Contact</Link>
          <Link to="/terms-of-service" className={styles.Navlink}>Terms</Link>
        </div>

        {/* Login */}
        <Link to="/prompt-page" className={styles.loginBtn}>Login</Link>

        {/* Hamburger */}
        <button
          ref={btnRef}
          className={`${styles.menuBtn} ${open ? styles.active : ""}`}
          onClick={() => setOpen(prev => !prev)}
        >
          <div className={styles.menuIcon}></div>
        </button>

        {/* Mobile Menu */}
        {open && (
          <div className={styles.mobileMenu} ref={menuRef}>
            <Link to="/privacy-policy" onClick={() => setOpen(false)} className={styles.Navlink}>Privacy</Link>
            <Link to="/contact-us" onClick={() => setOpen(false)} className={styles.Navlink}>Contact</Link>
            <Link to="/terms-of-service" onClick={() => setOpen(false)} className={styles.Navlink}>Terms</Link>
          </div>
        )}
      </div>
    </div>
  );
};

