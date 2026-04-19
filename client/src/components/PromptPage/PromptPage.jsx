// import{useLoaderData} from "react-router"
// import { useState } from "react"
// import { submitPrompt } from "./promptHandler";
// import { PromptNavbar } from "./PromptNavbar";


// export const PromptPage=()=>{
//     const pageVisiblity = useLoaderData();
//     const[userPrompt, setUserPrompt]=useState("");

//     if(!pageVisiblity){
//         window.location.assign("http://localhost:3000/signin/check");
//     }else{
//         return(
//         <div>
//             <PromptNavbar></PromptNavbar>
//             <h1>Enter prompt</h1>
//             <input type="text" placeholder="Enter prompt" 
//             onChange={(e)=>setUserPrompt(e.target.value)}/>

//             <button 
//                 onClick={async ()=>{
//                     const modelResponse= await submitPrompt(userPrompt);
//                     setUserPrompt("");
//                 }}
//             >Submit</button>
//             <br />

//         </div>)
//     }
// }


// GENERATED CODE

// import { useLoaderData } from "react-router";
// import { useState, useRef, useEffect } from "react";
// import { submitPrompt } from "./promptHandler";
// import { PromptNavbar } from "./PromptNavbar";
// import styles from "./styles/Promptpage.module.css";

// /* ── Submit arrow icon ── */
// const ArrowUp = () => (
//   <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
//     stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//     <line x1="12" y1="19" x2="12" y2="5" />
//     <polyline points="5 12 12 5 19 12" />
//   </svg>
// );

// const SparkleIcon = () => (
//   <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
//     stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
//     <path d="M12 3v2M12 19v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M3 12h2M19 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
//     <circle cx="12" cy="12" r="4" />
//   </svg>
// );

// export const PromptPage = () => {
//   const pageVisibility = useLoaderData();
//   const [userPrompt, setUserPrompt] = useState("");
//   const textareaRef = useRef(null);

//   // Auto-resize textarea
//   useEffect(() => {
//     const el = textareaRef.current;
//     if (!el) return;
//     el.style.height = "auto";
//     el.style.height = `${Math.min(el.scrollHeight, 200)}px`;
//   }, [userPrompt]);

//   // Submit on Enter (not Shift+Enter)
//   const handleKeyDown = async (e) => {
//     if (e.key === "Enter" && !e.shiftKey) {
//       e.preventDefault();
//       await handleSubmit();
//     }
//   };

//   const handleSubmit = async () => {
//     if (!userPrompt.trim()) return;
//     const current = userPrompt;
//     setUserPrompt("");
//     await submitPrompt(current);
//   };

// //   if (!pageVisibility) {
// //     window.location.assign("http://localhost:3000/signin/check");
// //     return null;
// //   }

//   return (
//     <div className={styles.shell}>
//       <PromptNavbar />

//       <main className={styles.main}>
//         {/* Conversation / empty state */}
//         <div className={styles.conversationArea}>
//           <div className={styles.emptyState}>
//             <div className={styles.emptyIcon}>
//               <SparkleIcon />
//             </div>
//             <span className={styles.emptyTitle}>What's on your mind?</span>
//             <span className={styles.emptySubtitle}>Type a prompt below to get started.</span>
//           </div>
//         </div>

//         {/* Input dock */}
//         <div className={styles.inputDock}>
//           <textarea
//             ref={textareaRef}
//             className={styles.textarea}
//             placeholder="Ask anything…"
//             value={userPrompt}
//             rows={1}
//             onChange={(e) => setUserPrompt(e.target.value)}
//             onKeyDown={handleKeyDown}
//           />
//           <div className={styles.dockBar}>
//             <button
//               className={styles.submitBtn}
//               onClick={handleSubmit}
//               disabled={!userPrompt.trim()}
//               aria-label="Submit"
//             >
//               <ArrowUp />
//             </button>
//           </div>
//         </div>

//         <span className={styles.hint}>Shift + Enter for new line · Enter to send</span>
//       </main>
//     </div>
//   );
// };

