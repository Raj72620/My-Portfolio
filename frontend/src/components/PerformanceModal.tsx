import { FC } from 'react';
import styles from '../styles/About.module.css';

interface SemesterData {
  year: string;
  sgpa: string;
  credits: string;
  status: 'completed' | 'pending';
}

const PerformanceModal: FC<{ onClose: () => void }> = ({ onClose }) => {
  const semesterData: SemesterData[] = [
    { year: '2023', sgpa: '8.00', credits: '19.50/19.50', status: 'completed' },
    { year: '2023-24', sgpa: '8.23', credits: '19.50/19.50', status: 'completed' },
    { year: '2024', sgpa: '8.20', credits: '21.50/21.50', status: 'completed' },
    { year: '2024-25', sgpa: '8.65', credits: '21.50/21.50', status: 'completed' },
    { year: '2025', sgpa: '8.21', credits: '21.50/21.50', status: 'completed' },
    { year: '2025-26', sgpa: '-', credits: '-', status: 'pending' },
    { year: '2026', sgpa: '-', credits: '-', status: 'pending' },
  ];

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalBackground}>
        <div className={styles.modalContent}>
          <button className={styles.closeButton} onClick={onClose}>
            &times;
          </button>
          
          <h2 className={styles.modalTitle}>Academic Performance</h2>
          <p className={styles.modalSubtitle}>Bachelor of Technology - Information Technology</p>
          
          <div className={styles.semesterGrid}>
            {semesterData.map((semester, index) => (
              <div 
                key={index} 
                className={`${styles.semesterCard} ${
                  semester.status === 'pending' ? styles.pending : ''
                }`}
              >
                <h3>Semester {index + 1}</h3>
                
                <div className={styles.semesterInfo}>
                  <div>
                    <span>Year:</span>
                    <p>{semester.year}</p>
                  </div>
                  
                  <div>
                    <span>SGPA:</span>
                    <p className={
                      semester.status === 'completed' ? styles.completedValue : styles.pendingValue
                    }>
                      {semester.sgpa}
                    </p>
                  </div>
                  
                  <div>
                    <span>Credits:</span>
                    <p className={
                      semester.status === 'completed' ? styles.completedValue : styles.pendingValue
                    }>
                      {semester.credits}
                    </p>
                  </div>
                </div>
                
                {semester.status === 'pending' && (
                  <div className={styles.lockIcon}>
                    <svg viewBox="0 0 24 24">
                      <path d="M12,17A2,2 0 0,0 14,15C14,13.89 13.1,13 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V10C4,8.89 4.9,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z" />
                    </svg>
                    <span>Coming Soon</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceModal;