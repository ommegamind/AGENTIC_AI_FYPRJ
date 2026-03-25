

// export const HomePage=()=>{
//     return(
//     <div className={styles.pageBody}>

//         <h1 className={styles.pageTitle} >Home Page</h1>

//     </div>
//     )
// }

// GENERATED CODE 
import styles from "./styles/Homepage.module.css";
import { useNavigate } from "react-router";

export const HomePage = () => {
  const navigate = useNavigate();

  const scrollToSamples = () => {
    document.getElementById("samples").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={styles.page}>

      {/* ── HERO SECTION ── */}
      <section className={styles.hero}>
        <h1 className={styles.title}>
          Send Emails with Just a Prompt
        </h1>

        <div className={styles.btnContainer}>
          <button
            className={styles.primaryBtn}
            onClick={() => navigate("/prompt-page")}
          >
            Login / Get Started →
          </button>

          <button
            className={styles.secondaryBtn}
            onClick={scrollToSamples}
          >
            See How It Works →
          </button>
        </div>

        <p className={styles.description}>
          Our Agentic AI understands your intent and automatically generates
          and sends emails for you. Just type what you want — no formatting,
          no drafting, no manual sending. The AI handles everything from
          writing to delivery.
        </p>
      </section>

      {/* ── SAMPLE SECTION ── */}
      <section id="samples" className={styles.samples}>
        <h2>How it works</h2>

        {/* Example 1 */}
        <div className={styles.chatExample}>
          <div className={styles.userBubble}>
            say hi to mom@gmail.com
          </div>

          <div className={styles.aiCard}>
            <div className={styles.cardHeader}>GENERATED MAIL</div>
            <p>Hi!</p>
            <div className={styles.sentTag}>✔ Sent</div>
          </div>
        </div>

        {/* Example 2 */}
        <div className={styles.chatExample}>
          <div className={styles.userBubble}>
            send a formal apology mail to boss@gmail.com for missing meeting
          </div>

          <div className={styles.aiCard}>
            <div className={styles.cardHeader}>GENERATED MAIL</div>
            <p>
              Dear Sir,<br /><br />
              I sincerely apologize for missing the meeting today...
            </p>

            <div className={styles.mailActions}>
              <span>To: boss@gmail.com</span>
              <button>Send</button>
            </div>
          </div>
        </div>
      </section>

      {/* ── METHODS SECTION ── */}
      <section className={styles.methods}>
        <h2>How this works</h2>

        <p>
          Our platform uses advanced AI models to interpret your prompts
          and convert them into structured email content. Currently, we are
          using Google's Gemini model to process user prompts and generate
          high-quality email drafts. These models understand intent, tone,
          and context, allowing users to write natural language instructions
          instead of structured commands.
        </p>

        <p>
          Once the email content is generated, we integrate with Google’s
          OAuth system to securely send emails on your behalf. This means
          you authenticate using your Google account, and our system uses
          secure access tokens to send emails without ever storing your
          password. The process ensures both security and seamless automation.
        </p>

        <p>
          In the future, we plan to transition from third-party models like
          Gemini to our own custom-trained AI system, allowing for more
          control, personalization, and advanced features.
        </p>
      </section>

      {/* ── LIMITATIONS SECTION ── */}
      <section className={styles.limitations}>
        <h2>Current Limitations</h2>

        <ul>
          <li>
            You can currently send emails to only one recipient at a time.
            Multi-recipient support is under development.
          </li>

          <li>
            Long-term login sessions are not yet supported. We are actively
            improving authentication security and token handling.
          </li>

          <li>
            File attachments and document generation are not available yet,
            but we plan to introduce them soon.
          </li>
        </ul>
      </section>

    </div>
  );
};