// import styles from "./styles/pages.module.css";

// export const PrivacyPolicyPage=()=>{
//     return(
//         <div className={styles.pageBody}>
//             <h1 className={styles.pageTitle} >Privacy Policy</h1>
//             <hr className={styles.separator} />
//             <p className="pageContent" ></p>
//         </div>
//         )
// }

//GENERATED CONTENT 
import styles from "./styles/Privacypolicy.module.css";

export const PrivacyPolicyPage = () => {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.container}>
        <h1 className={styles.title}>Privacy Policy</h1>
        <p className={styles.lastUpdated}>Last Updated: March 2026</p>

        <section className={styles.section}>
          <h2>1. Introduction</h2>
          <p>
            This Privacy Policy outlines how our application (“we”, “our”, “us”)
            collects, uses, and safeguards your information while using our
            AI‑powered email automation platform. By accessing or using the
            service, you consent to the data practices described in this policy.
          </p>
        </section>

        <section className={styles.section}>
          <h2>2. Information We Collect</h2>
          <p>We may collect the following information:</p>
          <ul>
            <li>
              <strong>Google Account Information:</strong> When signing in via
              Google OAuth, we may access your basic profile information such as
              name and email.
            </li>
            <li>
              <strong>User Input Data:</strong> Any prompts or text you provide
              to generate emails.
            </li>
            <li>
              <strong>Generated Content:</strong> Email drafts or content created
              by the AI from your input.
            </li>
            <li>
              <strong>Usage Data:</strong> Anonymous interaction logs used to
              improve system performance and reliability.
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>3. How We Use Your Information</h2>
          <p>Your information is used solely for the following purposes:</p>
          <ul>
            <li>Generating and sending emails on your behalf</li>
            <li>Secure user authentication through Google OAuth</li>
            <li>Enhancing AI performance and platform experience</li>
            <li>Ensuring service reliability, functionality, and security</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>4. Google API Services Usage</h2>
          <p>
            Our platform integrates with Google API Services to deliver email‑
            related features. We comply fully with the Google API Services User
            Data Policy, including Limited Use requirements.
          </p>
          <ul>
            <li>We do not read or analyze your Gmail inbox.</li>
            <li>We send emails only when explicitly initiated by you.</li>
            <li>
              We do not share your Google data with third parties for
              advertising or marketing.
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>5. Data Storage & Security</h2>
          <p>
            We employ modern security practices to protect your data. Sensitive
            credentials such as Google passwords are never stored or accessed by
            us.
          </p>
          <ul>
            <li>Secure token handling and encrypted communication</li>
            <li>No plaintext storage of sensitive information</li>
            <li>Access restricted to authorized internal processes only</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>6. Data Sharing</h2>
          <p>
            We do not sell, rent, or distribute your personal information. Data
            is used strictly for service functionality and internal improvement.
          </p>
        </section>

        <section className={styles.section}>
          <h2>7. User Rights & Control</h2>
          <ul>
            <li>Revoke Google access anytime via your Google account settings</li>
            <li>Stop using the service at any time</li>
            <li>Request deletion of your stored data</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>8. Third‑Party Services</h2>
          <p>
            Our platform uses third‑party tools such as Google OAuth. These
            providers maintain their own privacy policies, which we encourage you
            to review.
          </p>
        </section>

        <section className={styles.section}>
          <h2>9. Updates to This Policy</h2>
          <p>
            This Privacy Policy may be updated periodically. Any changes will be
            posted on this page with an updated revision date.
          </p>
        </section>

        <section className={styles.section}>
          <h2>10. Contact Us</h2>
          <p>If you have questions about this Privacy Policy, reach us at:</p>
          <p className={styles.contact}>your-email@example.com</p>
        </section>
      </div>
    </div>
  );
};
