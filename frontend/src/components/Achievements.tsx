import { FC, useState } from 'react';
import { ACHIEVEMENTS, CertificateItem } from '../data/portfolioData';
import CertificateModal from './CertificateModal';
import { FaTrophy, FaMedal, FaCertificate, FaSearchPlus } from 'react-icons/fa';
import styles from '../styles/Achievements.module.css';

export const Achievements: FC = () => {
  const [activeCert, setActiveCert] = useState<CertificateItem | null>(null);

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'hackathon': return <FaTrophy />;
      case 'problem-solving': return <FaMedal />;
      default: return <FaCertificate />;
    }
  };

  return (
    <section className="section-wrapper" id="achievements">
      <div className="content-container">
        <div className="section-header">
          <div className="section-tag">Verified Credentials</div>
          <h2 className="section-title">Verified Achievements & Honors</h2>
          <p className="section-subtitle">
            Competitions, national hackathons, and certifications backed by verifiable certificates and public records.
          </p>
        </div>

        <div className={styles.grid}>
          {ACHIEVEMENTS.map((item) => (
            <div
              key={item.id}
              className={`tech-card ${styles.card}`}
              onClick={() => setActiveCert(item)}
            >
              <div className={styles.cardTop}>
                <div className={styles.iconBox}>
                  {getCategoryIcon(item.category)}
                </div>
                <span className={styles.badge}>{item.badge}</span>
              </div>

              <h3 className={styles.itemTitle}>{item.title}</h3>
              <p className={styles.itemIssuer}>{item.issuer} · {item.date}</p>
              <p className={styles.itemSummary}>{item.summary}</p>

              <div className={styles.cardFooter}>
                <button type="button" className={styles.viewCertBtn}>
                  <FaSearchPlus />
                  <span>Inspect Certificate</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <CertificateModal
        certificate={activeCert}
        onClose={() => setActiveCert(null)}
      />
    </section>
  );
};

export default Achievements;
