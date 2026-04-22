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
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 2V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M17 7.5C17 6.56538 17 6.09808 16.799 5.75C16.6674 5.52197 16.478 5.33261 16.25 5.20096C15.9019 5 15.4346 5 14.5 5H5.5C4.56538 5 4.09808 5 3.75 5.20096C3.52197 5.33261 3.33261 5.52197 3.20096 5.75C3 6.09808 3 6.56538 3 7.5C3 8.43462 3 8.90192 3.20096 9.25C3.33261 9.47803 3.52197 9.66739 3.75 9.79904C4.09808 10 4.56538 10 5.5 10H14.5C15.4346 10 15.9019 10 16.25 9.79904C16.478 9.66739 16.6674 9.47803 16.799 9.25C17 8.90192 17 8.43462 17 7.5Z" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M17 16.5C17 15.5654 17 15.0981 16.799 14.75C16.6674 14.522 16.478 14.3326 16.25 14.201C15.9019 14 15.4346 14 14.5 14H8.5C7.56538 14 7.09808 14 6.75 14.201C6.52197 14.3326 6.33261 14.522 6.20096 14.75C6 15.0981 6 15.5654 6 16.5C6 17.4346 6 17.9019 6.20096 18.25C6.33261 18.478 6.52197 18.6674 6.75 18.799C7.09808 19 7.56538 19 8.5 19H14.5C15.4346 19 15.9019 19 16.25 18.799C16.478 18.6674 16.6674 18.478 16.799 18.25C17 17.9019 17 17.4346 17 16.5Z" stroke="currentColor" strokeWidth="1.5"/>
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
          window.location.href="https://clientcerbi.vercel.app"
         }}
        title={!expanded ? "Log out" : undefined}
      >
        <Icon.Logout />
        <span className={styles.label}>Log out</span>
      </button>
    </nav>
  );
};
