import { FC, ReactElement ,useEffect} from 'react';
import { Link } from 'react-router-dom';

import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import styles from '../styles/Skills.module.css';

interface SkillCategory {
  title: string;
  icon: ReactElement;
  skills: string[];
}

interface Certification {
  title: string;
  id: string;
  available: boolean;
}

const Skills: FC = () => {
  const sectionRef = useIntersectionObserver<HTMLElement>((entry) => {
    entry.target.classList.toggle(styles.sectionVisible, entry.isIntersecting);
  }, { threshold: 0.1 });
  
  useEffect(() => {
    if (window.location.hash === '#skills') {
      const element = document.getElementById('skills');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  const skillCategories: SkillCategory[] = [
    {
      title: 'Frontend',
      icon: <i className="fab fa-html5" />,
      skills: ['HTML & CSS', 'JavaScript', 'Tailwind CSS']
    },
    {
      title: 'Backend',
      icon: <i className="fab fa-node-js" />,
      skills: ['React.js', 'Node.js', 'Express.js']
    },
    {
      title: 'Database',
      icon: <i className="fas fa-database" />,
      skills: ['MySQL', 'MongoDB']
    },
    {
      title: 'Programming Language',
      icon: <i className="fas fa-code" />,
      skills: ['C', 'Java']
    }
  ];

  const certifications: Certification[] = [
    {
      title: 'UI/UX Certification',
      id: 'ui-ux-certificate',
      available: true
    },
    {
      title: 'MongoDB Certification',
      id: 'mongodb-certificate',
      available: true
    },
    {
      title: 'Full Stack Web Development',
      id: 'fullstack-certificate',
      available: false
    },
    {
      title: 'DSA Certification',
      id: 'dsa-certificate',
      available: false
    }
  ];

  return (
    <section id="skills" ref={sectionRef} className={styles.skillsSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Skills</h2>
        
        <div className={styles.skillsContainer}>
          <div className={styles.skillHeadings}>
            <h3>Frontend</h3>
            <h3>Backend</h3>
            <h3>Database</h3>
            <h3>Languages</h3>
          </div>

          <div className={styles.skillsContent}>
            {skillCategories.map((category, index) => (
              <div key={index} className={styles.skillGroup}>
                <ul className={styles.skillList}>
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className={styles.skillItem}>
                      {category.icon}
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className={styles.certificatesContainer}>
            <h3 className={styles.certificationsTitle}>Certifications</h3>
            <div className={styles.certificatesGrid}>
              {certifications.map((cert, index) => (
                cert.available ? (
                  <Link
                    key={index}
                    to={`/certificates/${cert.id}`}
                    className={styles.certificateBox}
                  >
                    <i className="fas fa-certificate" />
                    <p className={styles.certificateText}>{cert.title}</p>
                    <div className={styles.shiningEffect}></div>
                  </Link>
                ) : (
                  <div
                    key={index}
                    className={`${styles.certificateBox} ${styles.disabledCert}`}
                  >
                    <i className="fas fa-certificate" />
                    <p className={styles.certificateText}>{cert.title} (Soon)</p>
                    <div className={styles.shiningEffect}></div>
                  </div>
                )
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;