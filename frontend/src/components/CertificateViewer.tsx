import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from '../styles/CertificateViewer.module.css';

const uiUxCertificate = new URL('../assets/Ui-Ux certificate.jpg', import.meta.url).href;
const mongodbCertificate = new URL('../assets/Mongodb-Certificate.jpg', import.meta.url).href;
const fullStackCertificate = new URL('../assets/full-stack-web-dev.jpg', import.meta.url).href;

const CertificateViewer = () => {
  const { certId } = useParams<{ certId: string }>();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  const certificates: Record<string, { image: string; title: string }> = {
    'ui-ux-certificate': {
      image: uiUxCertificate,
      title: 'UI/UX Certification',
    },
    'mongodb-certificate': {
      image: mongodbCertificate,
      title: 'MongoDB Certification',
    },
    'fullstack-certificate': {
      image: fullStackCertificate,
      title: 'Full Stack Web Development Certification',
    },
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const handleGoBack = () => {
    // Change this line to properly navigate to skills section
    navigate('/home#skills', { state: { fromCertificate: true } });
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
    <div className={styles.certificateViewerContainer}>
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

export default CertificateViewer;