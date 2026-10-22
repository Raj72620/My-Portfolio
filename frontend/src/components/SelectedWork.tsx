import { FC, useState } from 'react';
import { PROJECTS, ProjectItem } from '../data/portfolioData';
import CaseStudyModal from './CaseStudyModal';
import { FaGithub, FaExternalLinkAlt, FaBookOpen, FaCheckCircle, FaBolt } from 'react-icons/fa';
import styles from '../styles/SelectedWork.module.css';

export const SelectedWork: FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section className="section-wrapper" id="work">
      <div className="content-container">
        <div className="section-header">
          <div className="section-tag">Flagship Work</div>
          <h2 className="section-title">Selected Engineering Projects</h2>
          <p className="section-subtitle">
            Four production-ready applications built to solve genuine engineering problems across full-stack architectures, real-time media, blockchain, and developer tooling.
          </p>
        </div>

        {/* Real-Time Highlight Alert Card */}
        <div className={styles.realTimeBanner}>
          <div className={styles.realTimeBadge}>
            <FaBolt className={styles.realTimeIcon} />
            <span>SPECIAL FOCUS: REAL-TIME SYSTEMS</span>
          </div>
          <p className={styles.realTimeText}>
            Specialized engineering in bi-directional media streams, WebRTC mesh topologies, low-latency Socket.IO event coordination, and adaptive bitrate controls.
          </p>
        </div>

        {/* 4 Flagship Projects List */}
        <div className={styles.projectsGrid}>
          {PROJECTS.map((project, index) => (
            <article key={project.id} className={styles.projectCard}>
              <div className={styles.cardHeader}>
                <div className={styles.indexCategory}>
                  <span className={styles.projectNumber}>0{index + 1}</span>
                  <span className={styles.categoryName}>{project.category}</span>
                </div>
                {project.highlightBadge && (
                  <span className={`${styles.badge} ${project.isRealTime ? styles.realTimePill : ''}`}>
                    {project.highlightBadge}
                  </span>
                )}
              </div>

              <div className={styles.cardContentGrid}>
                {/* Visual / Screenshot Column */}
                <div className={styles.visualCol}>
                  <div className={styles.imageContainer}>
                    <img
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      className={styles.projectImage}
                      loading="lazy"
                    />
                    <div className={styles.imageOverlay} />
                  </div>
                </div>

                {/* Details Column */}
                <div className={styles.detailsCol}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.oneLiner}>{project.oneLiner}</p>

                  {/* Tech Stack Chips */}
                  <div className={styles.techChips}>
                    {project.technologies.map((tech) => (
                      <span key={tech} className={styles.techChip}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actual Verified Capabilities */}
                  <div className={styles.capabilitiesBox}>
                    <span className={styles.boxTitle}>KEY CAPABILITIES:</span>
                    <ul className={styles.capabilitiesList}>
                      {project.capabilities.slice(0, 3).map((cap, idx) => (
                        <li key={idx}>
                          <FaCheckCircle className={styles.capIcon} />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Verified Metrics Chips */}
                  <div className={styles.metricsRow}>
                    {project.metricsPreview.map((metric, idx) => (
                      <div key={idx} className={styles.metricItem}>
                        <span className={`metric-pill ${metric.type}`}>
                          {metric.type}
                        </span>
                        <div className={styles.metricData}>
                          <span className={styles.metricVal}>{metric.value}</span>
                          <span className={styles.metricLbl}>{metric.label}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className={styles.actionsRow}>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => setSelectedProject(project)}
                    >
                      <FaBookOpen />
                      <span>Full Case Study</span>
                    </button>

                    {project.github && project.github !== '#' && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary"
                        aria-label={`GitHub repository for ${project.title}`}
                      >
                        <FaGithub />
                        <span>GitHub</span>
                      </a>
                    )}

                    {project.live && project.live !== '#' && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary"
                        aria-label={`Live demo for ${project.title}`}
                      >
                        <FaExternalLinkAlt />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Interactive 17-point Case Study Modal */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default SelectedWork;
