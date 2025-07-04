import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Projects.module.css";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { motion, AnimatePresence } from "framer-motion";
import { FaTh } from "react-icons/fa";
import { projects } from "../data/projects";

const Projects = () => {
  const navigate = useNavigate();
  const sectionRef = useIntersectionObserver(
    (entry) => {
      entry.target.classList.toggle(
        styles.sectionVisible,
        entry.isIntersecting
      );
    },
    { threshold: 0.1 }
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [isExploding, setIsExploding] = useState(false);
  const containerRef = useRef(null);

  // Auto-rotate projects
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        setActiveIndex((prev) => (prev + 1) % projects.length);
        setIsAnimating(true);
        setTimeout(() => setIsAnimating(false), 1000);
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [projects.length, isAnimating]);

  // Get visible projects (5 cards with overlapping effect)
  const getVisibleProjects = () => {
    const length = projects.length;
    return [
      projects[(activeIndex - 2 + length) % length],
      projects[(activeIndex - 1 + length) % length],
      projects[activeIndex % length],
      projects[(activeIndex + 1) % length],
      projects[(activeIndex + 2) % length],
    ];
  };

  const handleViewAllClick = () => {
    setIsExploding(true);
    setTimeout(() => {
      setShowAllProjects(true);
      setIsExploding(false);
    }, 800);
  };

  const ButtonExplosion = () => {
    const particles = Array.from({ length: 15 }).map((_, i) => {
      const angle = (i / 15) * Math.PI * 2;
      const distance = 50 + Math.random() * 50;
      return {
        id: i,
        x: Math.cos(angle) * distance,
        y: Math.sin(angle) * distance,
        rotation: Math.random() * 360,
        scale: 0.5 + Math.random() * 0.5,
        delay: Math.random() * 0.2,
      };
    });

    return (
      <div className={styles.explosionContainer}>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className={styles.explosionParticle}
            initial={{ x: 0, y: 0, opacity: 1, scale: 1, rotate: 0 }}
            animate={{
              x: particle.x,
              y: particle.y,
              opacity: 0,
              scale: particle.scale,
              rotate: particle.rotation,
            }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: particle.delay,
              duration: 0.8,
            }}
          />
        ))}
      </div>
    );
  };

  return (
    <section id="projects" ref={sectionRef} className={styles.projectsSection}>
      <div className={styles.container}>
        {/* Compact Section Header */}
        <motion.h2
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          Projects
          <div className={styles.titleUnderline}></div>
        </motion.h2>

        {/* Projects Carousel - Showing 5 cards */}
        <div className={styles.projectsContainer} ref={containerRef}>
          <AnimatePresence>
            {getVisibleProjects().map((project, index) => {
              const position = index - 2; 
              const zIndex = 5 - Math.abs(position);
              const scale = 1 - Math.abs(position) * 0.08; 
              const opacity =
                position === 0 ? 1 : 0.8 - Math.abs(position) * 0.15; 
              const xOffset = position * 70;
              const blur = Math.abs(position) * 4.2;

              return (
                <motion.div
                  key={`${project.id}-${index}`}
                  className={styles.projectCard}
                  style={{
                    zIndex,
                    transformOrigin: "center center",
                  }}
                  initial={{
                    x: `${xOffset}%`,
                    scale: 0.9,
                    opacity: 0,
                    filter: `blur(${blur}px)`,
                  }}
                  animate={{
                    x: `${xOffset}%`,
                    scale,
                    opacity,
                    filter: `blur(${blur}px)`,
                  }}
                  exit={{
                    x: `${xOffset}%`,
                    scale: 0.9,
                    opacity: 0,
                    filter: `blur(${blur}px)`,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                    mass: 0.8,
                  }}
                  onClick={() => {
                    if (position === 0) {
                      navigate(`/projects/${project.id}`);
                    } else {
                      setActiveIndex(
                        (activeIndex + position + projects.length) %
                          projects.length
                      );
                      setIsAnimating(true);
                      setTimeout(() => setIsAnimating(false), 1000);
                    }
                  }}
                  whileHover={{
                    scale: position === 0 ? 1.05 : scale + 0.05,
                  }}
                >
                  <div className={styles.imageContainer}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className={styles.projectImage}
                      loading="lazy"
                    />
                    <div className={styles.imageOverlay} />
                    <div className={styles.techBadge}>{project.type}</div>
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
                  {position === 0 && (
                    <div className={styles.activeIndicator}></div>
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* End Section with Button */}
        <div className={styles.sectionEnd}>
          <div className={styles.endLine}></div>
          <div className={styles.endButtonContainer}>
            <AnimatePresence>
              {isExploding && <ButtonExplosion />}
            </AnimatePresence>
            <motion.button
              className={styles.endButton}
              onClick={handleViewAllClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{
                opacity: isExploding ? 0 : 1,
                x: isExploding ? 40 : 0,
              }}
              transition={{
                delay: isExploding ? 0 : 0.3,
                duration: isExploding ? 0.3 : 0.5,
              }}
            >
              <FaTh className={styles.gridIcon} />
              <span>View All Projects</span>
            </motion.button>
          </div>
        </div>

        {/* All Projects Modal */}
        <AnimatePresence>
          {showAllProjects && (
            <motion.div
              className={styles.allProjectsModal}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowAllProjects(false)}
            >
              <motion.div
                className={styles.allProjectsContainer}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className={styles.closeButton}
                  onClick={() => setShowAllProjects(false)}
                >
                  &times;
                </button>

                <div className={styles.modalTitleContainer}>
                  <h3>All Projects</h3>
                  <div className={styles.modalUnderline}></div>
                </div>

                <div className={styles.projectsGrid}>
                  {projects.map((project, index) => (
                    <motion.div
                      key={project.id}
                      className={styles.gridProjectCard}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + index * 0.05, duration: 0.3 }}
                      whileHover={{ y: -5 }}
                      onClick={() => {
                        navigate(`/projects/${project.id}`);
                        setShowAllProjects(false);
                      }}
                    >
                      <div className={styles.gridImageContainer}>
                        <img
                          src={project.image}
                          alt={project.title}
                          loading="lazy"
                        />
                        <div className={styles.gridTechBadge}>
                          {project.type}
                        </div>
                      </div>
                      <div className={styles.gridProjectContent}>
                        <h4>{project.title}</h4>
                        <p>{project.description}</p>
                        <div className={styles.gridTechStack}>
                          {project.tech.map((tech, idx) => (
                            <span key={idx}>{tech}</span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;