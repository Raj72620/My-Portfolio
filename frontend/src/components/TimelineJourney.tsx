import { FC } from 'react';
import { TIMELINE_JOURNEY } from '../data/portfolioData';
import styles from '../styles/TimelineJourney.module.css';

export const TimelineJourney: FC = () => {
  return (
    <section className="section-wrapper" id="timeline">
      <div className="content-container">
        <div className="section-header">
          <div className="section-tag">Engineering Trajectory</div>
          <h2 className="section-title">Timeline & Progression</h2>
          <p className="section-subtitle">
            Chronological growth from competitive programming and hackathon finalist to real-time systems architect, technical mentor, and independent full-stack developer.
          </p>
        </div>

        <div className={styles.timelineList}>
          {TIMELINE_JOURNEY.map((item, idx) => (
            <div key={idx} className={styles.timelineItem}>
              <div className={styles.timeMarker}>
                <span className={styles.yearBadge}>{item.year}</span>
                <div className={styles.line} />
              </div>

              <div className={`tech-card ${styles.contentBox}`}>
                <h3 className={styles.phaseTitle}>{item.phase}</h3>
                <p className={styles.phaseDetail}>{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineJourney;
