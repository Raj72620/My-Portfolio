import { FaLinkedin, FaGithub, FaFacebook, FaArrowUp } from 'react-icons/fa';
import { SiGeeksforgeeks, SiLeetcode } from 'react-icons/si';
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

  const codingProfiles = [
    {
      icon: <SiGeeksforgeeks className={styles.codingIcon} />,
      url: 'https://www.geeksforgeeks.org/user/renusin39mc/',
      label: 'GeeksForGeeks'
    },
    {
      icon: <SiLeetcode className={styles.codingIcon} />,
      url: 'https://leetcode.com/u/Nishanth-Raj/',
      label: 'LeetCode'
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

          {/* New Middle Section */}
          <div className={styles.middleSection}>
            <div className={styles.codingProfiles}>
              {codingProfiles.map((profile, index) => (
                <a
                  key={index}
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.codingLink}
                  aria-label={profile.label}
                >
                  <span className={styles.codingLinkInner}>
                    {profile.icon}
                    <span className={styles.codingLinkText}>{profile.label}</span>
                  </span>
                  <span className={styles.codingLinkShine}></span>
                </a>
              ))}
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