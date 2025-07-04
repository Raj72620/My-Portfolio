import { FC, ReactElement, useEffect } from 'react';
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

    // Create stars dynamically
    const createStars = () => {
      const starsContainer = document.createElement('div');
      starsContainer.className = styles.starsContainer;
      
      const stars1 = document.createElement('div');
      stars1.className = styles.stars;
      
      const stars2 = document.createElement('div');
      stars2.className = styles.stars2;
      
      const stars3 = document.createElement('div');
      stars3.className = styles.stars3;
      
      starsContainer.appendChild(stars1);
      starsContainer.appendChild(stars2);
      starsContainer.appendChild(stars3);
      
      const section = document.querySelector(`.${styles.skillsSection}`);
      if (section) {
        section.appendChild(starsContainer);
      }
    };

    createStars();
  }, []);

  const skillCategories: SkillCategory[] = [
    {
      title: 'Frontend',
      icon: <i className="fas fa-star" />,
      skills: ['JavaScript', 'React.js','Redux']
    },
    {
      title: 'Backend',
      icon: <i className="fas fa-server" />,
      skills: ['Node.js', 'Express.js', 'REST APIs', 'WebSockets','Restful APIs']
    },
    {
      title: 'Database',
      icon: <i className="fas fa-database" />,
      skills: ['MySQL', 'MongoDB', 'Firebase']
    },
    {
      title: 'FrameWorks',
      icon: <i className="fas fa-code" />,
      skills: ['Tailwind CSS', 'Bootstrap', 'Material UI']
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
      title: 'Full Stack Web Dev',
      id: 'fullstack-certificate',
      available: true
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
        <h2 className={styles.sectionTitle}>
          <span className={styles.titleGlow}>My Skills</span>
        </h2>
        
        <div className={styles.nebula}></div>
        <div className={`${styles.nebula} ${styles.nebula2}`}></div>
        <div className={`${styles.nebula} ${styles.nebula3}`}></div>
        
        <div className={styles.skillsContainer}>
          <div className={styles.skillHeadings}>
            {skillCategories.map((category, index) => (
              <h3 key={index}>
                <span className={styles.headingIcon}>{category.icon}</span>
                {category.title}
              </h3>
            ))}
          </div>

          <div className={styles.skillsContent}>
            {skillCategories.map((category, index) => (
              <div key={index} className={styles.skillGroup}>
                <div className={styles.skillGroupGlow}></div>
                <ul className={styles.skillList}>
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className={styles.skillItem}>
                      <span className={styles.skillIcon}>{category.icon}</span>
                      <span className={styles.skillText}>{skill}</span>
                      <span className={styles.skillPulse}></span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className={styles.certificatesContainer}>
            <h3 className={styles.certificationsTitle}>
              <i className="fas fa-award" /> Certifications
            </h3>
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
      <div className={styles.certificateHoverGlow}></div>
      <span className={styles.availableGlowBadge}>Completed</span>
    </Link>


                ) : (
                  <div
                    key={index}
                    className={`${styles.certificateBox} ${styles.disabledCert}`}
                  >
                    <i className="fas fa-certificate" />
                    <p className={styles.certificateText}>{cert.title} (Soon)</p>
                    <div className={styles.shiningEffect}></div>
                    <div className={styles.comingSoonOverlay}>
                      <span>In Progress</span>
                    </div>
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