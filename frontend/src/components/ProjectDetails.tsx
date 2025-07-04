import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from '../styles/ProjectDetails.module.css';
import { projects } from '../data/projects'; // We'll create this next

const ProjectDetails = () => {
  const navigate = useNavigate();
  const { projectId } = useParams<{ projectId: string }>();

  // Find the project from your projects data
  const project = projects.find(p => p.id === projectId);

  useEffect(() => {
    const timer = setTimeout(() => {
      document.querySelector(`.${styles.container}`)?.classList.add(styles.visible);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  if (!project) {
    return (
      <div className={styles.container}>
        <button className={styles.backButton} onClick={() => navigate(-1)}>
          &larr; Back to Projects
        </button>
        <h1 className={styles.title}>Project not found</h1>
      </div>
    );
  }

  return (
    <div className={`${styles.container} ${styles.load}`}>
      <button className={styles.backButton} onClick={() => navigate(-1)}>
        &larr; Back to Projects
      </button>
      
      <h1 className={styles.title}>{project.title}</h1>
      <p className={styles.projectType}>{project.type}</p>
      
      <div className={styles.content}>
        <div className={styles.imageContainer}>
          <img 
            src={project.image} 
            alt={project.title} 
            className={styles.image} 
          />
          <div className={styles.imageOverlay} />
        </div>
        
        <div className={styles.details}>
          <p className={styles.description}>{project.description}</p>
          
          <div className={styles.techStack}>
            <h3>Technologies Used</h3>
            <div className={styles.techItems}>
              {project.tech.map((tech, index) => (
                <span key={index} className={styles.techItem}>
                  {tech}
                  <span className={styles.techHover}></span>
                </span>
              ))}
            </div>
          </div>
          
          <div className={styles.links}>
            <h3>Links</h3>
            <a 
              href={project.github} 
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
              <span className={styles.linkUnderline}></span>
            </a>
            <a 
              href={project.live} 
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
              <span className={styles.linkUnderline}></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;