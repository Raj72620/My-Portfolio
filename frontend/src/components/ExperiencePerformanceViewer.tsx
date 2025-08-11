import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from '../styles/ExperiencePerformanceViewer.module.css';

const SIHcertificate = new URL('../assets/SIHcertificate.jpg', import.meta.url).href;
const HackAzureCertificate = new URL('../assets/HackAzureCertificate.jpg', import.meta.url).href;
const ProSolvoCertificate = new URL('../assets/ProSolvoCertificate.jpg', import.meta.url).href;
const TechnoFestCertificate = new URL('../assets/TechnoFestCertificate.jpg', import.meta.url).href;

const ExperiencePerformanceViewer = () => {
  const { certId } = useParams<{ certId: string }>();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  const certificates: Record<string, { image: string; title: string }> = {
    'sih-certificate': {  
      image: SIHcertificate,  
      title: 'Smart India Hackathon Winner',  
    },
    'hack-azure-certificate': {
      image: HackAzureCertificate,
      title: 'Microsoft Azure Hackathon Winner',
    },
    'pro-solvo-certificate': {
      image: ProSolvoCertificate,
      title: 'Pro Solvo Tech Challenge Champion',
    },
    'techno-fest-certificate': {
      image: TechnoFestCertificate,
      title: 'National TechnoFest Excellence Award',
    },
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const handleGoBack = () => {
    navigate('/home#skills', { state: { fromExperiencePerformance: true } });
  };

  if (!certId || !certificates[certId]) {
    return (
      <div className={styles.errorContainer}>
        <div className={styles.errorContent}>
          <h2>Certificate not found</h2>
          <p>The requested certificate doesn't exist or isn't available yet.</p>
          <button onClick={handleGoBack} className={styles.backButton}>
            &larr; Back to Skills
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.experiencePerformanceViewerContainer}>
      <div className={styles.certificateHeader}>
        <h1>{certificates[certId].title}</h1>
        <button onClick={handleGoBack} className={styles.backButton}>
          &larr; Back to Skills
        </button>
      </div>

      {isLoading ? (
        <div className={styles.loader}>
          <div className={styles.spinner}></div>
          <p>Loading certificate...</p>
        </div>
      ) : (
        <div className={styles.certificateImageContainer}>
          <img 
            src={certificates[certId].image} 
            alt={certificates[certId].title} 
            className={styles.certificateImage}
          />
          <div className={styles.certificateOverlay}></div>
        </div>
      )}
    </div>
  );
};

export default ExperiencePerformanceViewer;