// new generated 
import React from "react";
import { useLoaderData } from "react-router";
import { useState, useRef, useEffect } from "react";
import { submitPrompt } from "./promptHandler.js";
import { PromptNavbar } from "./PromptNavbar.jsx";
import { MailThread } from "./Mailthread.jsx";
import styles from "./styles/Promptpage.module.css";

/* ── Icons ── */
const SendIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M22 2L11 13"
      stroke="#ffffff"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22 2L15 22L11 13L2 9L22 2Z"
      stroke="#ffffff"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// const SparkleIcon = () => (
//   <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
//     stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
//     <path d="M12 3v2M12 19v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M3 12h2M19 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
//     <circle cx="12" cy="12" r="4" />
//   </svg>
// ); 

export const PromptPage = () => {
  const pageVisibility = useLoaderData();

  const [userPrompt, setUserPrompt]   = useState("");
  const [turns, setTurns]             = useState([]);   // in-memory history
  const [loading, setLoading]         = useState(false);
  const textareaRef                   = useRef(null);

  // Auto-resize textarea
  useEffect(() => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = `${Math.min(el.scrollHeight, 200)}px`;
  }, [userPrompt]);

  const handleKeyDown = async (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      await handleSubmit();
    }
  };

  const handleSubmit = async () => {
    const trimmed = userPrompt.trim();
    if (!trimmed || loading) return;

    setUserPrompt("");
    setLoading(true);

    try {
      // Build context: pass all previous mail bodies so the model has memory
      const history = turns.map((t) => t.mailBody).join("\n\n---\n\n");
      const contextualPrompt = history
        ? `Previous generated mails for context:\n${history}\n\nNew request: ${trimmed}`
        : trimmed;

      const response = await submitPrompt(contextualPrompt);

      setTurns((prev) => [
        ...prev,
        {
          id:       crypto.randomUUID(),
          prompt:   trimmed,
          mailBody: response?.mailBody ?? "Could not generate mail. Please try again.",
          receiver: response?.mailReceiver ?? "",
          subject: response?.mailSubject ?? "",
          cc: response?.mailcc ?? "",
          bcc: response?.mailbcc?? ""//setting up stuff
        },
      ]);
    } catch (err) {
      console.error("PromptPage submit error:", err);
    } finally {
      setLoading(false);
    }
  };

  // Allow editing body directly from the card
  const handleBodyChange = (id, newBody) => {
    setTurns((prev) =>
      prev.map((t) => (t.id === id ? { ...t, mailBody: newBody } : t))
    );
  };

  if (!pageVisibility) {
    window.location.assign("https://servercerbi.onrender.com/signin/check");
    return null;
  }; // this can be above in the code

  const hasContent = turns.length > 0 || loading;

  return (
    <div className={styles.shell}>
      <PromptNavbar />

      <main className={styles.main}>
        {/* Thread or empty state */}
        <div className={styles.conversationArea}>
          {hasContent ? (
            <MailThread
              turns={turns}
              loading={loading}
              onBodyChange={handleBodyChange}
            />
          ) : (
            <div className={styles.emptyState}>
              <p>check</p>{/* check  */}
              <span className={styles.emptyTitle}>What's on your mind?</span>
              <span className={styles.emptySubtitle}>
                Describe the mail you need and we'll draft it.
              </span>
            </div>
          )}
        </div>

        {/* Input dock */}
        <div className={styles.inputDock}>
          <textarea
            ref={textareaRef}
            className={styles.textarea}
            placeholder="Describe the mail you want to send…"
            value={userPrompt}
            rows={1}
            onChange={(e) => setUserPrompt(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={loading}
          />
          <div className={styles.dockBar}>
            <button
              className={styles.submitBtn}
              onClick={handleSubmit}
              disabled={!userPrompt.trim() || loading}
              aria-label="Submit"
            >
              <SendIcon />
            </button>
          </div>
        </div>

        <span className={styles.hint}>Shift + Enter for new line · Enter to send</span>
      </main>
    </div>
  );
};