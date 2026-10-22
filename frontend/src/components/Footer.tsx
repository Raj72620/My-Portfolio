import { FC } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { FaGithub, FaLinkedin, FaEnvelope, FaFilePdf, FaArrowUp } from 'react-icons/fa';
import styles from '../styles/Footer.module.css';

export const Footer: FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <div className="content-container">
        <div className={styles.footerContent}>
          {/* Identity Left */}
          <div className={styles.leftCol}>
            <span className={styles.brandName}>{PERSONAL_INFO.name.toUpperCase()}</span>
            <span className={styles.brandTitle}>Software Developer · Full-Stack Engineer</span>
            <p className={styles.copyright}>© 2026 Nishanth Raj. All rights reserved.</p>
          </div>

          {/* Links Right */}
          <div className={styles.rightCol}>
            <div className={styles.linksRow}>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.footerLink}
              >
                <FaGithub />
                <span>GitHub</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.footerLink}
              >
                <FaLinkedin />
                <span>LinkedIn</span>
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className={styles.footerLink}
              >
                <FaEnvelope />
                <span>Email</span>
              </a>

              <a
                href={PERSONAL_INFO.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.footerLink}
              >
                <FaFilePdf />
                <span>Resume</span>
              </a>
            </div>

            <button
              type="button"
              className={styles.backToTopBtn}
              onClick={scrollToTop}
              aria-label="Scroll to top of page"
            >
              <span>Back to Top</span>
              <FaArrowUp />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
