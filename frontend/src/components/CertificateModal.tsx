import { FC, useEffect } from 'react';
import { CertificateItem } from '../data/portfolioData';
import { FaTimes, FaExternalLinkAlt, FaAward } from 'react-icons/fa';
import styles from '../styles/CertificateModal.module.css';

interface CertificateModalProps {
  certificate: CertificateItem | null;
  onClose: () => void;
}

export const CertificateModal: FC<CertificateModalProps> = ({ certificate, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (certificate) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [certificate, onClose]);

  if (!certificate) return null;

  return (
    <div className={styles.overlay} onClick={onClose} role="dialog" aria-modal="true">
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <div className={styles.titleGroup}>
            <span className={styles.badge}>
              <FaAward /> {certificate.badge}
            </span>
            <h3 className={styles.certTitle}>{certificate.title}</h3>
            <p className={styles.certIssuer}>{certificate.issuer} · {certificate.date}</p>
          </div>
          <button
            type="button"
            className={styles.closeBtn}
            onClick={onClose}
            aria-label="Close Certificate Viewer"
          >
            <FaTimes />
          </button>
        </div>

        <div className={styles.imageContainer}>
          <img
            src={certificate.image}
            alt={`${certificate.title} verification`}
            className={styles.certImage}
          />
        </div>

        <div className={styles.footer}>
          <p className={styles.certSummary}>{certificate.summary}</p>
          <a
            href={certificate.image}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            <span>Open High-Res Original</span>
            <FaExternalLinkAlt />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CertificateModal;
