import { useState, useRef, useEffect } from "react";
import { sendMail } from "./promptHandler.js";
import styles from "./styles/Mailthread.module.css";

/* ── Icons ── */
const EditIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/>
    <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/>
  </svg>
);

const SendIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13"/>
    <polygon points="22 2 15 22 11 13 2 9 22 2"/>
  </svg>
);

const CheckIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

const DoneIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
    <polyline points="22 4 12 14.01 9 11.01"/>
  </svg>
);

/* ── Single mail card ── */
const MailCard = ({ turn, onBodyChange }) => {
  const [editing, setEditing]     = useState(false);
  const [body, setBody]           = useState(turn.mailBody);
  const [receiver, setReceiver]   = useState(turn.receiver ?? "");
  const [subject, setSubject]     = useState(turn?.subject ?? "")
  const [sending, setSending]     = useState(false);
  const [status, setStatus]       = useState(null); // null | "sent" | "error"
  const textareaRef               = useRef(null);

  // auto-resize textarea while editing
  useEffect(() => {
    if (!editing || !textareaRef.current) return;
    const el = textareaRef.current;
    el.style.height = "auto";
    el.style.height = `${el.scrollHeight}px`;
    el.focus();
  }, [editing, body]);//subject

  const handleSave = () => {
    onBodyChange(turn.id, body);//subject
    setEditing(false);
  };

  const handleSend = async () => {
    if (!receiver.trim()) {
      textareaRef.current?.focus();
      return;
    }
    setSending(true);
    try {
      await sendMail(body, receiver.trim(), subject.trim());
      setStatus("sent");
    } catch {
      setStatus("error");
    } finally {
      setSending(false);
    }
  };//First checks if the receiver field is non‑empty. If empty, focuses the textarea (or the receiver input? Actually textareaRef is attached to the email body textarea – this is a bug; it should focus the receiver input. But the code as written will focus the body textarea if receiver is empty. Might be a small oversight.)

  return (
    <div className={`${styles.mailCard} ${editing ? styles.editing : ""}`}>
      {/* Header */}
      <div className={styles.cardHeader}>
        <span className={`${styles.cardLabel} ${editing ? styles.editingLabel : ""}`}>
          {editing ? "Editing draft" : "Generated mail"}
        </span>
        {status === "sent"  && <span className={`${styles.statusBadge} ${styles.sent}`}>✓ Sent</span>}
        {status === "error" && <span className={`${styles.statusBadge} ${styles.error}`}>Failed</span>}
      </div>

      {/* Body */}
      {editing ? (
        <textarea
          ref={textareaRef}
          className={styles.mailTextarea}
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      ) : (
        <div className={styles.mailBody}>{body}</div>
      )}

      {/* Receiver and Subject row — shown while editing or before sent */}
      {status !== "sent" && (
        <>
        <div className={styles.receiverRow}>
          <span className={styles.receiverLabel}>To:</span>
          <input
            className={styles.receiverInput}
            type="email"
            placeholder="recipient@example.com"
            value={receiver}
            onChange={(e) => setReceiver(e.target.value)}
          />
        </div>
        <div className={styles.receiverRow}>
          <span className={styles.receiverLabel}>Subject:</span>
          <input
            className={styles.receiverInput}
            type="text"
            placeholder="enter required subject here"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
        </>
      )}

      {/* Actions */}
      <div className={styles.cardActions}>
        {status !== "sent" && (
          <>
            {editing ? (
              <button className={`${styles.btn} ${styles.btnEditActive}`} onClick={handleSave}>
                <CheckIcon /> Done editing
              </button>
            ) : (
              <button className={`${styles.btn} ${styles.btnEdit}`} onClick={() => setEditing(true)}>
                <EditIcon /> Edit
              </button>
            )}

            <button
              className={`${styles.btn} ${styles.btnSend}`}
              onClick={handleSend}
              disabled={sending || !receiver.trim() || editing}
            >
              {sending ? (
                <><DoneIcon /> Sending…</>
              ) : (
                <><SendIcon /> Send</>
              )}
            </button>
          </>
        )}

        {status === "sent" && (
          <span className={`${styles.btn} ${styles.btnEdit}`} style={{ cursor: "default", opacity: 0.6 }}>
            <DoneIcon /> Mail sent
          </span>
        )}
      </div>
    </div>
  );
};

/* ── Skeleton card shown while loading ── */
const SkeletonCard = () => (
  <div className={styles.skeleton}>
    <div className={styles.skeletonLine} style={{ width: "85%" }} />
    <div className={styles.skeletonLine} style={{ width: "70%" }} />
    <div className={styles.skeletonLine} style={{ width: "90%" }} />
    <div className={styles.skeletonLine} style={{ width: "55%" }} />
  </div>
);

/* ── Main MailThread component ── */
/**
 * Props:
 *   turns: Array<{ id, prompt, mailBody, receiver }>
 *   loading: boolean  — show skeleton for in-flight request
 *   onBodyChange: (id, newBody) => void
 */
export const MailThread = ({ turns = [], loading = false, onBodyChange }) => {
  const bottomRef = useRef(null);

  // scroll to bottom whenever a new turn arrives
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [turns.length, loading]);

  if (turns.length === 0 && !loading) return null;

  return (
    <div className={styles.thread}>
      {turns.map((turn) => (
        <div key={turn.id} className={styles.turn}>
          {/* User prompt bubble */}
          <div className={styles.promptRow}>
            <div className={styles.promptBubble}>{turn.prompt}</div>
          </div>

          {/* AI mail card */}
          <MailCard turn={turn} onBodyChange={onBodyChange} />
        </div>
      ))}

      {/* Loading skeleton for the in-flight turn */}
      {loading && (
        <div className={styles.turn}>
          <div className={styles.promptRow}>
            <div className={styles.promptBubble} style={{ opacity: 0.5 }}>…</div>
          </div>
          <SkeletonCard />
        </div>
      )}

      <div ref={bottomRef} />
    </div>
  );
};