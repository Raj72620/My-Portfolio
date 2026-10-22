import { FC } from 'react';
import { PROBLEM_SOLVING_DATA } from '../data/portfolioData';
import { FaExternalLinkAlt, FaTrophy, FaCheckCircle, FaChartLine } from 'react-icons/fa';
import { SiGeeksforgeeks, SiLeetcode } from 'react-icons/si';
import styles from '../styles/ProblemSolving.module.css';

export const ProblemSolving: FC = () => {
  return (
    <section className="section-wrapper" id="problem-solving">
      <div className="content-container">
        <div className="section-header">
          <div className="section-tag">Algorithmic Depth</div>
          <h2 className="section-title">Problem Solving & Algorithms</h2>
          <p className="section-subtitle">
            Consistent algorithmic practice focused on time and space complexity tradeoffs, data structure invariants, and competitive problem solving.
          </p>
        </div>

        {/* Large Stat Counters & Profiles Row */}
        <div className={styles.statsRow}>
          {/* Stat 1: Institute Rank #1 (GFG) */}
          <div className={`tech-card ${styles.statCard} ${styles.highlightCard}`}>
            <div className={`${styles.statIconBox} ${styles.trophyIcon}`}>
              <FaTrophy />
            </div>
            <div className={styles.statNumber}>{PROBLEM_SOLVING_DATA.gfgRank}</div>
            <h3 className={styles.statLabel}>{PROBLEM_SOLVING_DATA.gfgRankLabel}</h3>
            <p className={styles.statDesc}>{PROBLEM_SOLVING_DATA.gfgRankDesc}</p>
          </div>

          {/* Stat 2: Competing Top 10% in LeetCode Contests */}
          <div className={`tech-card ${styles.statCard} ${styles.leetcodeHighlightCard}`}>
            <div className={`${styles.statIconBox} ${styles.chartIcon}`}>
              <FaChartLine />
            </div>
            <div className={styles.statNumber}>{PROBLEM_SOLVING_DATA.leetcodeRank}</div>
            <h3 className={styles.statLabel}>{PROBLEM_SOLVING_DATA.leetcodeRankLabel}</h3>
            <p className={styles.statDesc}>{PROBLEM_SOLVING_DATA.leetcodeRankDesc}</p>
          </div>

          {/* Verified Profiles Box */}
          <div className={`tech-card ${styles.profilesCard}`}>
            <h3 className={styles.profileBoxTitle}>VERIFIED COMPETITIVE PROFILES:</h3>
            <div className={styles.profilesList}>
              <a
                href={PROBLEM_SOLVING_DATA.platforms[0].profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.profileLink}
              >
                <div className={styles.platformLeft}>
                  <SiGeeksforgeeks className={styles.gfgIcon} />
                  <div>
                    <h4 className={styles.platformName}>GeeksforGeeks</h4>
                    <span className={styles.platformBadge}>{PROBLEM_SOLVING_DATA.platforms[0].rank}</span>
                  </div>
                </div>
                <FaExternalLinkAlt className={styles.linkArrow} />
              </a>

              <a
                href={PROBLEM_SOLVING_DATA.platforms[1].profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.profileLink}
              >
                <div className={styles.platformLeft}>
                  <SiLeetcode className={styles.leetcodeIcon} />
                  <div>
                    <h4 className={styles.platformName}>LeetCode</h4>
                    <span className={styles.platformBadge}>{PROBLEM_SOLVING_DATA.platforms[1].rank}</span>
                  </div>
                </div>
                <FaExternalLinkAlt className={styles.linkArrow} />
              </a>
            </div>
          </div>
        </div>

        {/* Core Algorithmic Domains Grid */}
        <div className={styles.topicsContainer}>
          <h3 className={styles.topicsTitle}>DOMAINS & PROBLEM-SOLVING PATTERNS:</h3>
          <div className={styles.topicsGrid}>
            {PROBLEM_SOLVING_DATA.topics.map((topic, idx) => (
              <div key={idx} className={styles.topicCard}>
                <div className={styles.topicHeader}>
                  <div className={styles.topicNameRow}>
                    <FaCheckCircle className={styles.topicCheck} />
                    <h4 className={styles.topicName}>{topic.name}</h4>
                  </div>
                  <span className={styles.depthBadge}>Depth: {topic.depth}</span>
                </div>
                <p className={styles.topicDesc}>{topic.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolving;
