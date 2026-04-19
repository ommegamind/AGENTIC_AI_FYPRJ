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
  <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13 15C13 14.0572 13 13.5858 13.2929 13.2929C13.5858 13 14.0572 13 15 13H17C17.9428 13 18.4142 13 18.7071 13.2929C19 13.5858 19 14.0572 19 15V17C19 17.9428 19 18.4142 18.7071 18.7071C18.4142 19 17.9428 19 17 19H15C14.0572 19 13.5858 19 13.2929 18.7071C13 18.4142 13 17.9428 13 17V15Z" stroke="#464455" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M13 7C13 6.05719 13 5.58579 13.2929 5.29289C13.5858 5 14.0572 5 15 5H17C17.9428 5 18.4142 5 18.7071 5.29289C19 5.58579 19 6.05719 19 7V9C19 9.94281 19 10.4142 18.7071 10.7071C18.4142 11 17.9428 11 17 11H15C14.0572 11 13.5858 11 13.2929 10.7071C13 10.4142 13 9.94281 13 9V7Z" stroke="#464455" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M5 15C5 14.0572 5 13.5858 5.29289 13.2929C5.58579 13 6.05719 13 7 13H9C9.94281 13 10.4142 13 10.7071 13.2929C11 13.5858 11 14.0572 11 15V17C11 17.9428 11 18.4142 10.7071 18.7071C10.4142 19 9.94281 19 9 19H7C6.05719 19 5.58579 19 5.29289 18.7071C5 18.4142 5 17.9428 5 17V15Z" stroke="#464455" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M5 7C5 6.05719 5 5.58579 5.29289 5.29289C5.58579 5 6.05719 5 7 5H9C9.94281 5 10.4142 5 10.7071 5.29289C11 5.58579 11 6.05719 11 7V9C11 9.94281 11 10.4142 10.7071 10.7071C10.4142 11 9.94281 11 9 11H7C6.05719 11 5.58579 11 5.29289 10.7071C5 10.4142 5 9.94281 5 9V7Z" stroke="#464455" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>),
  Home: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z"/>
      <polyline points="9 21 9 12 15 12 15 21"/>
    </svg>
  ),
  Sun: () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor"     strokeWidth="2" strokeLinecap="round">
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
