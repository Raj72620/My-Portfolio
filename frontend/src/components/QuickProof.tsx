import { FC } from 'react';
import { QUICK_PROOF } from '../data/portfolioData';
import { FaLaptopCode, FaChalkboardTeacher, FaBrain, FaCodeBranch } from 'react-icons/fa';
import styles from '../styles/QuickProof.module.css';

export const QuickProof: FC = () => {
  const getPillarIcon = (pillar: string) => {
    switch (pillar) {
      case 'BUILD': return <FaLaptopCode />;
      case 'TEACH': return <FaChalkboardTeacher />;
      case 'SOLVE': return <FaBrain />;
      case 'CONTRIBUTE': return <FaCodeBranch />;
      default: return <FaLaptopCode />;
    }
  };

  return (
    <section className="section-wrapper" id="glance">
      <div className="content-container">
        <div className="section-header">
          <div className="section-tag">Overview</div>
          <h2 className="section-title">Engineering at a Glance</h2>
          <p className="section-subtitle">
            Core technical pillars defining my practical engineering work, technical mentorship, problem-solving depth, and community contributions.
          </p>
        </div>

        <div className={styles.grid}>
          {QUICK_PROOF.map((item, index) => (
            <div key={index} className={`tech-card ${styles.card}`}>
              <div className={styles.cardTop}>
                <span className={styles.pillarBadge}>
                  {item.pillar}
                </span>
                <div className={styles.iconBox}>
                  {getPillarIcon(item.pillar)}
                </div>
              </div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickProof;
