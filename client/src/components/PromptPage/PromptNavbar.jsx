// import { Link } from "react-router";
// import { removeUser } from "../../controller/userRegistration";
// import navStyles from "../PromptPage/styles/Navbar.module.css";

// export const PromptNavbar=()=>{
//     return (
//         <div className={navStyles.navbar}>
//             <Link className={navStyles.logo} to={"/"}>Home/Logo</Link>

//             <div className={navStyles.buttonContainer}>
                
//                 <button className={btnStyles.button} role="button">Theme</button>

//                 <button class={btnStyles.button} role="button" 
//                     onClick={async()=>{
//                         await removeUser();
//                     }}>Log Out</button>

//             </div>
//         </div>
//     )
// }


//GENERATED CONTENT 
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { removeUser } from "../../controller/userRegistration.js";
import styles from "./styles/Sidebar.module.css";

/* ── Inline SVG icons (no external dep) ── */
const Icon = {
  Menu: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="3" y1="6"  x2="21" y2="6"/>
      <line x1="3" y1="12" x2="21" y2="12"/>
      <line x1="3" y1="18" x2="21" y2="18"/>
    </svg>
  ),
  Home: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z"/>
      <polyline points="9 21 9 12 15 12 15 21"/>
    </svg>
  ),
  Sun: () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1"  x2="12" y2="3"/>
      <line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22"  x2="5.64" y2="5.64"/>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12"  x2="3" y2="12"/>
      <line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
  ),
  Moon: () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
    </svg>
  ),
  Logout: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/>
      <polyline points="16 17 21 12 16 7"/>
      <line x1="21" y1="12" x2="9" y2="12"/>
    </svg>
  ),
};

const NAV_LINKS = [
  { to: "/",        label: "Home",     icon: Icon.Home     },
];

export const PromptNavbar = () => {
  const location = useLocation();
  const [expanded, setExpanded] = useState(false);

  // Theme: persist to <html data-theme>
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  const sidebarClass = [styles.sidebar, expanded ? styles.expanded : ""].join(" ");

  return (
    <nav className={sidebarClass}>
      {/* Hamburger toggle */}
      <button
        className={styles.toggleBtn}
        onClick={() => setExpanded((v) => !v)}
        aria-label={expanded ? "Collapse sidebar" : "Expand sidebar"}
      >
        <Icon.Menu />
      </button>

      <div className={styles.divider} />

      {/* Nav links */}
      {NAV_LINKS.map(({ to, label, icon: NavIcon }) => (
        <Link
          key={to}
          to={to}
          className={[styles.navItem, location.pathname === to ? styles.active : ""].join(" ")}
          title={!expanded ? label : undefined}
        >
          <NavIcon />
          <span className={styles.label}>{label}</span>
        </Link>
      ))}

      <div className={styles.spacer} />

      <div className={styles.divider} />

      {/* Theme toggle */}
      <button
        className={styles.iconBtn}
        onClick={() => setDark((v) => !v)}
        aria-label="Toggle theme"
        title={!expanded ? (dark ? "Light mode" : "Dark mode") : undefined}
      >
        {dark ? <Icon.Moon /> : <Icon.Sun />}
        <span className={styles.label}>{dark ? "Dark mode" : "Light mode"}</span>
        {/* Mini pill toggle — only visible when expanded */}
        <span className={styles.themeTrack} aria-hidden>
          <span className={[styles.themeThumb, dark ? styles.dark : ""].join(" ")} />
        </span>
      </button>

      {/* Log out */}
      <button
        className={styles.iconBtn}
        onClick={async () => { 
          await removeUser();
          window.location.href="http://localhost:5173/"
         }}
        title={!expanded ? "Log out" : undefined}
      >
        <Icon.Logout />
        <span className={styles.label}>Log out</span>
      </button>
    </nav>
  );
};
