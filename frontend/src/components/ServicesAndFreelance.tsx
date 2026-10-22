import { FC } from 'react';
import { SERVICES, FREELANCE_EXPERIENCE } from '../data/portfolioData';
import { FaGlobe, FaServer, FaVideo, FaRobot, FaBook, FaCheckCircle, FaBriefcase } from 'react-icons/fa';
import styles from '../styles/ServicesAndFreelance.module.css';

export const ServicesAndFreelance: FC = () => {
  const getServiceIcon = (icon: string) => {
    switch (icon) {
      case 'globe': return <FaGlobe />;
      case 'server': return <FaServer />;
      case 'video': return <FaVideo />;
      case 'cpu': return <FaRobot />;
      case 'book': return <FaBook />;
      default: return <FaGlobe />;
    }
  };

  return (
    <section className="section-wrapper" id="services">
      <div className="content-container">
        {/* Beyond the Code Banner */}
        <div className={styles.beyondBox}>
          <div className={styles.beyondHeader}>
            <span className={styles.beyondTag}>PHILOSOPHY</span>
            <h3 className={styles.beyondTitle}>Beyond the Code</h3>
          </div>
          <p className={styles.beyondDesc}>
            Software development goes far beyond typing syntax. I enjoy breaking down complex problems into verifiable systems, teaching foundational concepts to aspiring engineers, experimenting with modern tooling, and contributing to open-source software.
          </p>
          <div className={styles.pillarsStrip}>
            <div className={styles.pillarMini}>
              <span className={styles.miniKey}>BUILD</span>
              <span className={styles.miniVal}>Full-Stack & Real-Time</span>
            </div>
            <div className={styles.pillarMini}>
              <span className={styles.miniKey}>TEACH</span>
              <span className={styles.miniVal}>DSA & Mentoring</span>
            </div>
            <div className={styles.pillarMini}>
              <span className={styles.miniKey}>EXPLORE</span>
              <span className={styles.miniVal}>Applied AI & Systems</span>
            </div>
            <div className={styles.pillarMini}>
              <span className={styles.miniKey}>CONTRIBUTE</span>
              <span className={styles.miniVal}>Open Source & Community</span>
            </div>
          </div>
        </div>

        {/* Services / What I Can Build Header */}
        <div className="section-header" style={{ marginTop: '4rem' }}>
          <div className="section-tag">Capabilities for Hire & Contracts</div>
          <h2 className="section-title">What I Can Build</h2>
          <p className="section-subtitle">
            Concrete engineering services I deliver for clients, startups, and product teams with transparent scopes and production-quality code.
          </p>
        </div>

        {/* Services Grid */}
        <div className={styles.servicesGrid}>
          {SERVICES.map((srv, idx) => (
            <div key={idx} className={`tech-card ${styles.serviceCard}`}>
              <div className={styles.cardTop}>
                <div className={styles.iconBox}>
                  {getServiceIcon(srv.icon)}
                </div>
                <h3 className={styles.serviceTitle}>{srv.title}</h3>
              </div>

              <p className={styles.serviceDesc}>{srv.description}</p>

              <div className={styles.deliverablesList}>
                <span className={styles.delivHeader}>CORE DELIVERABLES:</span>
                <ul>
                  {srv.deliverables.map((item, dIdx) => (
                    <li key={dIdx}>
                      <FaCheckCircle className={styles.checkIcon} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Independent / Freelance Experience Profile */}
        <div className={styles.freelanceBox}>
          <div className={styles.freelanceTop}>
            <div className={styles.freelanceBadge}>
              <FaBriefcase />
              <span>{FREELANCE_EXPERIENCE.type}</span>
            </div>
            <h3 className={styles.freelanceRole}>{FREELANCE_EXPERIENCE.role}</h3>
            <p className={styles.freelanceSummary}>{FREELANCE_EXPERIENCE.summary}</p>
          </div>

          <div className={styles.responsibilitiesWrapper}>
            <span className={styles.respHeader}>END-TO-END RESPONSIBILITIES COVERED:</span>
            <div className={styles.respGrid}>
              {FREELANCE_EXPERIENCE.responsibilities.map((resp, rIdx) => (
                <div key={rIdx} className={styles.respItem}>
                  <span className={styles.respBullet}>0{rIdx + 1}</span>
                  <p>{resp}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesAndFreelance;
