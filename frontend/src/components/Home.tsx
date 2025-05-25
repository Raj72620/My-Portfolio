import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaLinkedin } from 'react-icons/fa';
import styles from '../styles/Home.module.css';
import photo1 from '../assets/coder.jpg';
import photo2 from '../assets/hackathon2.jpg';
import photo3 from '../assets/coder.jpg';
import photo4 from '../assets/hackathon2.jpg';

const Home = () => {
  const [showHello, setShowHello] = useState(true);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  
  const photos = [photo1, photo2, photo3, photo4];

  // Hello animation timer
  useEffect(() => {
    const timer = setTimeout(() => setShowHello(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  // Photo slideshow timer
  useEffect(() => {
    if (showHello) return;
    
    const interval = setInterval(() => {
      setCurrentPhotoIndex((prev) => (prev + 1) % photos.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [showHello, photos.length]);

  // Animation variants
  const introVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const signatureVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1,
      opacity: 1,
      transition: { duration: 1.5, ease: "easeInOut" }
    }
  };

  const photoVariants = {
    enter: { opacity: 0, scale: 0.9 },
    center: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 }
  };

  return (
    <section className={styles.hero} id="home">
      <div className={styles.container}>
        {/* Enhanced Left Section */}
        <div className={styles.leftSection}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className={styles.introHeader}
          >
            <h1 className={styles.nameTitle}>Nishanth Raj</h1>
            <p className={styles.profession}>Tech Enthusiast</p>
          </motion.div>

          <div className={styles.infoCard}>
            {[
              "Final Year student at SVCET,Chittoor",
              "Daily Routine : Breaking Problems into Code",
              "A Innovative mindset ,Problem Analyzer and Decision-maker"
            ].map((line, index) => (
              <motion.p 
                key={index}
                initial="hidden"
                animate="visible"
                variants={introVariants}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.15 + 0.3,
                  type: "spring",
                  stiffness: 100
                }}
                className={styles.infoLine}
              >
                <span className={styles.bullet}>•</span> {line}
              </motion.p>
            ))}
          </div>

          <div className={styles.skillsContainer}>
            <motion.h3 
              initial="hidden"
              animate="visible"
              variants={introVariants}
              transition={{ delay: 0.8 }}
              className={styles.skillsTitle}
            >
              Technical Skills
            </motion.h3>
            <div className={styles.skillsGrid}>
              {["Java", "React", "Node.js", "Express", "MongoDB","SQL" , "Version Control"].map((skill, index) => (
                <motion.div
                  key={skill}
                  initial="hidden"
                  animate="visible"
                  variants={introVariants}
                  transition={{ 
                    delay: 0.9 + index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  className={styles.skillBadge}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Section with Integrated Signature */}
        <div className={styles.rightSection}>
          <AnimatePresence>
            {showHello ? (
              <motion.div
                key="hello"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 1.5, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 100 }}
                className={styles.helloContainer}
              >
                <div className={styles.helloText}>👋 Hello There !</div>
                <div className={styles.helloSubtext}>Welcome to my portfolio</div>
              </motion.div>
            ) : (
              <div className={styles.profileWithSignature}>
                <motion.div
                  className={styles.profileContainer}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className={styles.circularBorder} />
                  <div className={styles.circularGradient} />
                  
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentPhotoIndex}
                      className={styles.imageWrapper}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      variants={photoVariants}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                    >
                      <img
                        src={photos[currentPhotoIndex]}
                        alt="Nishanth Raj"
                        className={styles.profileImage}
                        loading="eager"
                      />
                    </motion.div>
                  </AnimatePresence>
                  
                  <div className={styles.gradientOverlay} />
                </motion.div>

                {/* Signature positioned at bottom right of photo */}
                <motion.div 
                  className={styles.signatureContainer}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2 }}
                >
                  <svg className={styles.signatureSvg} viewBox="0 0 300 80">
                    <motion.path
                      d="M10 50 C 40 10, 100 10, 130 50 S 190 90, 220 50"
                      fill="none"
                      stroke="url(#signatureGradient)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      variants={signatureVariants}
                      initial="hidden"
                      animate="visible"
                    />
                    <defs>
                      <linearGradient id="signatureGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#6ba9dc" />
                        <stop offset="100%" stopColor="#8a6bdc" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <motion.p 
                    className={styles.signatureText}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.5 }}
                  >
                    Nishanth Raj
                  </motion.p>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
          {/* Add this right after the signatureContainer closing tag */}
<motion.a
  href="http://www.linkedin.com/in/nishanth-singh"
  target="_blank"
  rel="noopener noreferrer"
  className={styles.linkedinLink}
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 3 }}
  whileHover={{ scale: 1.05 }}
>
  <FaLinkedin className={styles.linkedinIcon} />
  <span>LinkedIn</span>
</motion.a>
        </div>
      </div>
    </section>
  );
};

export default Home;