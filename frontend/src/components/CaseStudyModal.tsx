import { FC, useEffect } from 'react';
import { ProjectItem } from '../data/portfolioData';
import { FaTimes, FaGithub, FaExternalLinkAlt, FaCheck, FaExclamationTriangle, FaLightbulb, FaLayerGroup } from 'react-icons/fa';
import styles from '../styles/CaseStudyModal.module.css';

interface CaseStudyModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const CaseStudyModal: FC<CaseStudyModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const { caseStudy } = project;

  return (
    <div className={styles.modalOverlay} onClick={onClose} role="dialog" aria-modal="true">
      <div className={styles.modalContainer} onClick={(e) => e.stopPropagation()}>
        {/* Modal Top Header */}
        <div className={styles.modalHeader}>
          <div className={styles.headerTitleGroup}>
            <span className={styles.categoryBadge}>{project.category}</span>
            <h2 className={styles.projectTitle}>{project.title} — Case Study</h2>
          </div>
          <button
            type="button"
            className={styles.closeBtn}
            onClick={onClose}
            aria-label="Close Case Study"
          >
            <FaTimes />
          </button>
        </div>

        {/* Modal Body with 17 Engineering Sections */}
        <div className={styles.modalBody}>
          {/* Quick Action Banner */}
          <div className={styles.quickActionBanner}>
            <div className={styles.bannerInfo}>
              <p className={styles.bannerTagline}>{project.tagline}</p>
              <div className={styles.techTags}>
                {project.technologies.map((t) => (
                  <span key={t} className={styles.techPill}>{t}</span>
                ))}
              </div>
            </div>
            <div className={styles.bannerLinks}>
              {project.github && project.github !== '#' && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                  <FaGithub />
                  <span>GitHub Repository</span>
                </a>
              )}
              {project.live && project.live !== '#' && (
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  <FaExternalLinkAlt />
                  <span>Live Deployment</span>
                </a>
              )}
            </div>
          </div>

          {/* 01. Overview & 02. Problem & 03. Objective */}
          <div className={styles.sectionBlock}>
            <h3 className={styles.sectionHeading}>
              <span className={styles.secNum}>01–03</span> Overview, Problem & Objective
            </h3>
            <div className={styles.threeGrid}>
              <div className={styles.infoCard}>
                <h4 className={styles.infoTitle}>01. Overview</h4>
                <p>{caseStudy.overview}</p>
              </div>
              <div className={styles.infoCard}>
                <h4 className={styles.infoTitle}>02. The Problem</h4>
                <p>{caseStudy.problem}</p>
              </div>
              <div className={styles.infoCard}>
                <h4 className={styles.infoTitle}>03. Engineering Objective</h4>
                <p>{caseStudy.objective}</p>
              </div>
            </div>
          </div>

          {/* 04. What I Built & 05. Key Features */}
          <div className={styles.sectionBlock}>
            <h3 className={styles.sectionHeading}>
              <span className={styles.secNum}>04–05</span> What I Built & Key Capabilities
            </h3>
            <div className={styles.twoGrid}>
              <div className={styles.infoCard}>
                <h4 className={styles.infoTitle}>04. What I Built</h4>
                <ul className={styles.checkList}>
                  {caseStudy.whatIBuilt.map((item, idx) => (
                    <li key={idx}>
                      <FaCheck className={styles.checkIcon} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h4 className={styles.infoTitle}>05. Implemented Features</h4>
                <ul className={styles.checkList}>
                  {caseStudy.features.map((item, idx) => (
                    <li key={idx}>
                      <FaCheck className={styles.checkIcon} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* 06. Architecture & Data Flow */}
          <div className={styles.sectionBlock}>
            <h3 className={styles.sectionHeading}>
              <span className={styles.secNum}>06</span> System Architecture & Data Flow
            </h3>
            <div className={styles.infoCard}>
              <p className={styles.archDesc}>{caseStudy.architecture.description}</p>
              <div className={styles.asciiDiagramWrapper}>
                <pre className={styles.asciiPre}>
                  <code>{caseStudy.architecture.flow}</code>
                </pre>
              </div>
            </div>
          </div>

          {/* 07. Technology Decisions */}
          <div className={styles.sectionBlock}>
            <h3 className={styles.sectionHeading}>
              <span className={styles.secNum}>07</span> Architectural & Technology Decisions
            </h3>
            <div className={styles.decisionsGrid}>
              {caseStudy.techDecisions.map((decision, idx) => (
                <div key={idx} className={styles.decisionCard}>
                  <div className={styles.decisionChoice}>
                    <FaLayerGroup className={styles.decisionIcon} />
                    <span>{decision.choice}</span>
                  </div>
                  <p className={styles.decisionReason}>{decision.reason}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 08. Database Design & 09. API Design */}
          <div className={styles.sectionBlock}>
            <h3 className={styles.sectionHeading}>
              <span className={styles.secNum}>08–09</span> Database Schema & API Design
            </h3>
            <div className={styles.twoGrid}>
              <div className={styles.infoCard}>
                <h4 className={styles.infoTitle}>
                  08. Database Design: <span className={styles.engineTag}>{caseStudy.databaseDesign.engine}</span>
                </h4>
                <p className={styles.dbDesc}>{caseStudy.databaseDesign.description}</p>
                <div className={styles.dbModelsList}>
                  {caseStudy.databaseDesign.models.map((m, idx) => (
                    <div key={idx} className={styles.dbModelItem}>
                      <span className={styles.modelName}>{m.name}</span>
                      <span className={styles.modelPurpose}>{m.purpose}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.infoCard}>
                <h4 className={styles.infoTitle}>09. API Contracts & Interfaces</h4>
                <div className={styles.apiEndpointsList}>
                  {caseStudy.apiDesign.map((api, idx) => (
                    <div key={idx} className={styles.apiEndpointItem}>
                      <div className={styles.apiMethodRow}>
                        <span className={`${styles.methodBadge} ${styles[api.method.toLowerCase()] || ''}`}>
                          {api.method}
                        </span>
                        <code className={styles.apiEndpoint}>{api.endpoint}</code>
                      </div>
                      <p className={styles.apiDesc}>{api.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 10. Performance & Metrics */}
          <div className={styles.sectionBlock}>
            <h3 className={styles.sectionHeading}>
              <span className={styles.secNum}>10</span> Performance & Verified Metrics
            </h3>
            <div className={styles.metricsGrid}>
              {caseStudy.metrics.map((m, idx) => (
                <div key={idx} className={styles.metricCard}>
                  <div className={styles.metricCardTop}>
                    <span className={`metric-pill ${m.type}`}>
                      {m.type.toUpperCase()}
                    </span>
                    <span className={styles.metricVal}>{m.value}</span>
                  </div>
                  <h4 className={styles.metricLabel}>{m.label}</h4>
                  <p className={styles.metricDetail}>{m.detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 11. Challenges & 12. Solutions */}
          <div className={styles.sectionBlock}>
            <h3 className={styles.sectionHeading}>
              <span className={styles.secNum}>11–12</span> Engineering Challenges & Solutions
            </h3>
            <div className={styles.twoGrid}>
              <div className={styles.infoCard}>
                <h4 className={`${styles.infoTitle} ${styles.warningTitle}`}>
                  <FaExclamationTriangle /> 11. Obstacles & Challenges
                </h4>
                <ul className={styles.bulletList}>
                  {caseStudy.challenges.map((c, idx) => (
                    <li key={idx}>{c}</li>
                  ))}
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h4 className={`${styles.infoTitle} ${styles.solutionTitle}`}>
                  <FaLightbulb /> 12. Technical Solutions
                </h4>
                <ul className={styles.bulletList}>
                  {caseStudy.solutions.map((s, idx) => (
                    <li key={idx}>{s}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* 13. Limitations & 14. What I Learned & 15. Future Improvements */}
          <div className={styles.sectionBlock}>
            <h3 className={styles.sectionHeading}>
              <span className={styles.secNum}>13–15</span> Limitations, Learnings & Roadmap
            </h3>
            <div className={styles.threeGrid}>
              <div className={styles.infoCard}>
                <h4 className={styles.infoTitle}>13. Known Limitations</h4>
                <ul className={styles.bulletList}>
                  {caseStudy.limitations.map((l, idx) => (
                    <li key={idx}>{l}</li>
                  ))}
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h4 className={styles.infoTitle}>14. Key Engineering Takeaways</h4>
                <ul className={styles.bulletList}>
                  {caseStudy.whatILearned.map((w, idx) => (
                    <li key={idx}>{w}</li>
                  ))}
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h4 className={styles.infoTitle}>15. Future Iterations</h4>
                <ul className={styles.bulletList}>
                  {caseStudy.futureImprovements.map((f, idx) => (
                    <li key={idx}>{f}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* 16 & 17. Links and Verification */}
          <div className={styles.finalVerificationRow}>
            <div className={styles.verificationNote}>
              <span className={styles.verifyBadge}>VERIFIED WORK</span>
              <span>All code, endpoints, and architectures are open to inspection on GitHub.</span>
            </div>
            <div className={styles.modalFooterActions}>
              {project.github && project.github !== '#' && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                  <FaGithub />
                  <span>View Repository</span>
                </a>
              )}
              {project.live && project.live !== '#' && (
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  <FaExternalLinkAlt />
                  <span>Launch Live Application</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyModal;
