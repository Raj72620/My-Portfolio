import { FC, useRef, useEffect, useState } from 'react';
import styles from '../styles/About.module.css';
import gfgImage from '../assets/gfg image.png';
import githubImage from '../assets/github image.png';

const CodingProfiles: FC = () => {
  const [isMounted, setIsMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);

    const createStars = () => {
      if (!containerRef.current) return;
      const container = containerRef.current;

      for (let i = 0; i < 50; i++) {
        const star = document.createElement('div');
        star.className = styles.star;
        const size = Math.random() * 2 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 5}s`;
        star.style.animationDuration = `${2 + Math.random() * 3}s`;
        container.appendChild(star);
      }
    };

    createStars();

    return () => {
      if (containerRef.current) {
        const stars = containerRef.current.querySelectorAll(`.${styles.star}`);
        stars.forEach(star => star.remove());
      }
    };
  }, []);

  if (!isMounted) {
    return <section id="about" className={styles.aboutSection}></section>;
  }

  return (
    <section id="about" className={styles.aboutSection} ref={containerRef}>
      <div className={styles.nebula}></div>

      <div className={styles.profilesHeader}>
        <h2 className={styles.sectionTitle}>
          <span className={styles.titleGlow}>Featured</span>
        </h2>
        <p className={styles.sectionSubtitle}>Connecting through code and contributions</p>
      </div>

      <div className={styles.gridContainer}>
        {/* GeeksForGeeks Container */}
        <div className={styles.profileCardWrapper}>
          <div className={styles.lightingBorder}></div>
          <a
            href="https://www.geeksforgeeks.org/profile/nishanthraj"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.profileCard} ${styles.gfgCard}`}
          >
            <div className={styles.cardContent}>
              <div className={styles.imageContainer}>
                <img src={gfgImage} alt="GeeksForGeeks" className={styles.profileImg} />
                <div className={styles.imageOverlay}></div>
              </div>
              <div className={styles.cardInfo}>
                <h3>GeeksForGeeks</h3>
                <div className={styles.statusBadge}>Profile Active</div>
                <p>Mastering algorithms and data structures through consistent practice.</p>
              </div>
            </div>
            <div className={styles.cardGlow}></div>
          </a>
        </div>

        {/* GitHub Container */}
        <div className={styles.profileCardWrapper}>
          <div className={styles.lightingBorder}></div>
          <a
            href="https://github.com/Raj72620"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.profileCard} ${styles.githubCard}`}
          >
            <div className={styles.cardContent}>
              <div className={styles.imageContainer}>
                <img src={githubImage} alt="GitHub" className={styles.profileImg} />
                <div className={styles.imageOverlay}></div>
              </div>
              <div className={styles.cardInfo}>
                <h3>GitHub</h3>
                <div className={styles.statusBadge}>Open Source</div>
                <p>Building innovative solutions and contributing to the developer community.</p>
              </div>
            </div>
            <div className={styles.cardGlow}></div>
          </a>
        </div>
      </div>

      <div className={styles.decorationCircle}></div>
      <div className={`${styles.decorationCircle} ${styles.circle2}`}></div>
    </section>
  );
};

export default CodingProfiles;