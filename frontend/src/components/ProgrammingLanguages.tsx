import { FC } from 'react';
import { PROGRAMMING_LANGUAGES } from '../data/portfolioData';
import { FaJava, FaJs, FaDatabase, FaCheck } from 'react-icons/fa';
import styles from '../styles/ProgrammingLanguages.module.css';

export const ProgrammingLanguages: FC = () => {
  const getLangIcon = (name: string) => {
    if (name.includes('Java') && !name.includes('Script')) return <FaJava />;
    if (name.includes('JavaScript')) return <FaJs />;
    if (name.includes('SQL')) return <FaDatabase />;
    return <FaJava />;
  };

  return (
    <section className="section-wrapper" id="languages">
      <div className="content-container">
        <div className="section-header">
          <div className="section-tag">Core Tooling</div>
          <h2 className="section-title">Languages I Work With</h2>
          <p className="section-subtitle">
            A focused, honest toolkit. Rather than listing a laundry list of languages, these are the technologies I utilize with deep algorithmic and production rigor.
          </p>
        </div>

        <div className={styles.languagesGrid}>
          {PROGRAMMING_LANGUAGES.map((lang) => (
            <div key={lang.name} className={`tech-card ${styles.langCard}`}>
              <div className={styles.cardTop}>
                <div className={styles.iconBox}>
                  {getLangIcon(lang.name)}
                </div>
                <span className={styles.badge}>{lang.badge}</span>
              </div>

              <h3 className={styles.langName}>{lang.name}</h3>
              <h4 className={styles.langRole}>{lang.role}</h4>
              <p className={styles.langDesc}>{lang.description}</p>

              <div className={styles.capabilitiesContainer}>
                <span className={styles.capHeading}>PRACTICAL CAPABILITIES:</span>
                <ul className={styles.capList}>
                  {lang.capabilities.map((cap, idx) => (
                    <li key={idx}>
                      <FaCheck className={styles.checkIcon} />
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgrammingLanguages;
