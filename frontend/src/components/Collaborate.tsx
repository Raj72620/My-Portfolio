import { FC, useRef, useState, FormEvent } from 'react';
import confetti from 'canvas-confetti';
import styles from '../styles/Collaborate.module.css';

const Collaborate: FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [messageType, setMessageType] = useState<'success' | 'error'>('success');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    const formData = new FormData(formRef.current!);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      linkedin: formData.get('linkedin') as string || '',
      idea: formData.get('idea') as string
    };

    try {
      // Use absolute URL in production, relative in development
      const apiUrl = process.env.NODE_ENV === 'development' 
        ? 'http://localhost:5000/api/collaborate' 
        : '/api/collaborate';

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      if (result.error) {
        throw new Error(result.error);
      }

      setMessageType('success');
      setMessage('Your idea has been submitted! 🚀 You\'ll receive a confirmation email shortly.');
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#6ba9dc', '#8a6bdc', '#dc6b6b']
      });
      formRef.current?.reset();
    } catch (error) {
      console.error('Submission error:', error);
      setMessageType('error');
      setMessage(
        error instanceof Error 
          ? error.message 
          : 'Network error. Please check your connection and try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="collaborate" className={styles.collaborationSection}>
      <h2 className={styles.sectionHeading}>Let's Build the Future Together</h2>
      <p className={styles.sectionSubtitle}>Got an idea? Let's collaborate and turn it into reality!</p>

      <div className={styles.collaborationContainer}>
        <form 
          ref={formRef}
          onSubmit={handleSubmit}
          className={styles.collaborationForm}
        >
          <div className={styles.formGroup}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className={styles.formInput}
              minLength={2}
              maxLength={50}
            />
          </div>
          
          <div className={styles.formGroup}>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className={styles.formInput}
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            />
          </div>

          <div className={styles.formGroup}>
            <input
              type="url"
              name="linkedin"
              placeholder="LinkedIn Profile URL (optional but needed)"
              className={styles.formInput}
              pattern="https?://(www\.)?linkedin\.com/.+"
              title="Please enter a valid LinkedIn URL"
            />
          </div>
          
          <div className={styles.formGroup}>
            <textarea
              name="idea"
              rows={5}
              placeholder="Describe Your Idea "
              required
              className={styles.formTextarea}
              minLength={30}
              maxLength={1000}
            />
          </div>
          
          <button 
            type="submit" 
            className={styles.submitButton}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <span className={styles.spinner}></span> Sending...
              </>
            ) : (
              'Share Your Idea'
            )}
          </button>

          {message && (
            <div className={`${styles.formMessage} ${messageType === 'success' ? styles.success : styles.error}`}>
              {message}
            </div>
          )}
        </form>

        <div className={styles.collaborationInfo}>
          <h3 className={styles.infoHeading}>Why consider partnering with me?</h3>
          <ul className={styles.benefitsList}>
            <li className={styles.benefitItem}>
              <span className={styles.benefitIcon}>🚀</span>
              <div>
                <strong>Stronger Outcomes:</strong> Partnerships lead to better results
              </div>
            </li>
            <li className={styles.benefitItem}>
              <span className={styles.benefitIcon}>💡</span>
              <div>
                <strong>Diverse Perspectives:</strong> Different minds spark innovative ideas
              </div>
            </li>
            <li className={styles.benefitItem}>
              <span className={styles.benefitIcon}>🤝</span>
              <div>
                <strong>Shared Responsibility:</strong> Workload balance increases team efficiency
              </div>
            </li>
            <li className={styles.benefitItem}>
              <span className={styles.benefitIcon}>🎯</span>
              <div>
                <strong>Results-Driven:</strong> Focus on measurable outcomes
              </div>
            </li>
          </ul>

          <div className={styles.connectSection}>
            <h4 className={styles.connectHeading}>Connect Directly</h4>
            <div className={styles.contactInfo}>
              <p className={styles.contactItem}>
                <span className={styles.contactIcon}>📧</span>
                nishanthraj9618@gmail.com
              </p>
              <p className={styles.contactItem}>
                <span className={styles.contactIcon}>🔗</span>
                <a 
                  href="http://www.linkedin.com/in/nishanth-singh" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  LinkedIn Profile
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collaborate;