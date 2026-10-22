import { FC } from 'react';
import { WHAT_IVE_DONE } from '../data/portfolioData';
import { FaChalkboardTeacher, FaServer, FaRobot, FaGithub, FaCheck } from 'react-icons/fa';
import styles from '../styles/WhatIveDone.module.css';

export const WhatIveDone: FC = () => {
  const getPillarIcon = (id: string) => {
    switch (id) {
      case 'dsa-mentoring': return <FaChalkboardTeacher />;
      case 'fullstack-dev': return <FaServer />;
      case 'ai-development': return <FaRobot />;
      case 'open-source': return <FaGithub />;
      default: return <FaServer />;
    }
  };

  return (
    <section className="section-wrapper" id="what-ive-done">
      <div className="content-container">
        <div className="section-header">
          <div className="section-tag">Experience & Activities</div>
          <h2 className="section-title">What I've Done</h2>
          <p className="section-subtitle">
            {WHAT_IVE_DONE.subtitle}
          </p>
        </div>

        <div className={styles.pillarsGrid}>
          {WHAT_IVE_DONE.pillars.map((pillar) => (
            <div key={pillar.id} className={`tech-card ${styles.pillarCard}`}>
              <div className={styles.cardHeader}>
                <div className={styles.headerLeft}>
                  <div className={styles.iconBox}>
                    {getPillarIcon(pillar.id)}
                  </div>
                  <div>
                    <span className={styles.badge}>{pillar.badge}</span>
                    <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                  </div>
                </div>
                <span className={styles.metricsBadge}>{pillar.metrics}</span>
              </div>

              <p className={styles.pillarSubtitle}>{pillar.subtitle}</p>
              <p className={styles.pillarDesc}>{pillar.description}</p>

              <div className={styles.focusContainer}>
                <h4 className={styles.focusTitle}>CORE AREAS OF FOCUS:</h4>
                <ul className={styles.focusList}>
                  {pillar.focusAreas.map((area, idx) => (
                    <li key={idx}>
                      <FaCheck className={styles.checkIcon} />
                      <span>{area}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.topicsRow}>
                {pillar.topics.map((t, idx) => (
                  <span key={idx} className={styles.topicPill}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIveDone;
