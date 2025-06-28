import { FC, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, Variants } from 'framer-motion';
import { gsap } from 'gsap';
import styles from '../styles/ProgrammerIntro.module.css';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

const ProgrammerIntro: FC = () => {
  const navigate = useNavigate();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const codeRef = useRef<HTMLDivElement>(null);

  // Properly typed container variants
  const containerVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      transition: { 
        duration: 0 
      } 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 1, 
        ease: [0.34, 1.56, 0.64, 1] 
      } 
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: { 
        duration: 0.8, 
        ease: [0.36, 0, 0.66, -0.56] 
      }
    }
  };

  // Title animation variants
  const titleVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.34, 1.56, 0.64, 1]
      }
    }
  };

  // Text animation variants
  const textVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay: 0.5,
        ease: [0.33, 1, 0.68, 1]
      }
    }
  };

  // Button animation variants
  const buttonVariants: Variants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 1.2,
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    },
    hover: {
      scale: 1.05,
      backgroundPosition: '100% 0%',
      boxShadow: '0 10px 25px rgba(107, 169, 220, 0.5)',
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.98
    }
  };

  // Quote animation variants
  const quoteVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1.5,
        duration: 1,
        ease: [0.34, 1.56, 0.64, 1]
      }
    }
  };

  // Particles configuration
  const particlesOptions = {
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "repulse",
        },
      },
    },
    particles: {
      color: { value: "#6ba9dc" },
      links: {
        color: "#6ba9dc",
        distance: 150,
        enable: true,
        opacity: 0.3,
        width: 1,
      },
      move: {
        enable: true,
        speed: { min: 0.5, max: 1.5 },
      },
      number: {
        density: { enable: true },
        value: 80,
      },
      opacity: {
        value: { min: 0.3, max: 0.7 },
      },
      shape: { type: "circle" },
      size: {
        value: { min: 1, max: 3 },
      },
    },
    detectRetina: true,
  };

  // Initialize particles engine
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    });

    // Code animation
    if (codeRef.current) {
      const lines = codeRef.current.querySelectorAll('.code-line');
      const keywords = codeRef.current.querySelectorAll('.keyword');
      
      gsap.from(lines, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        delay: 1.5
      });

      keywords.forEach(keyword => {
        gsap.to(keyword, {
          duration: 2,
          color: "#6ba9dc",
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut"
        });
      });
    }
  }, []);

  const handleExplore = () => {
    if (buttonRef.current) {
      // Animate button breaking apart
      gsap.to(buttonRef.current, {
        scale: 1.2,
        duration: 0.2,
        onComplete: () => {
          gsap.to(buttonRef.current, {
            opacity: 0,
            scale: 0.5,
            duration: 0.3,
            onComplete: () => {
              // Create broken pieces effect
              const buttonRect = buttonRef.current?.getBoundingClientRect();
              if (buttonRect) {
                for (let i = 0; i < 8; i++) {
                  const piece = document.createElement('div');
                  piece.className = styles.buttonPiece;
                  piece.style.left = `${buttonRect.left + buttonRect.width / 2}px`;
                  piece.style.top = `${buttonRect.top + buttonRect.height / 2}px`;
                  piece.style.backgroundColor = `hsl(${Math.random() * 60 + 200}, 70%, 60%)`;
                  document.body.appendChild(piece);
                  
                  gsap.to(piece, {
                    x: (Math.random() - 0.5) * 300,
                    y: (Math.random() - 0.5) * 300,
                    rotation: Math.random() * 360,
                    opacity: 0,
                    scale: 0,
                    duration: 1,
                    ease: "power2.out",
                    onComplete: () => piece.remove()
                  });
                }
              }
              
              // Navigate to home page after animation completes
              setTimeout(() => navigate('/home'), 500);
            }
          });
        }
      });
    }
  };

  return (
    <div className={styles.container}>
      <Particles
        id="tsparticles"
        options={particlesOptions}
      />

      {/* Glow effects */}
      <div className={`${styles.glow} ${styles.glow1}`}></div>
      <div className={`${styles.glow} ${styles.glow2}`}></div>
      <div className={`${styles.glow} ${styles.glow3}`}></div>

      <motion.div 
        ref={containerRef}
        className={styles.content}
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={containerVariants}
      >
        {/* Main title with animation */}
        <motion.h1 
          className={styles.mainTitle}
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
          Welcome Geeks
        </motion.h1>

        {/* Main introduction text */}
        <motion.div 
          className={styles.introText}
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          <p>
            I'm <span className={styles.highlight}>Nishant</span>, a programmer with a strong interest in building real-world solutions through code. 
            I enjoy problem-solving and love turning ideas into impactful, functional projects. 
            I'm always eager to <span className={styles.lightRed}>learn</span>, <span className={styles.lightRed}>build</span>, and <span className={styles.lightRed}>grow</span>.
          </p>
        </motion.div>

        {/* Advanced Java Code Snippet */}
        <motion.div 
          className={styles.interactiveElement}
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className={styles.codeSnippet} ref={codeRef}>
            <pre className={styles.javaCode}>
              <code>
                <span className={styles.codeLine}><span className={styles.keyword}>public class</span> <span className={styles.className}>Motivation</span> {'{'}</span>
                <span className={styles.codeLine}>    <span className={styles.keyword}>public static void</span> <span className={styles.methodName}>main</span>(String[] args) {'{'}</span>
                <span className={styles.codeLine}>        <span className={styles.comment}>// My Path</span></span>
                <span className={styles.codeLine}>        <span className={styles.keyword}>while</span>(<span className={styles.boolean}>true</span>) {'{'}</span>
                <span className={styles.codeLine}>            System.<span className={styles.methodName}>out</span>.println(<span className={styles.string}>"Stay persistent"</span>);</span>
                <span className={styles.codeLine}>            System.<span className={styles.methodName}>out</span>.println(<span className={styles.string}>"Solve your bugs"</span>);</span>
                <span className={styles.codeLine}>            System.<span className={styles.methodName}>out</span>.println(<span className={styles.string}>"Always believe in yourself"</span>);</span>
                <span className={styles.codeLine}>            Thread.<span className={styles.methodName}>sleep</span>(1000); <span className={styles.comment}>// Keep going!</span></span>
                <span className={styles.codeLine}>        {'}'}</span>
                <span className={styles.codeLine}>    {'}'}</span>
                <span className={styles.codeLine}>{'}'}</span>
              </code>
            </pre>
          </div>
        </motion.div>

        {/* Inspirational quote */}
        <motion.div 
          className={styles.quote}
          variants={quoteVariants}
          initial="hidden"
          animate="visible"
          whileHover={{
            y: [0, -5, 0, 5, 0],
            transition: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        >
          <p>"The future belongs to those who believe in the beauty of their dreams"</p>
        </motion.div>

        {/* Explore button */}
        <motion.button
          ref={buttonRef}
          onClick={handleExplore}
          className={styles.exploreButton}
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          whileTap="tap"
        >
          <span className={styles.buttonText}>Let's Explore</span>
          <span className={styles.buttonArrow}>→</span>
        </motion.button>
      </motion.div>
    </div>
  );
};

export default ProgrammerIntro;