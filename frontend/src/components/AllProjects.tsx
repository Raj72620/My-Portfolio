import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/AllProjects.module.css';
import { Project } from '../types/projects';
import roboImage from '../assets/robo.png';

const AllProjects: FC = () => {
  const navigate = useNavigate();

  // Sample projects data - replace with your actual projects
  const allProjects: Project[] = [
    {
      id: 'project-1',
      title: "E-commerce Platform",
      tech: ["React", "Node.js", "MongoDB"],
      image: roboImage,
      github: "#",
      live: "#",
      description: "Full-featured online store with payment integration",
      type: "Web Application"
    },
    {
      id: 'project-2',
      title: "Task Management App",
      tech: ["React", "Firebase"],
      image: roboImage,
      github: "#",
      live: "#",
      description: "Collaborative task management with real-time updates",
      type: "Productivity Tool"
    },
    {
      id: 'project-3',
      title: "Portfolio Website",
      tech: ["React", "TypeScript"],
      image: roboImage,
      github: "#",
      live: "#",
      description: "Responsive portfolio website with animations",
      type: "Personal Project"
    },
    {
      id: 'project-4',
      title: "Weather Dashboard",
      tech: ["React", "API Integration"],
      image: roboImage,
      github: "#",
      live: "#",
      description: "Real-time weather information with forecasts",
      type: "Utility App"
    },
    // Add more projects as needed
  ];

  const handleProjectClick = (projectId: string) => {
    navigate(`/projects/${projectId}`);
  };

  return (
    <div className={styles.allProjectsContainer}>
      <div className={styles.header}>
        <button className={styles.backButton} onClick={() => navigate(-1)}>
          &larr; Back to Home
        </button>
        <h1>My Projects</h1>
        <p>A collection of my work from beginning to present</p>
      </div>

      <div className={styles.projectsGrid}>
        {allProjects.map((project) => (
          <div 
            key={project.id}
            className={styles.projectCard}
            onClick={() => handleProjectClick(project.id)}
          >
            <div className={styles.projectImageContainer}>
              <img 
                src={project.image} 
                alt={project.title}
                className={styles.projectImage}
              />
              <div className={styles.techStack}>
                {project.tech.map((tech, idx) => (
                  <span key={idx} className={styles.techPill}>{tech}</span>
                ))}
              </div>
            </div>
            <div className={styles.projectInfo}>
              <h3>{project.title}</h3>
              <p className={styles.projectType}>{project.type}</p>
              <p className={styles.projectDescription}>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProjects;