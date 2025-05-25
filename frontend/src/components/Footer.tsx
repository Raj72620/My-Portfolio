// components/Footer.tsx
import { FaLinkedin, FaGithub, FaFacebook, FaArrowUp } from 'react-icons/fa';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  const socialLinks = [
    {
      icon: <FaLinkedin className={styles.icon} />,
      url: 'https://www.linkedin.com/in/nishanth-singh/',
      label: 'LinkedIn'
    },
    {
      icon: <FaGithub className={styles.icon} />,
      url: 'https://github.com/Raj72620',
      label: 'GitHub'
    },
    {
      icon: <FaFacebook className={styles.icon} />,
      url: 'https://www.facebook.com/nishanth.raj.50552?mibextid=ZbWKwL',
      label: 'Facebook'
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.leftSection}>
            <div className={styles.copyright}>
              © {new Date().getFullYear()} Nishanth Raj. All rights reserved.
            </div>
            <div className={styles.legalLinks}>
              <a href="/privacy" className={styles.legalLink}>Privacy Policy</a>
              <span className={styles.divider}>|</span>
              <a href="/terms" className={styles.legalLink}>Terms of Service</a>
            </div>
          </div>

          <div className={styles.rightSection}>
            <div className={styles.socialLinks}>
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
            <button 
              onClick={scrollToTop}
              className={styles.backToTop}
              aria-label="Scroll to top"
            >
              <FaArrowUp className={styles.arrowIcon} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;