import { FC, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/Projects.module.css';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Project } from '../types/projects';
import roboImage from '../assets/robo.png';

const Projects: FC = () => {
  const navigate = useNavigate();
  const carouselRef = useRef<HTMLDivElement>(null);
  
  const sectionRef = useIntersectionObserver<HTMLElement>((entry) => {
    entry.target.classList.toggle(styles.sectionVisible, entry.isIntersecting);
  }, { threshold: 0.1 });

const projects: Project[] = [
  {
    id: 'mern-ecommerce',
    title: "MERN Stack",
    tech: ["React", "Node", "MongoDB"],
    image: roboImage,
    description: "E-commerce platform with payments",
    github: "#",
    live: "#",
    type: "Web Application"
  },
  {
    id: 'social-media',
    title: "Social App",
    tech: ["React", "Firebase"],
    image: roboImage,
    description: "Real-time social platform",
    github: "#",
    live: "#",
    type: "Web Application"
  },
  {
    id: 'task-manager',
    title: "Task Manager",
    tech: ["React", "TypeScript"],
    image: roboImage,
    description: "Productivity with drag-n-drop",
    github: "#",
    live: "#",
    type: "Web Application"
  },
  {
    id: 'portfolio',
    title: "Portfolio",
    tech: ["React", "Three.js"],
    image: roboImage,
    description: "3D interactive portfolio",
    github: "#",
    live: "#",
    type: "Personal Project"
  },
  {
    id: 'weather-app',
    title: "Weather App",
    tech: ["React", "API"],
    image: roboImage,
    description: "Live weather forecasts",
    github: "#",
    live: "#",
    type: "Web Application"
  },
  {
    id: 'ai-project',
    title: "AI Model",
    tech: ["Python", "TensorFlow"],
    image: roboImage,
    description: "Machine learning application",
    github: "#",
    live: "#",
    type: "Machine Learning"
  }
];

  return (
    <section id="projects" ref={sectionRef} className={styles.projectsSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>
          <span className={styles.titleText}>My Projects</span>
          <span className={styles.titleShine}></span>
        </h2>

        <div className={styles.horizontalScrollWrapper}>
          <div className={styles.horizontalCarousel} ref={carouselRef}>
            {projects.map((project) => (
              <div 
                key={project.id}
                className={styles.projectCard}
                onClick={() => navigate(`/projects/${project.id}`)}
              >
                <div className={styles.imageContainer}>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className={styles.projectImage}
                    loading="lazy"
                  />
                  <div className={styles.imageOverlay} />
                </div>
                <div className={styles.projectContent}>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className={styles.techStack}>
                    {project.tech.map((tech, idx) => (
                      <span key={idx}>{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;