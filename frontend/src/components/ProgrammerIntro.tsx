// components/ProgrammerIntro.tsx
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/ProgrammerIntro.module.css';

const ProgrammerIntro: FC = () => {
  const navigate = useNavigate();

  const handleNavigateHome = () => {
    navigate('/home');
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Why I Love Programming</h1>
        
        <div className={styles.section}>
          <h2 className={styles.subtitle}>My Journey</h2>
          <p className={styles.text}>
            From writing my first "Hello World" to building complex applications, 
            programming has been my passion. I love how it combines creativity 
            with problem-solving to create solutions that impact people's lives.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.subtitle}>What Drives Me</h2>
          <p className={styles.text}>
            The thrill of turning ideas into reality keeps me coding. Whether it's 
            optimizing algorithms or crafting beautiful UIs, I enjoy every aspect 
            of the development process.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.subtitle}>My Goals</h2>
          <ul className={styles.goalsList}>
            <li>Build scalable, maintainable software</li>
            <li>Contribute to open source projects</li>
            <li>Master new technologies continuously</li>
            <li>Solve real-world problems through code</li>
          </ul>
        </div>

        <button 
          onClick={handleNavigateHome}
          className={styles.enterButton}
        >
          Enter My Portfolio →
        </button>
      </div>
    </div>
  );
};

export default ProgrammerIntro;