import { FC } from 'react';
import { ENGINEERING_FOUNDATIONS } from '../data/portfolioData';
import { FaLayerGroup, FaServer, FaBolt, FaDatabase, FaMicrochip, FaNetworkWired } from 'react-icons/fa';
import styles from '../styles/Engineering.module.css';

export const Engineering: FC = () => {
  const getCategoryIcon = (icon: string) => {
    switch (icon) {
      case 'layers': return <FaLayerGroup />;
      case 'server': return <FaServer />;
      case 'zap': return <FaBolt />;
      case 'database': return <FaDatabase />;
      case 'cpu': return <FaMicrochip />;
      case 'git-branch': return <FaNetworkWired />;
      default: return <FaLayerGroup />;
    }
  };

  return (
    <section className="section-wrapper" id="engineering">
      <div className="content-container">
        <div className="section-header">
          <div className="section-tag">Architecture & Methodologies</div>
          <h2 className="section-title">How I Build Software</h2>
          <p className="section-subtitle">
            A comprehensive breakdown of my engineering capabilities across full-stack delivery, backend architecture, real-time protocols, database storage, and fundamental computer science.
          </p>
        </div>

        <div className={styles.grid}>
          {ENGINEERING_FOUNDATIONS.map((cat, idx) => (
            <div key={idx} className={`tech-card ${styles.card}`}>
              <div className={styles.cardHeader}>
                <div className={styles.iconBox}>
                  {getCategoryIcon(cat.icon)}
                </div>
                <h3 className={styles.categoryTitle}>{cat.category}</h3>
              </div>

              <div className={styles.skillsWrapper}>
                {cat.skills.map((skill, sIdx) => (
                  <span key={sIdx} className={styles.skillPill}>
                    {skill}
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

export default Engineering;
