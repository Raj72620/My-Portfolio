import { FC, useState, useRef, FormEvent } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { FaEnvelope, FaLinkedin, FaGithub, FaFilePdf, FaPaperPlane, FaCheckCircle, FaExclamationCircle, FaCopy } from 'react-icons/fa';
import styles from '../styles/Contact.module.css';

export const Contact: FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'Full-Stack Project',
    message: '',
    linkedin: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setFeedbackMessage('');

    try {
      const apiUrl = (import.meta.env.VITE_API_URL || '') + '/api/contact';

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        // Fallback check: try collaborate endpoint if contact returned 404
        if (response.status === 404) {
          const altResponse = await fetch((import.meta.env.VITE_API_URL || '') + '/api/collaborate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              name: formData.name,
              email: formData.email,
              idea: `[${formData.category}] ${formData.message}`,
              linkedin: formData.linkedin
            })
          });
          if (!altResponse.ok) throw new Error('Submission server returned error');
        } else {
          const errData = await response.json().catch(() => ({}));
          throw new Error(errData.error || `HTTP error ${response.status}`);
        }
      }

      setStatus('success');
      setFeedbackMessage('Thank you! Your message has been sent successfully. I have received your note and will reply promptly.');
      setFormData({
        name: '',
        email: '',
        category: 'Full-Stack Project',
        message: '',
        linkedin: ''
      });
      formRef.current?.reset();
    } catch (err: unknown) {
      console.warn('Backend API note:', err);
      setStatus('error');
      setFeedbackMessage(
        'Notice: Direct server submission encountered a temporary network delay. You can reach me directly via email or copy my address below.'
      );
    }
  };

  return (
    <section className="section-wrapper" id="contact">
      <div className="content-container">
        <div className="section-header">
          <div className="section-tag">Direct Communication</div>
          <h2 className="section-title">Let's Build Something Useful</h2>
          <p className="section-subtitle">
            Have a product idea, engineering problem, freelance contract, or technical mentoring requirement? I'd be glad to discuss it.
          </p>
        </div>

        {/* Quick Action Channel Cards */}
        <div className={styles.channelsGrid}>
          <a href={`mailto:${PERSONAL_INFO.email}`} className={styles.channelCard}>
            <div className={styles.channelIcon}>
              <FaEnvelope />
            </div>
            <div>
              <span className={styles.channelLabel}>PRIMARY EMAIL</span>
              <span className={styles.channelVal}>{PERSONAL_INFO.email}</span>
            </div>
          </a>

          <a href={PERSONAL_INFO.linkedIn} target="_blank" rel="noopener noreferrer" className={styles.channelCard}>
            <div className={styles.channelIcon}>
              <FaLinkedin />
            </div>
            <div>
              <span className={styles.channelLabel}>LINKEDIN NETWORK</span>
              <span className={styles.channelVal}>/in/nishanth-singh</span>
            </div>
          </a>

          <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className={styles.channelCard}>
            <div className={styles.channelIcon}>
              <FaGithub />
            </div>
            <div>
              <span className={styles.channelLabel}>GITHUB PROFILE</span>
              <span className={styles.channelVal}>github.com/Raj72620</span>
            </div>
          </a>

          <a href={PERSONAL_INFO.resumeUrl} target="_blank" rel="noopener noreferrer" className={styles.channelCard}>
            <div className={styles.channelIcon}>
              <FaFilePdf />
            </div>
            <div>
              <span className={styles.channelLabel}>VERIFIED RESUME</span>
              <span className={styles.channelVal}>Google Drive Document</span>
            </div>
          </a>
        </div>

        {/* Form & Context Container */}
        <div className={styles.formContainer}>
          <div className={styles.formLeft}>
            <h3 className={styles.formHeaderTitle}>Send an Inquiry</h3>
            <p className={styles.formHeaderDesc}>
              Fill out this form to connect directly. Inquiries are routed to my inbox with automated database confirmation.
            </p>

            <form ref={formRef} onSubmit={handleSubmit} className={styles.contactForm}>
              <div className={styles.inputRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.label}>Your Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    minLength={2}
                    maxLength={70}
                    placeholder="Alex Chen"
                    className={styles.inputField}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.label}>Your Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="alex@domain.com"
                    className={styles.inputField}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className={styles.inputRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="category" className={styles.label}>Inquiry Category</label>
                  <select
                    id="category"
                    name="category"
                    className={styles.selectField}
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  >
                    <option value="Full-Stack Project">Full-Stack Web Development</option>
                    <option value="Real-Time System">Real-Time / WebRTC System</option>
                    <option value="Backend / API">Backend API & Database Design</option>
                    <option value="Technical Mentoring">Technical Mentoring / College Session</option>
                    <option value="Freelance Opportunity">Freelance Contract</option>
                    <option value="General Inquiry">General Engineering Inquiry</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="linkedin" className={styles.label}>LinkedIn / Portfolio (Optional)</label>
                  <input
                    type="url"
                    id="linkedin"
                    name="linkedin"
                    placeholder="https://linkedin.com/in/username"
                    className={styles.inputField}
                    value={formData.linkedin}
                    onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>Project Scope or Message *</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  minLength={15}
                  maxLength={3000}
                  placeholder="Describe your technical requirements, goals, or questions..."
                  className={styles.textareaField}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <div className={styles.formActions}>
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="btn btn-primary"
                >
                  {status === 'submitting' ? (
                    <span>Transmitting Message...</span>
                  ) : (
                    <>
                      <FaPaperPlane />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </div>

              {/* Status Feedback */}
              {status === 'success' && (
                <div className={styles.successAlert}>
                  <FaCheckCircle className={styles.alertIcon} />
                  <span>{feedbackMessage}</span>
                </div>
              )}

              {status === 'error' && (
                <div className={styles.errorAlert}>
                  <FaExclamationCircle className={styles.alertIcon} />
                  <div>
                    <p>{feedbackMessage}</p>
                    <div className={styles.directEmailFallback}>
                      <a href={`mailto:${PERSONAL_INFO.email}?subject=Inquiry from Portfolio: ${formData.category}`} className="btn btn-secondary">
                        <FaEnvelope /> Open in Email Client
                      </a>
                      <button type="button" onClick={handleCopyEmail} className="btn btn-secondary">
                        <FaCopy /> {copied ? 'Copied to Clipboard!' : 'Copy Address'}
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </form>
          </div>

          {/* Form Right: Availability & Notes */}
          <div className={styles.formRight}>
            <div className={styles.noteCard}>
              <h4 className={styles.noteTitle}>Current Availability</h4>
              <p className={styles.noteText}>
                Open to full-time Software Developer roles graduating in 2026, as well as selected freelance engineering contracts and technical mentorship workshops.
              </p>
              <div className={styles.responseBenchmark}>
                <span className={styles.benchLabel}>TYPICAL RESPONSE TIME</span>
                <span className={styles.benchVal}>Within 24 Hours</span>
              </div>
            </div>

            <div className={styles.noteCard}>
              <h4 className={styles.noteTitle}>Quick Copy Address</h4>
              <p className={styles.noteText}>
                Need to draft an email directly or share my contact information with a recruiting team?
              </p>
              <button
                type="button"
                className={styles.copyBtn}
                onClick={handleCopyEmail}
              >
                <span className={styles.emailText}>{PERSONAL_INFO.email}</span>
                <span className={styles.copyPill}>
                  <FaCopy /> {copied ? 'Copied!' : 'Copy'}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
