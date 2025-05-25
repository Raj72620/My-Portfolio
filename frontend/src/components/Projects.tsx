import { FC, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import VanillaTilt from 'vanilla-tilt';
import styles from '../styles/Projects.module.css';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Project } from '../types/projects';
import roboImage from '../assets/robo.png';

const Projects: FC = () => {
  const navigate = useNavigate();
  const [hover, setHover] = useState(false);
  const sectionRef = useIntersectionObserver<HTMLElement>((entry) => {
    entry.target.classList.toggle(styles.sectionVisible, entry.isIntersecting);
  }, { threshold: 0.1 });

  const projects: Project[] = [
    {
      id: 'mern-ecommerce',
      title: "MERN Stack Project",
      tech: ["React", "Node.js", "MongoDB"],
      image: roboImage,
      github: "#",
      live: "#",
      description: "Full-stack application with user authentication and CRUD operations",
      type: "MERN Stack"
    },
    {
      id: 'social-media',
      title: "Social Media App",
      tech: ["React", "Firebase", "Material UI"],
      image: roboImage,
      github: "#",
      live: "#",
      description: "Real-time social platform with chat functionality",
      type: "Web Application"
    }
  ];

  const initTilt = useRef((node: HTMLElement | null) => {
    if (node) {
      VanillaTilt.init(node, {
        max: 3,
        speed: 300,
        glare: true,
        'max-glare': 0.1,
        scale: 1.0
      });
    }
  }).current;

  const handleProjectClick = (projectId: string) => {
    navigate(`/projects/${projectId}`);
  };

  const handleViewAllProjects = () => {
    navigate('/all-projects');
  };

  return (
    <section id="projects" ref={sectionRef} className={styles.projectsSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>
          <span className={styles.titleText}>Featured Projects</span>
          <span className={styles.titleShine}></span>
        </h2>

        <div className={styles.projectsContainer}>
          {projects.map((project) => (
            <div 
              key={project.id}
              className={styles.projectCard}
              onClick={() => handleProjectClick(project.id)}
            >
              <div ref={initTilt} className={styles.tiltContainer}>
                <div className={styles.cardGlow}></div>
                <div className={styles.cardInner}>
                  <div className={styles.cardFront}>
                    <div className={styles.imageContainer}>
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className={styles.projectImage}
                        loading="lazy"
                      />
                      <div className={styles.imageOverlay} />
                      <div className={styles.techStack}>
                        {project.tech.map((tech, index) => (
                          <span key={index} className={styles.techPill}>{tech}</span>
                        ))}
                      </div>
                    </div>
                    <h3>{project.title}</h3>
                    <p className={styles.projectType}>{project.type}</p>
                  </div>

                  <div className={styles.cardBack}>
                    <p className={styles.projectDescription}>{project.description}</p>
                    <div className={styles.projectLinks}>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.githubLink}
                      >
                        <i className="fab fa-github" />
                        <span className={styles.linkShine}></span>
                      </a>
                      <a
                        href={`/projects/${project.id}`}
                        className={styles.demoLink}
                      >
                        View Project
                        <span className={styles.linkShine}></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Enhanced View All Projects Container */}
          <div 
            className={styles.viewAllContainer} 
            onClick={handleViewAllProjects}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <div className={styles.viewAllContent}>
              <h3>View All Projects</h3>
              <p>Explore my complete portfolio of work</p>
              <div className={styles.viewAllArrow}>
                <div className={styles.arrowCircle}>
                  {hover ? (
                    <>
                      <span className={styles.arrowLine}></span>
                      <span className={styles.arrowHead}></span>
                    </>
                  ) : (
                    <span>&rarr;</span>
                  )}
                </div>
              </div>
              <div className={styles.viewAllGlow}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;