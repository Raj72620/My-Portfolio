import { FC, useRef, useEffect, useState } from 'react';
import styles from '../styles/About.module.css';
import svcetLogo from '../assets/svcet.jpg';
import PerformanceModal from './PerformanceModal';

const About: FC = () => {
  const [showPerformance, setShowPerformance] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);
    
    const createFloatingIcons = () => {
      if (!containerRef.current) return;
      
      const icons = ['📚', '🏆', '🎓', '💡', '✏️', '📝', '🔍', '🧠'];
      const container = containerRef.current;
      
      // Clear existing icons to prevent duplicates
      const existingIcons = container.querySelectorAll(`.${styles.floatingIcon}`);
      existingIcons.forEach(icon => icon.remove());
      
      for (let i = 0; i < 15; i++) {
        const icon = document.createElement('div');
        icon.className = styles.floatingIcon;
        icon.textContent = icons[Math.floor(Math.random() * icons.length)];
        
        // Random properties
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const size = Math.random() * 20 + 10;
        const duration = 15 + Math.random() * 20;
        const delay = Math.random() * 10;
        
        // Apply styles
        icon.style.setProperty('--pos-x', `${posX}%`);
        icon.style.setProperty('--pos-y', `${posY}%`);
        icon.style.setProperty('--size', `${size}px`);
        icon.style.setProperty('--duration', `${duration}s`);
        icon.style.setProperty('--delay', `${delay}s`);
        
        container.appendChild(icon);
      }
    };

    createFloatingIcons();
    
    return () => {
      // Cleanup function
      if (containerRef.current) {
        const icons = containerRef.current.querySelectorAll(`.${styles.floatingIcon}`);
        icons.forEach(icon => icon.remove());
      }
    };
  }, []);

  // Early return for server-side rendering
  if (!isMounted) {
    return (
      <section id="about" className={styles.aboutSection}>
        <div className={styles.educationBackground}></div>
      </section>
    );
  }

  return (
    <section 
      id="about" 
      className={`${styles.aboutSection} ${isMounted ? styles.mounted : ''}`} 
      ref={containerRef}
    >
      <div className={styles.educationBackground}></div>
      
      <div className={styles.btechContainerWrapper}>
        <div className={styles.btechContainer}>
          <div className={styles.logoCircle}>
            <a href="https://svcetedu.org/" target="_blank" rel="noopener noreferrer">
              <img 
                src={svcetLogo} 
                alt="SVCET Logo" 
                loading="lazy" 
                width={120}
                height={120}
              />
              <div className={styles.logoHalo}></div>
            </a>
          </div>
          
          <div className={styles.infoStack}>
            <div className={styles.infoItem}>
              <h3>B-Tech</h3>
              <p>Information Technology</p>
            </div>
            
            <div className={styles.infoItem}>
              <h3>SVCET</h3>
              <p>Chittoor, AP</p>
            </div>
            
            <div className={styles.infoItem}>
              <h3>Passing Out</h3>
              <p>2026</p>
            </div>
          </div>
          
          <button 
            className={styles.performanceButton}
            onClick={() => setShowPerformance(true)}
            aria-label="View academic performance"
          >
            <span>View Performance</span>
            <div className={styles.buttonSparkles}>
              {[...Array(5)].map((_, i) => (
                <div 
                  key={i} 
                  className={styles.sparkle}
                  style={{
                    '--tx': `${Math.random() * 100 - 50}px`,
                    '--ty': `${Math.random() * 100 - 50}px`
                  } as React.CSSProperties}
                ></div>
              ))}
            </div>
          </button>
        </div>
      </div>
      
      {showPerformance && (
        <PerformanceModal onClose={() => setShowPerformance(false)} />
      )}
    </section>
  );
};

export default About;