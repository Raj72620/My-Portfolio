import { FC } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { FaGraduationCap, FaMapMarkerAlt, FaFilePdf, FaCheck } from 'react-icons/fa';
import styles from '../styles/About.module.css';

export const About: FC = () => {
  return (
    <section className="section-wrapper" id="about">
      <div className="content-container">
        <div className="section-header">
          <div className="section-tag">Identity & Background</div>
          <h2 className="section-title">About Nishanth Raj</h2>
          <p className="section-subtitle">
            Software developer, problem solver, and technical instructor committed to verifiable engineering standards and transparent craftsmanship.
          </p>
        </div>

        <div className={styles.aboutGrid}>
          {/* Main Narrative Column */}
          <div className={styles.narrativeCol}>
            <div className={`tech-card ${styles.storyCard}`}>
              <h3 className={styles.storyHeading}>Engineering Journey & Mindset</h3>
              <p>
                I am a 2026 Information Technology graduate and independent software developer focused on architecting practical, reliable, and scalable web platforms.
              </p>
              <p>
                My work spans modular full-stack development, backend RESTful systems, real-time WebRTC media pipelines, and applied AI integrations. Alongside building software, I have invested significant effort into technical education, conducting training workshops across engineering colleges to help students master Data Structures & Algorithms, OOP principles, and clean system design.
              </p>
              <p>
                I prioritize deep technical understanding over surface-level frameworks: breaking algorithmic bottlenecks down to time-space complexity, profiling WebSocket network overhead, and enforcing strict data validation contracts across every API.
              </p>

              <div className={styles.coreValues}>
                <span className={styles.valuesTitle}>CORE ENGINEERING PRINCIPLES:</span>
                <div className={styles.valuesList}>
                  <div className={styles.valueItem}>
                    <FaCheck className={styles.checkIcon} />
                    <span><strong>Truth First:</strong> Every claim backed by working code, repository audits, or measured results.</span>
                  </div>
                  <div className={styles.valueItem}>
                    <FaCheck className={styles.checkIcon} />
                    <span><strong>Low Latency & Resilience:</strong> Designing gracefully degrading systems with sensible timeouts.</span>
                  </div>
                  <div className={styles.valueItem}>
                    <FaCheck className={styles.checkIcon} />
                    <span><strong>Knowledge Sharing:</strong> Elevating peers through structured algorithmic mentoring and open-source code.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Education & Meta Details Column */}
          <div className={styles.metaCol}>
            {/* Education Box */}
            <div className={`tech-card ${styles.eduCard}`}>
              <div className={styles.eduHeader}>
                <div className={styles.eduIconBox}>
                  <FaGraduationCap />
                </div>
                <div>
                  <span className={styles.eduTag}>FORMAL EDUCATION</span>
                  <h4 className={styles.degreeTitle}>{PERSONAL_INFO.education.degree}</h4>
                </div>
              </div>

              <p className={styles.institutionName}>{PERSONAL_INFO.education.institution}</p>

              <div className={styles.eduMetricsRow}>
                <div className={styles.eduMetric}>
                  <span className={styles.eduMetricKey}>GRADUATION</span>
                  <span className={styles.eduMetricVal}>{PERSONAL_INFO.education.graduationYear}</span>
                </div>
                <div className={styles.eduMetric}>
                  <span className={styles.eduMetricKey}>CGPA</span>
                  <span className={styles.eduMetricVal}>{PERSONAL_INFO.education.cgpa}</span>
                </div>
              </div>
            </div>

            {/* Quick Location & Resume Card */}
            <div className={`tech-card ${styles.locationCard}`}>
              <div className={styles.locRow}>
                <FaMapMarkerAlt className={styles.locIcon} />
                <div>
                  <span className={styles.locLabel}>LOCATION & RELOCATION</span>
                  <p className={styles.locVal}>{PERSONAL_INFO.location} · Open to Remote & On-site</p>
                </div>
              </div>

              <div className={styles.resumeBox}>
                <a
                  href={PERSONAL_INFO.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ width: '100%' }}
                >
                  <FaFilePdf />
                  <span>Download / View Official Resume</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
