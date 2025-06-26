import { FC, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, Variants } from 'framer-motion';
import { gsap } from 'gsap';
import styles from '../styles/ProgrammerIntro.module.css';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

const ProgrammerIntro: FC = () => {
  const navigate = useNavigate();
  const titleRef = useRef<HTMLHeadingElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Initialize particles engine
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    });
  }, []);

  // Particles configuration
  const particlesOptions = {
    fpsLimit: 120,
    interactivity: {
      events: {
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
        value: 100,
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
  // GSAP animations
  useEffect(() => {
    gsap.from(titleRef.current, {
      duration: 1.5,
      y: -50,
      opacity: 0,
      ease: "power3.out",
      delay: 0.3
    });

    gsap.to(".glow", {
      duration: 2,
      opacity: 0.8,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut"
    });
  }, []);

  // Framer Motion variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };
  const buttonVariants: Variants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 1.5,
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

  const handleNavigateHome = () => {
    gsap.to(buttonRef.current, {
      duration: 0.5,
      scale: 0.9,
      y: 5,
      ease: "power2.inOut",
      onComplete: () => {
        gsap.to(".content-container", {
          duration: 0.8,
          opacity: 0,
          y: 50,
          ease: "power3.in",
          onComplete: () => {
            navigate('/home');
            return undefined; // Explicitly return undefined to satisfy TypeScript
          }
        });
      }
    });
  };

  return (
    <div className={styles.container}>
      {/* Updated Particles component */}
      <Particles
        id="tsparticles"
        options={particlesOptions}
      />

      {/* Glow effects */}
      <div className={`${styles.glow} ${styles.glow1}`}></div>
      <div className={`${styles.glow} ${styles.glow2}`}></div>
      <div className={`${styles.glow} ${styles.glow3}`}></div>

      <motion.div 
        className={`${styles.content} content-container`}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >

        
        <motion.div className={styles.section} variants={itemVariants}>
          <h2 className={styles.subtitle}>
            <span className={styles.underline}>My Journey</span>
          </h2>
          <motion.p 
            className={styles.text}
            whileHover={{ x: 10, transition: { duration: 0.3 } }}
          >
            From writing my first "Hello World" to building complex applications, 
            programming has been my passion. I love how it combines creativity 
            with problem-solving to create solutions that impact people's lives.
          </motion.p>
        </motion.div>

        <motion.div className={styles.section} variants={itemVariants}>
          <h2 className={styles.subtitle}>
            <span className={styles.underline}>What Drives Me</span>
          </h2>
          <motion.p 
            className={styles.text}
            whileHover={{ x: 10, transition: { duration: 0.3 } }}
          >
            The thrill of turning ideas into reality keeps me coding. Whether it's 
            optimizing algorithms or crafting beautiful UIs, I enjoy every aspect 
            of the development process.
          </motion.p>
        </motion.div>

        <motion.div className={styles.section} variants={itemVariants}>
          <h2 className={styles.subtitle}>
            <span className={styles.underline}>My Goals</span>
          </h2>
          <motion.ul className={styles.goalsList}>
            {[
              "Build scalable, maintainable software",
              "Contribute to open source projects",
              "Master new technologies continuously",
              "Solve real-world problems through code"
            ].map((goal, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 + index * 0.15 }}
                whileHover={{ 
                  scale: 1.02,
                  color: "#6ba9dc",
                  transition: { duration: 0.2 }
                }}
              >
                <span className={styles.bullet}>▹</span> {goal}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.button
          ref={buttonRef}
          onClick={handleNavigateHome}
          className={styles.enterButton}
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <span className={styles.buttonText}>Enter My Portfolio</span>
          <span className={styles.buttonArrow}>→</span>
        </motion.button>
      </motion.div>
    </div>
  );
};

export default ProgrammerIntro;