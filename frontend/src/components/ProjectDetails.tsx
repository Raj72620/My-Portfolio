import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Project } from '../types/projects';
import styles from '../styles/ProjectDetails.module.css';

const ProjectDetails = () => {
  const navigate = useNavigate();
  const { projectId } = useParams<{ projectId: string }>();

  // Temporary sample data - replace with actual data fetching
  const project: Project = {
    id: projectId || 'default',
    title: "Sample Project",
    tech: ["React", "TypeScript"],
    image: "/project1.jpg",
    github: "#",
    live: "#",
    description: "Sample project description",
    type: "Web Application"
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      document.querySelector(`.${styles.container}`)?.classList.add(styles.visible);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`${styles.container} ${styles.load}`}>
      <button className={styles.backButton} onClick={() => navigate(-1)}>
        &larr; Back to Projects
      </button>
      
      <h1 className={styles.title}>{project.title}</h1>
      
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
            {project.tech.map((tech, index) => (
              <span key={index} className={styles.techItem}>
                {tech}
                <span className={styles.techHover}></span>
              </span>
            ))}
          </div>
          
          <div className={styles.links}>
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