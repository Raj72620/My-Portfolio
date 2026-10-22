import { FC } from 'react';
import { PERSONAL_INFO, SECONDARY_PROOF } from '../data/portfolioData';
import { FaGithub, FaLinkedin, FaArrowDown, FaGraduationCap, FaCode, FaTrophy, FaAward } from 'react-icons/fa';
import styles from '../styles/Hero.module.css';

const TECH_BADGES = ['Java', 'JavaScript', 'React', 'Node.js', 'Express', 'SQL', 'MongoDB', 'WebRTC'];

export const Hero: FC = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const getProofIcon = (iconName: string) => {
    switch (iconName) {
      case 'academic': return <FaGraduationCap />;
      case 'code': return <FaCode />;
      case 'trophy': return <FaTrophy />;
      case 'award': return <FaAward />;
      default: return <FaCode />;
    }
  };

  return (
    <section className={styles.heroSection} id="hero">
      <div className="content-container">
        <div className={styles.heroGrid}>
          {/* Left Column: Text & Engineering Identity */}
          <div className={styles.leftCol}>
            <div className={styles.statusPill}>
              <span className={styles.pulseDot} />
              <span>Available for Software Development Roles & Freelance</span>
            </div>

            <h1 className={styles.heroName}>{PERSONAL_INFO.name}</h1>
            <h2 className={styles.heroTitle}>Software Developer · Full-Stack Engineer</h2>

            <p className={styles.coreStatement}>
              {PERSONAL_INFO.coreMessage}
            </p>

            {/* Core Technologies */}
            <div className={styles.techStackWrapper}>
              <span className={styles.techLabel}>CORE STACK:</span>
              <div className={styles.techChips}>
                {TECH_BADGES.map((tech) => (
                  <span key={tech} className={styles.techChip}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Primary Action CTAs */}
            <div className={styles.ctaRow}>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => scrollToSection('work')}
              >
                <span>View My Work</span>
                <FaArrowDown className={styles.btnArrow} />
              </button>

              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => scrollToSection('contact')}
              >
                <span>Let's Connect</span>
              </button>

              <div className={styles.socialButtons}>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.iconBtn}
                  aria-label="GitHub Profile"
                  title="GitHub Profile"
                >
                  <FaGithub />
                </a>
                <a
                  href={PERSONAL_INFO.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.iconBtn}
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Technical Avatar & Quick Snapshot Card */}
          <div className={styles.rightCol}>
            <div className={styles.profileCard}>
              <div className={styles.terminalHeader}>
                <div className={styles.terminalDots}>
                  <span className={`${styles.dot} ${styles.dotRed}`} />
                  <span className={`${styles.dot} ${styles.dotYellow}`} />
                  <span className={`${styles.dot} ${styles.dotGreen}`} />
                </div>
                <span className={styles.terminalTitle}>nishanth@engineer ~ portfolio</span>
              </div>

              <div className={styles.imageWrapper}>
                <img
                  src={PERSONAL_INFO.photo}
                  alt="Nishanth Raj - Software Developer"
                  className={styles.profileImg}
                  loading="eager"
                />
                <div className={styles.imageOverlay} />
              </div>

              <div className={styles.cardFooter}>
                <div className={styles.metaRow}>
                  <span className={styles.metaKey}>role</span>
                  <span className={styles.metaVal}>Full-Stack / Systems</span>
                </div>
                <div className={styles.metaRow}>
                  <span className={styles.metaKey}>education</span>
                  <span className={styles.metaVal}>B.Tech IT (SVCET '26)</span>
                </div>
                <div className={styles.metaRow}>
                  <span className={styles.metaKey}>focus</span>
                  <span className={styles.metaVal}>WebRTC, Express, React, DSA</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Proof Strip */}
        <div className={styles.proofStrip} aria-label="Verified Achievements Snapshot">
          {SECONDARY_PROOF.map((proof, idx) => (
            <div key={idx} className={styles.proofCard}>
              <div className={styles.proofIcon}>
                {getProofIcon(proof.icon)}
              </div>
              <div className={styles.proofText}>
                <h4 className={styles.proofLabel}>{proof.label}</h4>
                <p className={styles.proofSub}>{proof.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
