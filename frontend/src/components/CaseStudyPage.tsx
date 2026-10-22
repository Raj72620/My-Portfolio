import { FC } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PROJECTS } from '../data/portfolioData';
import { FaArrowLeft } from 'react-icons/fa';
import CaseStudyModal from './CaseStudyModal';
import styles from '../styles/CaseStudyModal.module.css';

export const CaseStudyPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const project = PROJECTS.find((p) => p.id === id) || null;

  const handleClose = () => {
    navigate('/#work');
  };

  if (!project) {
    return (
      <div style={{ padding: '6rem 2rem', textAlign: 'center', minHeight: '60vh' }}>
        <h2 style={{ color: '#fff', marginBottom: '1rem' }}>Case Study Not Found</h2>
        <p style={{ color: '#94a3b8', marginBottom: '2rem' }}>The requested engineering case study could not be located.</p>
        <button type="button" className="btn btn-primary" onClick={() => navigate('/')}>
          <FaArrowLeft /> Back to Portfolio
        </button>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-primary)' }}>
      <div style={{ padding: '2rem 1.5rem', maxWidth: '1000px', margin: '0 auto' }}>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={handleClose}
          style={{ marginBottom: '1.5rem' }}
        >
          <FaArrowLeft />
          <span>Back to Portfolio</span>
        </button>
      </div>
      <div className={styles.modalContainer} style={{ margin: '0 auto 4rem', maxWidth: '1000px' }}>
        <CaseStudyModal project={project} onClose={handleClose} />
      </div>
    </div>
  );
};

export default CaseStudyPage;
